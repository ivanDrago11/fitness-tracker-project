import React from "react";

interface GoForItMessageProps {
  className?: string;
}

const GoForItMessage: React.FC<GoForItMessageProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>Go For It!</h2>
    </div>
  );
};

export default GoForItMessage;
