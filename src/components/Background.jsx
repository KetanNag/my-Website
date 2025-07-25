import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* City Skyline Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />
      
      {/* City Skyline Silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-slate-900/80 to-transparent">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 400"
          preserveAspectRatio="xMidYEnd slice"
        >
          <defs>
            <linearGradient id="buildingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>
          
          {/* Building silhouettes */}
          <rect x="0" y="200" width="100" height="200" fill="url(#buildingGradient)" />
          <rect x="120" y="150" width="80" height="250" fill="url(#buildingGradient)" />
          <rect x="220" y="180" width="60" height="220" fill="url(#buildingGradient)" />
          <rect x="300" y="120" width="90" height="280" fill="url(#buildingGradient)" />
          <rect x="410" y="160" width="70" height="240" fill="url(#buildingGradient)" />
          <rect x="500" y="100" width="100" height="300" fill="url(#buildingGradient)" />
          <rect x="620" y="140" width="80" height="260" fill="url(#buildingGradient)" />
          <rect x="720" y="170" width="90" height="230" fill="url(#buildingGradient)" />
          <rect x="830" y="130" width="75" height="270" fill="url(#buildingGradient)" />
          <rect x="925" y="190" width="85" height="210" fill="url(#buildingGradient)" />
          <rect x="1030" y="110" width="95" height="290" fill="url(#buildingGradient)" />
          <rect x="1145" y="160" width="55" height="240" fill="url(#buildingGradient)" />
          
          {/* Building lights */}
          {Array.from({ length: 50 }).map((_, i) => (
            <rect
              key={i}
              x={Math.random() * 1200}
              y={100 + Math.random() * 200}
              width="3"
              height="3"
              fill="#60a5fa"
              opacity={Math.random() * 0.8 + 0.2}
            />
          ))}
        </svg>
      </div>

      {/* Flowing Data Streams */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${i * 15}%`,
              width: '2px',
              height: '100%',
              background: `linear-gradient(90deg, transparent, rgba(96, 165, 250, ${0.1 + Math.random() * 0.3}), transparent)`,
              transform: `rotate(${-15 + Math.random() * 30}deg)`,
            }}
            animate={{
              x: ['-100%', '100vw'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 1.5,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Flowing Wave Lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(96, 165, 250, 0)" />
            <stop offset="50%" stopColor="rgba(96, 165, 250, 0.4)" />
            <stop offset="100%" stopColor="rgba(96, 165, 250, 0)" />
          </linearGradient>
        </defs>
        
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.path
            key={i}
            d={`M 0 ${300 + i * 30} Q 300 ${280 + i * 25} 600 ${300 + i * 30} T 1200 ${300 + i * 30}`}
            stroke="url(#waveGradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'easeInOut',
            }}
          />
        ))}
      </svg>

      {/* Code Text Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-blue-300/20 font-mono text-xs whitespace-nowrap"
            style={{
              top: `${20 + i * 15}%`,
              right: `${10 + Math.random() * 30}%`,
              transform: `rotate(${5 + Math.random() * 10}deg)`,
            }}
            animate={{
              x: [0, -50, 0],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 2,
            }}
          >
            {[
              'const developer = { name: "Ketan", skills: ["React", "Node"] };',
              'function buildApp() { return innovation * passion; }',
              'if (challenge.exists()) { solve(challenge); }',
              'ML.predict(future).then(success => console.log(success));',
              'database.find({ dreams: true }).populate("reality");',
              'async function createMagic() { await code.compile(); }'
            ][i]}
          </motion.div>
        ))}
      </div>

      {/* Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Background;
