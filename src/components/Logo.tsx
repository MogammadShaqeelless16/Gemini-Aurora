import React from 'react';

const Logo = ({ size = 'default' }) => {
  const sizeClasses = {
    'default': 'w-8 h-8',
    'large': 'w-12 h-12',
    'small': 'w-6 h-6'
  };

  return (
    <div className={`relative ${sizeClasses[size]} rounded-lg overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-purple-600/50 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-4/6 h-4/6 border-2 border-white/80 rounded-md transform rotate-45" />
        <div className="absolute w-2 h-2 bg-white rounded-full" />
      </div>
    </div>
  );
};

export default Logo;