// src/index.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require("multer");
const { Pool } = require("pg");
const cors = require('cors');
const corsOptions = {
    origin: ["https://localhost:5173"]
}


require('dotenv').config();

const app = express();

// Middleware
// Basic CORS setup
app.use(cors({
  origin: 'http://localhost:5173', // Your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true // Enable if you're using cookies/sessions
}));


// Middleware to parse JSON
app.use(express.json());

// Multer setup for file uploads
const upload = multer({
  storage: multer.memoryStorage(), // Store files in memory for simplicity
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
});

// PostgreSQL connection pool
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "portfolio",
  password: "960X513OV", // Replace with your PostgreSQL password
  port: 5432, // Default PostgreSQL port
});

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

// ===========================================================================================

// -----------------------------------------------------------------------------------------------

// API endpoint to submit portfolio data
app.post("/projects", upload.single("image"), async (req, res) => {
  const {
    title,
    description,
    technologies,
    role,
    demoUrl,
    githubUrl,
    features,
    challenges,
  } = req.body;

  const image = req.file ? req.file.buffer : null; // Handle image if uploaded

  try {
    const query = `
      INSERT INTO projects (
        title, description, technologies, role, demo_url, github_url, features, challenges, image
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING id;
    `;

    const values = [
      title,
      description,
      technologies ? technologies.split(",").map((tech) => tech.trim()) : [],
      role,
      demoUrl,
      githubUrl,
      features ? features.split("\n") : [],
      challenges ? challenges.split("\n") : [],
      image,
    ];

    const result = await pool.query(query, values);

    res.status(201).json({
      message: "Project submitted successfully",
      projectId: result.rows[0].id,
    });
  } catch (error) {
    console.error("Error saving project:", error);
    res.status(500).json({ error: "An error occurred while saving the project." });
  }
});

// --------------------------------------------------------------------------------------------------------

// Get all projects
app.get('/projects', async (req, res) => {
  try {
    console.log('Fetching projects from database...');
    const query = `
      SELECT 
        id, title, description, technologies, role, 
        demo_url, github_url, features, challenges,
        created_at,
        CASE 
          WHEN image IS NOT NULL THEN true 
          ELSE false 
        END as has_image
      FROM projects
      ORDER BY created_at DESC;
    `;
    const result = await pool.query(query);
    console.log('Projects fetched successfully:', result.rows);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching projects:', error.message); // Log the error
    res.status(500).json({ error: 'Failed to fetch projects', details: error.message });
  }
});



// ------------------------------------------------------------------------------------------------------------------

// Get project image by ID
app.get('/projects/:id/image', async (req, res) => {
  try {
    const { id } = req.params;
    const query = 'SELECT image FROM projects WHERE id = $1;';
    const result = await pool.query(query, [id]);

    if (result.rows.length === 0 || !result.rows[0].image) {
      return res.status(404).json({ error: 'Image not found' });
    }

    res.setHeader('Content-Type', 'image/jpeg'); // Adjust to match your image format
    res.send(result.rows[0].image); // Ensure image data is returned properly
  } catch (error) {
    console.error('Error fetching image:', error);
    res.status(500).json({ error: 'Failed to fetch image' });
  }
});

// ----------------------------------------------------------------------------------------------------------------

