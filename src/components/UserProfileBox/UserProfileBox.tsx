import React from "react";
import styles from "./UserProfile.module.scss";
interface UserProfileBoxProps {
  className?: string;
}

const UserProfileBox: React.FC<UserProfileBoxProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className={styles.container}>
        {/* <img
          src="../../assets/images/userProfileImage.png"
          alt="User Profile"
        /> */}
        <h1>User Profile</h1>
      </div>
    </div>
  );
};

export default UserProfileBox;
