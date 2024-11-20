import React from 'react';
import { ChevronLeft } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-2">
        <ChevronLeft />
        <span>Search</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 bg-white rounded-full"></div>
        <div className="w-4 h-4 bg-white/30 rounded-full"></div>
        <div className="w-8 h-4 bg-red-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default TopBar;