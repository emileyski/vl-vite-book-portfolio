import styles from "./WorkEducContent.module.css";
/* eslint-disable react/prop-types */

function WorkEducContent({ title, year, content }) {
  const textParts = content.split("<br>");

  return (
    <div className={styles["workeduc-content"]}>
      <h3>{title}</h3>
      <span className={styles["year"]}>
        <i className="bx bxs-calendar"></i>
        {year}
      </span>
      {textParts.map((part, index) => (
        <p key={index}>
          {part}
          <br />
        </p>
      ))}
      {/* <p>{content}</p> */}
    </div>
  );
}

export default WorkEducContent;