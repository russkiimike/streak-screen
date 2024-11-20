import React, { useState, useEffect } from 'react';
import { Home, Dumbbell, PersonStanding, History, Plus } from 'lucide-react';

import { FaRunning } from 'react-icons/fa';
import WorkoutStreak from './components/WorkoutStreak';
import NavigationBar from './components/NavigationBar';
import TopBar from './components/TopBar';
import RecentWorkout from './components/RecentWorkout';

function App() {
  const [workouts] = useState([
    {
      title: 'Middle back & Abs',
      time: '5 hours ago',
      duration: '52m',
      exercises: [
        'Dumbbell Bench Press',
        'Standing Barbell Shoulder Press',
        'Decline Dumbbell Bench Press',
      ],
      exerciseCount: 3,
      records: 1,
    },
    {
      title: 'Leg Day',
      time: '2 days ago',
      duration: '45m',
      exercises: ['Squats', 'Leg Press', 'Calf Raises'],
      exerciseCount: 3,
      records: 0,
    },
  ]);

  const [randomizedWorkouts, setRandomizedWorkouts] = useState(workouts);

  useEffect(() => {
    const shuffled = [...workouts].sort(() => Math.random() - 0.5);
    setRandomizedWorkouts(shuffled);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#1a1b3b] text-white flex flex-col">
      <div className="flex-1 overflow-y-auto">
        <div className="w-full max-w-md mx-auto px-4 pb-24">
          <TopBar />

          <div className="flex gap-4 mb-6">
            <button className="flex-1 bg-[#4a4c8c] rounded-2xl py-3 px-6 text-center">
              History
            </button>
            <button className="w-20 h-14 bg-[#4a4c8c] rounded-2xl flex items-center justify-center">
              <Dumbbell className="w-6 h-6" />
            </button>
            <button className="w-20 h-14 bg-[#4a4c8c] rounded-2xl flex items-center justify-center">
              <FaRunning className="w-6 h-6" />
            </button>
          </div>

          <WorkoutStreak />

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Recent Workouts</h2>

            <button className="w-full bg-[#4a4c8c] rounded-2xl py-4 px-6 flex items-center gap-3 mb-4 justify-center">
              <Plus className="w-6 h-6" />
              <span className="text-m font-semibold">
                Add Past Workout Session
              </span>
            </button>

            <div className="space-y-4">
              {randomizedWorkouts.map((workout, index) => (
                <RecentWorkout key={index} {...workout} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <NavigationBar />
    </div>
  );
}

export default App;
