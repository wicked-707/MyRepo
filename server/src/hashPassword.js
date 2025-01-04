const bcrypt = require('bcrypt');

async function hashPassword() {
  const password = 'admin1234';
  const saltRounds = 10; // The number of salt rounds used for hashing
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  console.log('Hashed password:', hashedPassword);
}

hashPassword();
