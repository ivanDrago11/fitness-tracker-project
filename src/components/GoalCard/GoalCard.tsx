import React from "react";
interface GoalCardProps {
  className?: string;
}

const GoalCard: React.FC<GoalCardProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>Goal Card</h2>
    </div>
  );
};

export default GoalCard;
