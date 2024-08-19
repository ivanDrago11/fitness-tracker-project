import React from "react";

interface SideNavigatorProps {
  className?: string;
}

const SideNav: React.FC<SideNavigatorProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>Side Nav</h2>
    </div>
  );
};

export default SideNav;
