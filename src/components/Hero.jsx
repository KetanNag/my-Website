import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold"
              whileHover={{ scale: 1.02 }}
            >
              Hi, I'm{' '}
              <span className="gradient-text animate-glow">
                Ketan Nag
              </span>
            </motion.h1>
            
            <motion.h2 
              variants={itemVariants}
              className="text-2xl md:text-3xl text-gray-300 font-light"
            >
              Full Stack Developer | ML Enthusiast
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Building scalable apps. Exploring intelligent systems.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-primary-500/25"
            >
              View Projects
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 glass-effect hover:bg-white/10 text-white rounded-lg font-medium transition-all duration-200"
            >
              Connect
            </motion.a>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center space-x-6 pt-8"
          >
            {[
              { icon: Github, href: 'https://github.com/KetanNag', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/ketannag', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:ketannag6677@gmail.com', label: 'Email' }
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 glass-effect hover:bg-white/10 rounded-lg transition-all duration-200 group"
              >
                <Icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </motion.div>
    </section>
  );
};

export default Hero;
