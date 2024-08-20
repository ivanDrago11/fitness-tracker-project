import React from "react";

interface DayWeatherCardProps {
  className?: string;
}

const DayWeatherCard: React.FC<DayWeatherCardProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>Day Weather Card</h2>
    </div>
  );
};

export default DayWeatherCard;
