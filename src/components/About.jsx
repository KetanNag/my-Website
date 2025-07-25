import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Globe } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4 gradient-text">
                  Full Stack Developer & ML Enthusiast
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I'm a passionate MERN developer with strong backend and frontend skills, 
                  dedicated to building scalable applications and exploring the fascinating 
                  world of machine learning and artificial intelligence.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary-400" />
                    <span className="text-gray-300">Ahmedabad, India</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-primary-400" />
                    <span className="text-gray-300">Born: May 1, 2001</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-primary-400" />
                    <span className="text-gray-300">Languages: English, Hindi, Nepali</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-6 gradient-text">
                  What I Do
                </h3>
                
                <div className="space-y-4">
                  {[
                    'Building responsive web applications with React.js',
                    'Developing robust backend systems with Node.js & Express',
                    'Creating machine learning models for real-world problems',
                    'Designing intuitive user interfaces and experiences',
                    'Working with databases like MongoDB and MySQL'
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity }
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full opacity-20"
              />
              
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
