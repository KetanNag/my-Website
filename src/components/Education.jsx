import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { useApi } from '../hooks/useApi';
import { SkeletonLoader } from './LoadingSpinner';

const Education = () => {
  const { data: educationData, loading, error } = useApi('/education');

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

  if (error) {
    console.warn('Failed to load education data:', error);
  }

  const degrees = educationData?.degrees || [];

  return (
    <section id="education" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Education <span className="text-blue-400">Background</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Academic journey that shaped my technical foundation and problem-solving mindset.
            </p>
          </motion.div>

          {loading ? (
            <div className="space-y-8">
              {[...Array(3)].map((_, index) => (
                <SkeletonLoader key={index} />
              ))}
            </div>
          ) : (
            <div className="space-y-8">
              {degrees.map((degree, index) => (
                <motion.div
                  key={degree.id}
                  variants={itemVariants}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="relative"
                >
                  <div className="border border-blue-400/20 rounded-xl p-8 hover:border-blue-400/40 transition-all duration-300 backdrop-blur-sm bg-slate-900/20">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 p-4 flex-shrink-0">
                          <GraduationCap className="w-full h-full text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-2xl font-semibold text-white mb-2">
                            {degree.level}
                            {degree.field && (
                              <span className="text-blue-400"> in {degree.field}</span>
                            )}
                          </h3>
                          <p className="text-gray-300 mb-2">
                            {degree.institution}
                          </p>
                          <div className="flex flex-wrap items-center gap-4 text-sm">
                            <div className="flex items-center space-x-2 text-gray-400">
                              <Award className="w-4 h-4" />
                              <span>{degree.grade}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-400">
                              <Calendar className="w-4 h-4" />
                              <span>{degree.duration}</span>
                            </div>
                            {degree.status && (
                              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">
                                {degree.status}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Connecting line */}
                  {index < degrees.length - 1 && (
                    <div className="absolute left-8 top-24 w-0.5 h-8 bg-blue-400/30 transform translate-x-7"></div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
