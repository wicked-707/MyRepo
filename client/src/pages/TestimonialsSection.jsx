import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Working with Wicklife was an absolute pleasure. His attention to detail and ability to deliver complex projects on time is remarkable. The dashboard he built for us has streamlined our operations significantly.",
      company: "TechCorp Solutions"
    },
    {
      name: "Michael Chang",
      role: "CTO at StartupX",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Exceptional developer with a keen eye for user experience. Wicklife transformed our ideas into a polished, user-friendly application that exceeded our expectations.",
      company: "StartupX Innovation"
    },
    {
      name: "Emily Rodriguez",
      role: "Design Director",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Wicklife's ability to blend technical expertise with creative design principles is outstanding. He created a seamless interface that our users absolutely love.",
      company: "Creative Design Co"
    },
    {
      name: "David Wilson",
      role: "Project Lead",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "An incredibly talented developer who brings both technical skills and strategic thinking to the table. The e-commerce platform he developed has dramatically increased our conversion rates.",
      company: "E-Commerce Solutions"
    },
    {
      name: "Lisa Chen",
      role: "Marketing Director",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Outstanding work on our company's website redesign. Wicklife's understanding of both design principles and technical implementation is truly impressive.",
      company: "Digital Marketing Pro"
    },
    {
      name: "James Anderson",
      role: "Startup Founder",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Working with Wicklife was a game-changer for our startup. His technical expertise and problem-solving skills helped us launch our MVP ahead of schedule.",
      company: "Tech Innovators Inc"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What People Say About Us
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-slate-800 rounded-2xl p-8 shadow-xl relative">
                    {/* Quote Icon */}
                    <div className="absolute -top-4 right-8">
                      <div className="bg-orange-500 rounded-full p-3">
                        <Quote className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Image and Rating */}
                      <div className="flex flex-col items-center md:items-start">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full border-4 border-orange-500/20"
                        />
                        <div className="flex mt-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 text-orange-500 fill-orange-500"
                            />
                          ))}
                        </div>
                      </div>

                      {/* Text Content */}
                      <div className="flex-1">
                        <p className="text-gray-300 text-lg mb-4 italic">
                          "{testimonial.text}"
                        </p>
                        <div className="border-t border-slate-700 pt-4">
                          <h4 className="text-white font-semibold text-lg">
                            {testimonial.name}
                          </h4>
                          <p className="text-orange-500">
                            {testimonial.role}
                          </p>
                          <p className="text-gray-400 text-sm">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-orange-500 p-2 rounded-full text-white hover:bg-orange-600 transition-colors duration-300 shadow-lg hidden md:block"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-orange-500 p-2 rounded-full text-white hover:bg-orange-600 transition-colors duration-300 shadow-lg hidden md:block"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-orange-500 w-6' 
                    : 'bg-slate-700 hover:bg-slate-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;