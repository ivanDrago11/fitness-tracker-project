import React from "react";

interface WelcomeMessageProps {
  className?: string;
}

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>Welcome!</h2>
    </div>
  );
};

export default WelcomeMessage;
