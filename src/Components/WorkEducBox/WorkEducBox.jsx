import styles from "./WorkEducBox.module.css";

function WorkEducBox({ children }) {
  return <div className={styles["workeduc-box"]}>{children}</div>;
}

export default WorkEducBox;