// Get projects by technology
app.get('/projects/tech/:technology', async (req, res) => {
  try {
    const { technology } = req.params;
    const query = `
      SELECT 
        id, title, description, technologies, role, 
        demo_url, github_url, features, challenges,
        created_at,
        CASE 
          WHEN image IS NOT NULL THEN true 
          ELSE false 
        END as has_image
      FROM projects 
      WHERE $1 = ANY(technologies)
      ORDER BY created_at DESC;
    `;
    
    const result = await pool.query(query, [technology]);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching projects by technology:', error);
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

// ------------------------------------------------------------------------------------------------------

// Get all graphics projects
app.get('/graphics', async (req, res) => {
  try {
    const query = `
      SELECT 
        id, title, description, technologies, role, 
        demo_url, github_url, features, challenges,
        created_at,
        CASE 
          WHEN image IS NOT NULL THEN true 
          ELSE false 
        END as has_image
      FROM projects
      WHERE 'graphics' = ANY(technologies)
      ORDER BY created_at DESC;
    `;
    
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching graphics projects:', error);
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

// -------------------------------------------------------------------------------------------------------------------

// Search projects
app.get('/projects/search', async (req, res) => {
  try {
    const { query: searchQuery } = req.query;
    const searchPattern = `%${searchQuery}%`;
    
    const query = `
      SELECT 
        id, title, description, technologies, role, 
        demo_url, github_url, features, challenges,
        created_at,
        CASE 
          WHEN image IS NOT NULL THEN true 
          ELSE false 
        END as has_image
      FROM projects 
      WHERE 
        title ILIKE $1 OR 
        description ILIKE $1 OR 
        $1 = ANY(technologies)
      ORDER BY created_at DESC;
    `;
    
    const result = await pool.query(query, [searchPattern]);
    res.json(result.rows);
  } catch (error) {
    console.error('Error searching projects:', error);
    res.status(500).json({ error: 'Failed to search projects' });
  }
});

// ====================================================================================================================
// POST route to submit graphic design project data
app.post("/graphics", async (req, res) => {
  const {
    title,
    description,
    toolsUsed,
    role,
    clientName,
    projectType,
    imageUrls,
    inspirationSources,
    challenges,
    features,
  } = req.body;

  try {
    const query = `
      INSERT INTO graphic_design_projects (
        title, description, tools_used, role, client_name, project_type,
        image_urls, inspiration_sources, challenges, features
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      RETURNING id;
    `;

    const values = [
      title,
      description,
      toolsUsed,
      role,
      clientName,
      projectType,
      imageUrls,
      inspirationSources,
      challenges,
      features,
    ];

    const result = await pool.query(query, values);

    res.status(201).json({
      message: "Project submitted successfully",
      projectId: result.rows[0].id,
    });
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).json({ message: "Error submitting project", error });
  }
});

// --------------------------------------------------------------------------------------------------------

// ============================================================================================================

// UIUX projects

// -------------------------------------------------------------------------------------------------

// uiux posting route

app.post("/uiux-projects", async (req, res) => {
  const {
    title,
    description,
    toolsUsed,
    role,
    clientName,
    projectType,
    userResearchSummary,
    personaDetails,
    wireframeUrls,
    prototypesUrl,
    designSystemsUsed,
    features,
    challenges,
  } = req.body;

  try {
    // Log the received data
    console.log('Received data:', req.body);

    const query = `
      INSERT INTO uiux_design_projects (
        title,
        description,
        tools_used,
        role,
        client_name,
        project_type,
        user_research_summary,
        persona_details,
        wireframe_urls,
        prototypes_url,
        design_systems_used,
        features,
        challenges
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
      RETURNING id;
    `;

    const values = [
      title,
      description,
      toolsUsed,
      role,
      clientName,
      projectType,
      userResearchSummary,
      personaDetails,
      wireframeUrls,
      prototypesUrl,
      designSystemsUsed,
      features,
      challenges,
    ];

    // Log the query and values
    console.log('Query:', query);
    console.log('Values:', values);

    const result = await pool.query(query, values);
    
    res.status(201).json({
      message: "UI/UX project submitted successfully",
      projectId: result.rows[0].id,
    });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ 
      message: "Error submitting UI/UX project", 
      error: error.message 
    });
  }
});

// -------------------------------------------------------------------------------------------------------

// get all uiuxProjects.js
app.get("/uiux-projects", async (req, res) => {
  try {
    const query = `
      SELECT * FROM uiux_design_projects
      ORDER BY id DESC;
    `;

    const result = await pool.query(query);
    
    res.status(200).json({
      success: true,
      projects: result.rows
    });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ 
      success: false,
      message: "Error fetching UI/UX projects", 
      error: error.message 
    });
  }
});


// ======================================================================================================

// Admin site

// Login Route
app.post('/api/login', async (req, res) => {
    console.log('Login request received:', req.body); // Add logging

    try {
        const { username, password } = req.body;

        // Validate input
        if (!username || !password) {
            return res.status(400).json({ 
                message: 'Username and password are required' 
            });
        }

        // Find admin by username
        const result = await pool.query(
            'SELECT * FROM admins WHERE username = $1',
            [username]
        );

        const admin = result.rows[0];
        console.log('Found admin:', admin ? 'Yes' : 'No'); // Add logging

        // Check if admin exists
        if (!admin) {
            return res.status(401).json({ 
                message: 'Invalid credentials' 
            });
        }

        // Verify password
        const isValidPassword = await bcrypt.compare(password, admin.password);
        console.log('Password valid:', isValidPassword); // Add logging

        if (!isValidPassword) {
            return res.status(401).json({ 
                message: 'Invalid credentials' 
            });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: admin.id, username: admin.username },
            'your_jwt_secret', // Change this in production
            { expiresIn: '1h' }
        );

        // Send response
        res.status(200).json({
            token,
            user: {
                id: admin.id,
                username: admin.username
            }
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ 
            message: 'Server error',
            error: error.message 
        });
    }
});
// Dashboard count, details

// Get project counts
app.get('/project-counts', async (req, res) => {
  try {
    const query = `
      SELECT
        (SELECT COUNT(*) FROM projects) as software,
        (SELECT COUNT(*) FROM graphic_design_projects) as graphics,
        (SELECT COUNT(*) FROM uiux_design_projects) as uiux
    `;
    
    const result = await pool.query(query);
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching project counts:', error);
    res.status(500).json({ error: 'Failed to fetch project counts' });
  }
});

// ---------------------------------------------------------------------------------------------------------

// Get monthly trends
app.get('/monthly-trends', async (req, res) => {
  try {
    const query = `
      WITH monthly_data AS (
        SELECT
          DATE_TRUNC('month', created_at) as month,
          'software' as type
        FROM projects
        UNION ALL
        SELECT
          DATE_TRUNC('month', created_at) as month,
          'graphics' as type
        FROM graphic_design_projects
        UNION ALL
        SELECT
          DATE_TRUNC('month', created_at) as month,
          'uiux' as type
        FROM uiux_design_projects
      )
      SELECT
        TO_CHAR(month, 'Mon YYYY') as month,
        COUNT(CASE WHEN type = 'software' THEN 1 END) as software,
        COUNT(CASE WHEN type = 'graphics' THEN 1 END) as graphics,
        COUNT(CASE WHEN type = 'uiux' THEN 1 END) as uiux
      FROM monthly_data
      GROUP BY month
      ORDER BY month DESC
      LIMIT 12;
    `;
    
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching monthly trends:', error);
    res.status(500).json({ error: 'Failed to fetch monthly trends' });
  }
});


// ---------------------------------------------------------------------------------------------------------
// Get review statistics
app.get('/review-stats', async (req, res) => {
  try {
    const query = `
      SELECT
        project_type as category,
        AVG(rating) as averageRating,
        COUNT(*) as totalReviews
      FROM project_reviews
      GROUP BY project_type
      ORDER BY project_type;
    `;
    
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching review stats:', error);
    res.status(500).json({ error: 'Failed to fetch review statistics' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});