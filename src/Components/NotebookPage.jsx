import styles from "./NotebookPage.module.css";

function NotebookPage({ children, turnPage = false }) {
  return (
    <div
      className={`${styles["notebook-page"]}  ${
        turnPage ? styles["turn"] : ""
      }`}
    >
      {children}
    </div>
  );
}

export default NotebookPage;
