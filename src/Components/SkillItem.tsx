import React from "react";
import styles from "./SkillItem.module.css";

const SkillItem = ({ skill }) => {
  console.log(skill);

  return (
    <span className={skill.smallText ? styles["small-text"] : ""}>
      {skill.icon && <i className={skill.icon}></i>}
      {skill.img && <img src={skill.img} alt="" />}
      {skill.name}
    </span>
  );
};

export default SkillItem;
