import React from 'react';
import { Home, Timer, Circle } from 'lucide-react';

const NavigationBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1a1b3b] p-4">
      <div className="max-w-md mx-auto flex justify-between items-center">
        <button className="p-4 rounded-full bg-[#4a4c8c]">
          <Home className="w-6 h-6" />
        </button>
        <button className="p-6 rounded-full bg-[#0088ff] -mt-8 border-8 border-[#1a1b3b]">
          <Circle className="w-8 h-8" fill="white" />
        </button>
        <button className="p-4 rounded-full bg-[#4a4c8c]">
          <Timer className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default NavigationBar;