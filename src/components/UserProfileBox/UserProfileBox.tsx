import React from "react";

interface UserProfileBoxProps {
  className?: string;
}

const UserProfileBox: React.FC<UserProfileBoxProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>User Profile</h2>
    </div>
  );
};

export default UserProfileBox;
