import React from "react";
import styles from "./SkillsBox.module.css";

const SkillsBox = ({ children }) => {
  return <div className={styles["skills-box"]}>{children}</div>;
};

export default SkillsBox;
