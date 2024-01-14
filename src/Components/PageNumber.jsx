import styles from "./PageNumber.module.css";

function PageNumber({ number }) {
  return <span className={styles["number-page"]}>{number}</span>;
}

export default PageNumber;
