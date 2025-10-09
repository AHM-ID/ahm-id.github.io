import React from 'react';
import { motion } from 'framer-motion';

interface FloatingBubblesProps {
  count?: number;
  color?: 'primary' | 'secondary' | 'mixed';
}

const FloatingBubbles: React.FC<FloatingBubblesProps> = ({ 
  count = 5, 
  color = 'mixed' 
}) => {
  const bubbles = Array.from({ length: count }, (_, i) => i);

  const getColorClass = (index: number) => {
    if (color === 'primary') {
      return 'bg-primary-200 dark:bg-primary-800';
    }
    if (color === 'secondary') {
      return 'bg-secondary-200 dark:bg-secondary-800';
    }
    // Mixed colors
    const colors = [
      'bg-primary-200 dark:bg-primary-800',
      'bg-secondary-200 dark:bg-secondary-800',
      'bg-green-200 dark:bg-green-800',
      'bg-blue-200 dark:bg-blue-800',
      'bg-purple-200 dark:bg-purple-800',
    ];
    return colors[index % colors.length];
  };

  const getRandomPosition = (index: number) => {
    const positions = [
      { top: '10%', left: '10%' },
      { top: '20%', right: '15%' },
      { top: '60%', left: '8%' },
      { top: '70%', right: '12%' },
      { top: '40%', left: '5%' },
      { top: '50%', right: '8%' },
      { top: '30%', left: '20%' },
      { top: '80%', right: '20%' },
    ];
    return positions[index % positions.length];
  };

  const getRandomSize = (index: number) => {
    const sizes = ['w-16 h-16', 'w-20 h-20', 'w-12 h-12', 'w-24 h-24', 'w-14 h-14'];
    return sizes[index % sizes.length];
  };

  const getRandomAnimation = (index: number) => {
    const animations = [
      {
        y: [0, -20, 0],
        rotate: [0, 5, 0],
        duration: 6 + index * 0.5,
      },
      {
        y: [0, 20, 0],
        rotate: [0, -5, 0],
        duration: 7 + index * 0.3,
      },
      {
        x: [0, 15, 0],
        y: [0, -15, 0],
        duration: 8 + index * 0.4,
      },
      {
        x: [0, -10, 0],
        y: [0, 15, 0],
        duration: 9 + index * 0.2,
      },
    ];
    return animations[index % animations.length];
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((index) => {
        const position = getRandomPosition(index);
        const size = getRandomSize(index);
        const animation = getRandomAnimation(index);

        return (
          <motion.div
            key={index}
            className={`absolute ${size} ${getColorClass(index)} rounded-full opacity-20 blur-xl`}
            style={position}
            animate={{
              ...animation,
            }}
            transition={{
              duration: animation.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingBubbles;
