import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = ({ size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16"
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        className={`${sizeClasses[size]} border-2 border-primary-200 border-t-primary-600 rounded-full`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export const SkeletonLoader = ({ className = "" }) => {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="glass-effect rounded-2xl p-8">
        <div className="space-y-4">
          <div className="h-6 bg-gray-600/30 rounded w-3/4"></div>
          <div className="h-4 bg-gray-600/20 rounded w-full"></div>
          <div className="h-4 bg-gray-600/20 rounded w-2/3"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
