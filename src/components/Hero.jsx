import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useApi } from '../hooks/useApi';
import LoadingSpinner from './LoadingSpinner';

const Hero = () => {
  const { data: profile, loading, error } = useApi('/profile');

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

  if (loading) {
    return (
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <LoadingSpinner size="xl" />
      </section>
    );
  }

  if (error) {
    console.warn('Failed to load profile data:', error);
  }

  const socialLinks = [
    { 
      icon: Github, 
      href: profile?.socialLinks?.github || 'https://github.com/KetanNag', 
      label: 'GitHub' 
    },
    { 
      icon: Linkedin, 
      href: profile?.socialLinks?.linkedin || 'https://linkedin.com/in/ketannag', 
      label: 'LinkedIn' 
    },
    { 
      icon: Mail, 
      href: `mailto:${profile?.socialLinks?.email || 'ketannag6677@gmail.com'}`, 
      label: 'Email' 
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Main Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight"
                whileHover={{ scale: 1.02 }}
              >
                Ketan<span className="text-blue-400">loper</span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg md:text-xl text-blue-200 max-w-3xl leading-relaxed"
              >
                Dynamic exploration of innovation, motion & development background.
                {profile?.description && (
                  <span className="block mt-4 text-gray-300">
                    {profile.description}
                  </span>
                )}
              </motion.p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 font-semibold transition-all duration-300 transform hover:shadow-lg hover:shadow-blue-400/25"
              >
                PORTFOLIO
              </motion.a>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-gray-400 text-gray-400 hover:border-white hover:text-white font-medium transition-all duration-300"
              >
                GET IN TOUCH
              </motion.a>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex items-center space-x-6 pt-4"
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 border border-blue-400/30 hover:border-blue-400 rounded-lg transition-all duration-200 group"
                >
                  <Icon className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Floating Tech Elements */}
          <div className="absolute top-1/2 right-10 transform -translate-y-1/2 hidden lg:block">
            <div className="space-y-4">
              {['React', 'Node.js', 'Python', 'ML'].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ 
                    opacity: [0.3, 0.7, 0.3],
                    x: [50, 0, 50],
                    y: [0, -10, 0]
                  }}
                  transition={{
                    duration: 4 + index,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                  className="px-4 py-2 border border-blue-400/30 text-blue-300 text-sm font-mono backdrop-blur-sm bg-slate-900/20"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="w-6 h-6 text-blue-400" />
      </motion.div>
    </section>
  );
};

export default Hero;
