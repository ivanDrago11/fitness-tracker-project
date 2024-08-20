import React from "react";
import GoalCard from "../components/GoalCard/GoalCard";
import DataCards from "../components/DataCards/DataCards";
import WorkoutGraph from "../components/WorkoutGraph/WorkoutGraph";
import WelcomeMessage from "../components/WelcomeMessage/WelcomeMessage";
import SideNav from "../components/SideNav/SideNav";
import UserProfileBox from "../components/UserProfileBox/UserProfileBox";
import styles from "./MainLayout.module.scss";
import GoForItMessage from "../components/GoForItMessage/GoForItMessage";
import DayWeatherCard from "../components/DayWeatherCard/DayWeatherCard";
import AddActivityGoalButton from "../components/AddActivityGoalButton/AddActivityGoalButton";

const MainLayout: React.FC = () => {
  return (
    <div className={styles["mainLayout"]}>
      <UserProfileBox className={styles["mainLayout__userProfileBox"]} />
      <SideNav className={styles["mainLayout__sideNav"]} />
      <WelcomeMessage className={styles["mainLayout__welcomeMessage"]} />
      <GoalCard className={styles["mainLayout__goalCard"]} />
      <DataCards className={styles["mainLayout__dataCards"]} />
      <WorkoutGraph className={styles["mainLayout__workoutGraph"]} />
      <GoForItMessage className={styles["mainLayout__goForItMessage"]} />
      <DayWeatherCard className={styles["mainLayout__dayWeatherCard"]} />
      <AddActivityGoalButton
        className={styles["mainLayout__addActivityGoalButton"]}
      />
    </div>
  );
};

export default MainLayout;
