import React from 'react';
import Tooltip from './Tooltip';

type ProgressBarProps = {
  label: string;
  level: number; // Value between 1 and 5, representing the proficiency
};

const ProgressBar: React.FC<ProgressBarProps> = ({ label, level }) => {
  // Calculate the percentage width based on the level
  const levelWidth = level * 20; // 1-5 levels, each representing 20% increment
  const levelText = ['Beginner', 'Intermediate', 'Advanced', 'Expert', 'Master'];

  return (
    <div className="relative mb-4">
      <span className="font-semibold">{label}</span>
      <div className="w-full bg-gray-300 h-2 mt-1 relative">
        <div
          className={`h-2 ${level <= 1 ? 'bg-red-500' : level <= 2 ? 'bg-yellow-500' : level <= 3 ? 'bg-green-500' : level <= 4 ? 'bg-blue-500' : 'bg-purple-500'}`}
          style={{ width: `${levelWidth}%` }}
        ></div>
        <Tooltip text={levelText[level - 1]} />
      </div>
    </div>
  );
};

export default ProgressBar;
