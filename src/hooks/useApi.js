import { useState, useEffect } from 'react';

const API_BASE_URL = 'https://example.com/api';

// Default data to use when API is not available
const defaultProfile = {
  name: "Ketan Nag",
  title: "Full Stack Developer | ML Enthusiast",
  tagline: "Building scalable apps. Exploring intelligent systems.",
  location: "Ahmedabad, India",
  birthDate: "2001-05-01",
  languages: ["English", "Hindi", "Nepali"],
  description: "Passionate MERN developer with strong backend and frontend skills, dedicated to building scalable applications and exploring the fascinating world of machine learning and artificial intelligence.",
  profileImage: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x300/1e293b/60a5fa?text=KN",
  socialLinks: {
    github: "https://github.com/KetanNag",
    linkedin: "https://linkedin.com/in/ketannag",
    email: "ketannag6677@gmail.com"
  }
};

const defaultSkills = {
  categories: [
    {
      id: "languages",
      title: "Languages",
      icon: "Code",
      skills: ["Python", "JavaScript", "HTML", "CSS", "Java", "SQL"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "tools",
      title: "Frameworks & Tools",
      icon: "Wrench",
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase"],
      color: "from-purple-500 to-violet-500"
    },
    {
      id: "others",
      title: "Other Skills",
      icon: "Brain",
      skills: ["Git", "Docker", "GitHub", "Figma", "OpenCV", "Scikit-learn", "Colab"],
      color: "from-green-500 to-emerald-500"
    }
  ]
};

const defaultEducation = {
  degrees: [
    {
      id: "btech",
      level: "B.Tech",
      field: "Computer Science & Engineering",
      institution: "Pandit Deendayal Energy University",
      grade: "CGPA: 7.14",
      duration: "2019 - 2023",
      status: "Graduated"
    },
    {
      id: "class12",
      level: "Class XII",
      field: "Science",
      institution: "Higher Secondary Education",
      grade: "62%",
      duration: "2018 - 2019",
      status: "Completed"
    },
    {
      id: "class10",
      level: "Class X",
      field: "General",
      institution: "Secondary Education",
      grade: "75%",
      duration: "2016 - 2017",
      status: "Completed"
    }
  ]
};

const defaultCertifications = {
  certifications: [
    {
      id: "python-udemy",
      title: "Complete Python Bootcamp",
      issuer: "Udemy",
      field: "Programming",
      year: "2022",
      icon: "Code",
      color: "from-yellow-500 to-orange-500",
      url: null
    },
    {
      id: "web-dev-bootcamp",
      title: "Web Development Bootcamp",
      issuer: "Udemy",
      field: "Web Development",
      year: "2022",
      icon: "Globe",
      color: "from-green-500 to-teal-500",
      url: null
    },
    {
      id: "computer-vision",
      title: "Computer Vision Fundamentals",
      issuer: "Coursera",
      field: "Machine Learning",
      year: "2023",
      icon: "Cpu",
      color: "from-purple-500 to-indigo-500",
      url: null
    },
    {
      id: "fintech-blockchain",
      title: "Fintech & Blockchain Technology",
      issuer: "University of South Florida",
      field: "Financial Technology",
      year: "2023",
      icon: "DollarSign",
      color: "from-blue-500 to-cyan-500",
      url: null
    }
  ]
};

const defaultProjects = {
  projects: [
    {
      id: "placement-portal",
      title: "Student Placement Portal",
      description: "Comprehensive dashboard system with email notifications and role management for student placements.",
      technologies: ["HTML", "React", "Node.js", "MySQL", "MongoDB", "Express"],
      icon: "Database",
      githubUrl: "https://github.com/KetanNag",
      liveUrl: null,
      imageUrl: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1e293b/60a5fa?text=Placement+Portal"
    },
    {
      id: "resume-builder",
      title: "Resume Builder System",
      description: "Modern resume creation platform with real-time preview and multiple templates.",
      technologies: ["MERN Stack", "Tailwind CSS"],
      icon: "Code",
      githubUrl: "https://github.com/KetanNag",
      liveUrl: null,
      imageUrl: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1e293b/10b981?text=Resume+Builder"
    },
    {
      id: "movie-recommender",
      title: "Movie Recommender",
      description: "AI-powered movie recommendation system using cosine similarity algorithms.",
      technologies: ["Python", "Pandas", "NumPy"],
      icon: "Brain",
      githubUrl: "https://github.com/KetanNag",
      liveUrl: null,
      imageUrl: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1e293b/8b5cf6?text=Movie+AI"
    },
    {
      id: "face-attendance",
      title: "Face Attendance System",
      description: "Real-time face recognition system for automated attendance tracking.",
      technologies: ["Flask", "OpenCV", "Python"],
      icon: "Video",
      githubUrl: "https://github.com/KetanNag",
      liveUrl: null,
      imageUrl: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1e293b/f97316?text=Face+Recognition"
    },
    {
      id: "climate-forecast",
      title: "Climate Forecast Model",
      description: "Machine learning model for climate prediction with interactive dashboards.",
      technologies: ["Scikit-learn", "LSTM", "Python"],
      icon: "Cloud",
      githubUrl: "https://github.com/KetanNag",
      liveUrl: null,
      imageUrl: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1e293b/14b8a6?text=Climate+AI"
    }
  ]
};

export const useApi = (endpoint, defaultData = null) => {
  const [data, setData] = useState(defaultData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        await new Promise(resolve => setTimeout(resolve, 800));
        
        let responseData;
        switch (endpoint) {
          case '/profile':
            responseData = defaultProfile;
            break;
          case '/skills':
            responseData = defaultSkills;
            break;
          case '/education':
            responseData = defaultEducation;
            break;
          case '/certifications':
            responseData = defaultCertifications;
            break;
          case '/projects':
            responseData = defaultProjects;
            break;
          default:
            responseData = defaultData;
        }
        
        setData(responseData);
      } catch (err) {
        setError(err.message);
        setData(defaultData);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, defaultData]);

  return { data, loading, error };
};

export const useContact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const submitContact = async (formData) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
      
      return { success: true, message: "Message sent successfully!" };
    } catch (err) {
      setError(err.message);
      return { success: false, message: "Failed to send message" };
    } finally {
      setLoading(false);
    }
  };

  return { submitContact, loading, success, error };
};
