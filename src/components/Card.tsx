import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  animate?: boolean;
}

const Card = ({ children, className = '', onClick, animate = true }: CardProps) => {
  const baseStyles = 'bg-secondary/30 backdrop-blur-lg rounded-xl p-6 hover:shadow-xl transition-all duration-300';

  const content = (
    <div 
      className={`${baseStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
};

export default Card; 