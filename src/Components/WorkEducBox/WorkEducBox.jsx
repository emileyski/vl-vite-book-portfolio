import styles from "./WorkEducBox.module.css";
/* eslint-disable react/prop-types */

function WorkEducBox({ children }) {
  return <div className={styles["workeduc-box"]}>{children}</div>;
}

export default WorkEducBox;
