import React from "react";
import styles from "./SkillItem.module.css";

const SkillItem = ({ skill }) => {
  console.log(skill);

  return (
    <span className={skill.smallText ? styles["small-text"] : ""}>
      {skill.icon && <i className={skill.icon}></i>}
      {skill.img && !skill.bigIcon && <img src={skill.img} alt="" />}
      {skill.img && skill.bigIcon && (
        <div className={styles["big-icon"]}>
          <img src={skill.img} alt="" />
        </div>
      )}
      {skill.name}
    </span>
  );
};

export default SkillItem;
