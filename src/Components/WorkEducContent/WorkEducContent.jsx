import styles from "./WorkEducContent.module.css";

function WorkEducContent({ title, year, content }) {
  return (
    <div className={styles["workeduc-content"]}>
      <span className={styles["year"]}>
        <i className="bx bxs-calendar"></i>
        {year}
      </span>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

export default WorkEducContent;
