import React from 'react';
import { Timer, MoreVertical, Trophy, Check } from 'lucide-react';

interface RecentWorkoutProps {
  title: string;
  time: string;
  duration: string;
  exercises: string[];
  exerciseCount: number;
  records: number;
}

const RecentWorkout: React.FC<RecentWorkoutProps> = ({
  title,
  time,
  duration,
  exercises,
  exerciseCount,
  records,
}) => {
  return (
    <div className="bg-[#4a4c8c] rounded-2xl p-6">
      <div className="flex justify-between items-start mb-2">
        <div>
          <div className="text-sm text-gray-300">{time}</div>
          <h3 className="text-l font-bold">{title}</h3>
        </div>
        <button>
          <MoreVertical className="w- h-6" />
        </button>
      </div>

      <div className="flex gap-2 mb-2 font-semibold text-sm">
        <div className="flex items-center gap-2 bg-[#65669d] rounded-full px-4 py-1">
          <Timer className="w-4 h-4" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-2 bg-[#65669d] rounded-full px-4 py-1">
          <Check className="w-4 h-4" />
          <span>{exerciseCount} Exercises</span>
        </div>
        {records > 0 && (
          <div className="flex items-center gap-2 bg-[#c9de6f82] rounded-full px-4 py-1">
            <Trophy className="w-4 h-4" />
            <span>{records} Record</span>
          </div>
        )}
      </div>

      <div>
        {exercises.map((exercise, index) => (
          <div key={index} className="text-gray-400">
            {exercise}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentWorkout;
