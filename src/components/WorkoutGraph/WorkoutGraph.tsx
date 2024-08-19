import React from "react";
interface WorkoutGraphProps {
  className?: string;
}

const WorkoutGraph: React.FC<WorkoutGraphProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>Workout Graph</h2>
    </div>
  );
};

export default WorkoutGraph;
