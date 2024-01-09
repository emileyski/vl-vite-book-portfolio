import styles from "./BookPage.module.css";
import { useEffect, useRef } from "react";

function BookPage({
  isFirstPage = false,
  frontContent,
  backContent,
  turnPage = false,
  pageNumber,
}) {
  const refPage = useRef(null);

  useEffect(() => {
    if (isFirstPage) {
      refPage.current.style.zIndex = -1;
    }

    if (turnPage) {
      refPage.current.classList.add(styles.turn);
      setTimeout(() => {
        refPage.current.style.zIndex = -1;
      }, 500);
    } else {
      refPage.current.classList.remove(styles.turn);
      refPage.current.style.zIndex = turnPage
        ? 20 + pageNumber
        : 20 - pageNumber;
    }
  }, [pageNumber, turnPage]);

  return (
    <div
      ref={refPage}
      // style={{
      //   zIndex: !turnPage ? 20 - pageNumber : 20 + pageNumber,
      // }}
      className={`${styles["book-page"]} ${
        isFirstPage ? styles["page-left"] : styles["page-right"]
      } ${turnPage ? styles["turn"] : ""}`}
    >
      {!isFirstPage && (
        <>
          <div className={styles["page-front"]}>{frontContent}</div>
          <div className={styles["page-back"]}>{backContent}</div>
        </>
      )}

      {isFirstPage && frontContent}

      <span className={styles["number-page"]}>{pageNumber}</span>
    </div>
  );
}

export default BookPage;
