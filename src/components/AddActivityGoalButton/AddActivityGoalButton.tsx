import React from "react";

interface AddActivityGoalButtonProps {
  className?: string;
}

const AddActivityGoalButton: React.FC<AddActivityGoalButtonProps> = ({
  className,
}) => {
  return (
    <button className={className}>
      <h2>Add Activity Goal</h2>
    </button>
  );
};

export default AddActivityGoalButton;
