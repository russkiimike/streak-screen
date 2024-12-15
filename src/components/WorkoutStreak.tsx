import React, { useState } from 'react';
import { ChevronRight, Check } from 'lucide-react';

const generateContinuousTemplate = (gridSize) => {
  const template = [];
  let workoutsRemaining = 35; // Total workouts for the 4 months
  let workoutsPerWeek = 5;

  for (let i = 0; i < gridSize; i++) {
    const dayOfWeek = i % 7;
    const monthIndex = Math.floor(i / 7);

    // Calculate the week in the cycle (2-week periods)
    const weekOfCycle = Math.floor(monthIndex / 2);

    // Adjust the number of workouts per week progressively
    if (dayOfWeek === 0) {
      if (weekOfCycle === 0) {
        workoutsPerWeek = 4;  // For the first 2 weeks, 4 workouts per week
      } else if (weekOfCycle === 1) {
        workoutsPerWeek = 3;  // For the next 2 weeks, 3 workouts per week
      } else if (weekOfCycle === 2) {
        workoutsPerWeek = 2;  // For the next 2 weeks, 2 workouts per week
      } else if (weekOfCycle === 3) {
        workoutsPerWeek = 0;  // For the next 2 weeks, 1 workout per week
      } else {
        workoutsPerWeek = 0;  // After that, no workouts
      }
    }

    // Determine if it's a workout day based on the remaining workouts and probability
    const isWorkoutDay = workoutsRemaining > 0 && Math.random() < (workoutsPerWeek / 7);
    if (isWorkoutDay) {
      workoutsRemaining--;
    }

    template.push(isWorkoutDay);
  }

  return template;
};



const WorkoutStreak = () => {
  const [totalWorkouts] = useState(() => Math.floor(Math.random() * 5) + 2);
  const [completedWorkouts] = useState(() => Math.floor(Math.random() * (totalWorkouts + 1)));
  const months = ['Sep', 'Oct', 'Nov', 'Dec'];
  const gridSize = 28; // Grid size for each month
  const days = Math.floor(Math.random() * totalWorkouts * 365);

  const [monthsData] = useState(() =>
    months.map(() =>
      // Use either random or progressive template
      generateContinuousTemplate(gridSize)
    )
  );

  const gridColumns = totalWorkouts <= 3 ? 3 : totalWorkouts;

  const lastMonthData = monthsData[months.length - 1];
  const lastColumnIndices = [];
  for (let i = gridColumns - 1; i < gridSize; i += gridColumns) {
    lastColumnIndices.push(i);
  }

  const randomIndex = lastColumnIndices[Math.floor(Math.random() * lastColumnIndices.length)];

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
            : `Complete ${totalWorkouts - completedWorkouts} more workouts this week to continue your streak!`}
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
                  i < completedWorkouts ? 'bg-blue-300' : 'bg-blue-700'
                }`}
              >
                <Check strokeWidth={3} className="w-6 h-6 stroke-white" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-1">
        {months.map((month, monthIndex) => (
          <div key={month}>
            <div className="grid grid-cols-4 gap-1 mb-2">
              {monthsData[monthIndex].map((isCompleted, i) => {
                const isRandomHighlight = monthIndex === months.length - 1 && i === randomIndex; // Highlight only for last month
                return (
                  <div
                    key={i}
                    className={`w-full pt-[100%] rounded ${
                      isCompleted ? 'bg-[#93c5fd]' : 'bg-[#0070d6]'
                    } }`}
                    style={isRandomHighlight ? { boxShadow: 'inset 1px -1px 1px rgba(255, 255, 255, 1), inset -1px -1px 1px rgba(255, 255, 255, 1), inset -1px 1px 1px rgba(255, 255, 255, 1), inset 1px 1px 1px rgba(255, 255, 255, 1)' } : {}}
                  />
                );
              })}
            </div>
            <div className="text-center text-sm text-blue-700 font-semibold">{month}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutStreak;
