import React from 'react';
import { motion } from 'framer-motion';
import { Code, Wrench, Brain } from 'lucide-react';
import { useApi } from '../hooks/useApi';
import { SkeletonLoader } from './LoadingSpinner';

const Skills = () => {
  const { data: skillsData, loading, error } = useApi('/skills');

  const iconMap = {
    Code: Code,
    Wrench: Wrench,
    Brain: Brain,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  if (error) {
    console.warn('Failed to load skills data:', error);
  }

  const skillCategories = skillsData?.categories || [];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A versatile skill set for modern web development and machine learning.
            </p>
          </motion.div>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(3)].map((_, index) => (
                <SkeletonLoader key={index} />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillCategories.map((category, index) => {
                const IconComponent = iconMap[category.icon] || Code;
                
                return (
                  <motion.div
                    key={category.id}
                    variants={itemVariants}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="relative group"
                  >
                    <div className="glass-effect rounded-xl p-6 h-full backdrop-blur-xl bg-gradient-to-br from-purple-900/10 to-blue-900/10 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} p-2.5 group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-full h-full text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                          {category.title}
                        </h3>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <motion.span
                            key={skill}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 bg-dark-700/50 text-gray-300 text-sm rounded-full border border-white/10"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
