import { useEffect, useRef } from "react";
import Book from "./Book";
import styles from "./BookWrapper.module.css";
import { useNotebook } from "../Contexts/NotebookContext";

const BookWrapper = () => {
  const coverRight = useRef(null);
  const { scrollToFirstPage, currentPage } = useNotebook();

  useEffect(() => {
    setTimeout(() => {
      coverRight.current.classList.add(styles.turn);

      setTimeout(() => {
        coverRight.current.style.zIndex = -1;
        if (currentPage !== 4) {
          return;
        }
        scrollToFirstPage();
      }, 500);
    }, 2100);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.cover} ${styles.coverLeft}`}> </div>
      <div
        className={`${styles.cover} ${styles.coverRight}`}
        ref={coverRight}
      ></div>
      <Book />
    </div>
  );
};

export default BookWrapper;
