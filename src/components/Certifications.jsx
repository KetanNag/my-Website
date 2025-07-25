import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Code, Cpu, Globe, DollarSign } from 'lucide-react';
import { useApi } from '../hooks/useApi';
import { SkeletonLoader } from './LoadingSpinner';

const Certifications = () => {
  const { data: certificationsData, loading, error } = useApi('/certifications');

  const iconMap = {
    Code: Code,
    Cpu: Cpu,
    Globe: Globe,
    DollarSign: DollarSign,
    Award: Award,
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
    console.warn('Failed to load certifications data:', error);
  }

  const certifications = certificationsData?.certifications || [];

  return (
    <section id="certifications" className="section-padding bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Certifications & <span className="text-blue-400">Courses</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Continuous learning through specialized courses and professional certifications.
            </p>
          </motion.div>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <SkeletonLoader key={index} />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert) => {
                const IconComponent = iconMap[cert.icon] || Award;
                
                return (
                  <motion.div
                    key={cert.id}
                    variants={itemVariants}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="group"
                  >
                    <div className="border border-blue-400/20 rounded-xl p-6 h-full hover:border-blue-400/40 transition-all duration-300 backdrop-blur-sm bg-slate-900/20">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${cert.color || 'from-blue-500 to-cyan-500'} p-2.5 group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-full h-full text-white" />
                        </div>
                        <div className="flex-1">
                          <span className="text-xs text-blue-400 font-medium">
                            {cert.year}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                        {cert.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm mb-3">
                        {cert.issuer}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                          {cert.field}
                        </span>
                        
                        {cert.url && (
                          <motion.a
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 border border-blue-400/30 hover:border-blue-400 rounded-lg transition-all duration-200"
                          >
                            <ExternalLink className="w-4 h-4 text-blue-400" />
                          </motion.a>
                        )}
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

export default Certifications;
