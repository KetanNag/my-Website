import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Database, Brain, Video, Cloud } from 'lucide-react';
import { useApi } from '../hooks/useApi';
import { SkeletonLoader } from './LoadingSpinner';

const Projects = () => {
  const { data: projectsData, loading, error } = useApi('/projects');

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
    console.warn('Failed to load projects data:', error);
  }

  const projects = projectsData?.projects || [];

  return (
    <section id="projects" className="section-padding bg-dark-800/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My Recent <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              A selection of projects that showcase my passion for development and problem-solving.
            </p>
            <motion.a
              href="https://github.com/KetanNag"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>View all on GitHub</span>
            </motion.a>
          </motion.div>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(3)].map((_, index) => (
                <SkeletonLoader key={index} />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <div className="glass-effect rounded-xl overflow-hidden h-full flex flex-col backdrop-blur-xl bg-gradient-to-br from-purple-900/10 to-blue-900/10 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <div className="relative aspect-video overflow-hidden">
                      <img 
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent"></div>
                      
                      <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 glass-effect hover:bg-white/20 rounded-lg transition-all duration-200"
                        >
                          <Github className="w-4 h-4 text-white" />
                        </motion.a>
                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 glass-effect hover:bg-white/20 rounded-lg transition-all duration-200"
                          >
                            <ExternalLink className="w-4 h-4 text-white" />
                          </motion.a>
                        )}
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed flex-grow">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-dark-700/50 text-gray-300 text-xs rounded border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-1 text-gray-400 text-xs">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
