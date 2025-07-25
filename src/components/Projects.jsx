import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Database, Brain, Video, Cloud } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Student Placement Portal',
      description: 'Comprehensive dashboard system with email notifications and role management for student placements.',
      technologies: ['HTML', 'React', 'Node.js', 'MySQL', 'MongoDB', 'Express'],
      icon: Database,
      color: 'from-blue-500 to-cyan-500',
      features: ['Role-based access', 'Email notifications', 'Analytics dashboard']
    },
    {
      title: 'Resume Builder System',
      description: 'Modern resume creation platform with real-time preview and multiple templates.',
      technologies: ['MERN Stack', 'Tailwind CSS'],
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      features: ['Real-time preview', 'Multiple templates', 'PDF export']
    },
    {
      title: 'Movie Recommender',
      description: 'AI-powered movie recommendation system using cosine similarity algorithms.',
      technologies: ['Python', 'Pandas', 'NumPy'],
      icon: Brain,
      color: 'from-purple-500 to-violet-500',
      features: ['Cosine similarity', 'Collaborative filtering', 'Content-based filtering']
    },
    {
      title: 'Face Attendance System',
      description: 'Real-time face recognition system for automated attendance tracking.',
      technologies: ['Flask', 'OpenCV', 'Python'],
      icon: Video,
      color: 'from-orange-500 to-red-500',
      features: ['Real-time recognition', 'Automated tracking', 'Admin dashboard']
    },
    {
      title: 'Climate Forecast Model',
      description: 'Machine learning model for climate prediction with interactive dashboards.',
      technologies: ['Scikit-learn', 'LSTM', 'Python'],
      icon: Cloud,
      color: 'from-teal-500 to-blue-500',
      features: ['LSTM networks', 'Interactive dashboards', 'Data visualization']
    }
  ];

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
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-center text-gray-400 mb-16 max-w-2xl mx-auto"
          >
            Check out my GitHub: <a href="https://github.com/KetanNag" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors">github.com/KetanNag</a>
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${project.color} p-3 group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="w-full h-full text-white" />
                  </div>
                  
                  <div className="flex space-x-3">
                    <motion.a
                      href="https://github.com/KetanNag"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 glass-effect hover:bg-white/10 rounded-lg transition-all duration-200"
                    >
                      <Github className="w-5 h-5 text-gray-400 group-hover:text-white" />
                    </motion.a>
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 glass-effect hover:bg-white/10 rounded-lg transition-all duration-200"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white" />
                    </motion.button>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-400 mb-3">Key Features</h4>
                  <div className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color}`}></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-dark-700/50 text-gray-300 text-sm rounded-full border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
