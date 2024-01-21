import SkillItem from "./SkillItem";
import styles from "./SkillsContent.module.css";
import React from "react";

const SkillsContent = ({ title, skills }) => {
  return (
    <div className={styles["skills-content"]}>
      <h3>{title}</h3>
      <div className={styles["content"]}>
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillsContent;
