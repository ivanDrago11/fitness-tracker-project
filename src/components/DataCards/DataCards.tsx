import React from "react";
interface DataCardsProps {
  className?: string;
}
const DataCards: React.FC<DataCardsProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>Data Cards</h2>
    </div>
  );
};

export default DataCards;
