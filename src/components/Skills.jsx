import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Wrench, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Languages',
      skills: ['Python', 'JavaScript', 'HTML', 'CSS', 'Java', 'SQL'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: 'Frameworks & Libraries',
      skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Wrench,
      title: 'Tools & Technologies',
      skills: ['Git', 'Docker', 'GitHub', 'Figma', 'OpenCV'],
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      skills: ['Scikit-learn', 'Pandas', 'NumPy', 'LSTM', 'Google Colab'],
      color: 'from-orange-500 to-red-500'
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
    <section id="skills" className="section-padding bg-dark-800/30">
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
            Skills & <span className="gradient-text">Technologies</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-effect rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-full h-full text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-primary-300 transition-colors">
                  {category.title}
                </h3>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.1 + index * 0.2 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-3 cursor-pointer"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        {skill}
                      </span>
                    </motion.div>
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

export default Skills;
