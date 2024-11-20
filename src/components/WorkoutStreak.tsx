import React, { useState } from 'react';
import { ChevronRight, Check } from 'lucide-react';

const WorkoutStreak = () => {
  const [totalWorkouts] = useState(() => Math.floor(Math.random() * 5) + 2);
  const [completedWorkouts] = useState(() => Math.floor(Math.random() * (totalWorkouts + 1)));
  const months = ['Aug', 'Sep', 'Oct', 'Nov'];
  const gridSize = 28;
  const days = Math.floor(Math.random() * totalWorkouts * 365);

  const generateMonthData = () => {
    return Array(gridSize).fill(null).map(() => {
      const hasWorkout = Math.random() < (totalWorkouts / 7);
      return hasWorkout ? Math.random() < 0.8 : false;
    });
  };

  const [monthsData] = useState(() => 
    months.map(() => generateMonthData())
  );

  // Calculate grid columns based on totalWorkouts
  const gridColumns = totalWorkouts <= 3 ? 3 : totalWorkouts;

  return (
    <div className="bg-[#0088ff] rounded-3xl p-6 text-white">
      <div className="flex justify-between items-center mb-4">
        <div className="text-2xl font-bold">
          <img
            className="h-9"
            src="https://res.cloudinary.com/gymstreak/image/fetch/c_fit,q_auto,f_auto,dpr_auto/https://blog.gymstreak.com/content/images/2023/08/gymstreaklogo-2.svg"
            alt="GymStreak"
          />
        </div>
        <button className="flex items-center gap-2 font-bold">
          {days} days <ChevronRight />
        </button>
      </div>

      <div className="flex flex-col justify-center min-h-[100px] mb-8">
        <h2 className="text-l mb-6 font-bold text-center">
          {completedWorkouts === totalWorkouts 
            ? "You have completed all your workouts for this week!"
            : `Complete ${totalWorkouts-completedWorkouts} more workouts this week to continue your streak!`}
        </h2>
        <div className="flex justify-center items-center">
          <div 
            className={`inline-grid gap-3 px-4`}
            style={{ 
              gridTemplateColumns: `repeat(${gridColumns}, minmax(0, 1fr))`,
              width: `${gridColumns * 3.5}rem`
            }}
          >
            {Array(totalWorkouts).fill(null).map((_, i) => (
              <div 
                key={i} 
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  i < completedWorkouts 
                    ? 'bg-blue-300' 
                    : 'bg-blue-700'
                }`}
              >
                <Check className="w-6 h-6 stroke-2 stroke-white" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-1">
        {months.map((month, monthIndex) => (
          <div key={month}>
            <div className="grid grid-cols-4 gap-1 mb-2">
              {monthsData[monthIndex].map((isCompleted, i) => (
                <div
                  key={i}
                  className={`w-full pt-[100%] rounded ${
                    isCompleted 
                      ? 'bg-[#93c5fd]' 
                      : 'bg-[#0070d6]'
                  }`}
                />
              ))}
            </div>
            <div className="text-center text-sm text-blue-700 font-semibold">{month}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutStreak;