import { useNotebook } from "../../Contexts/NotebookContext";
import styles from "./NextPrevButton.module.css";

function NextPrevButton({ isNext = true }) {
  const { currentPage, setCurrentPage, pagesCount } = useNotebook();

  const handleClick = () => {
    //TODO: change max page value to centralized variant
    if (isNext && currentPage < pagesCount) setCurrentPage((prev) => prev + 1);
    else if (!isNext && currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <span
      className={`${styles["nextprev-btn"]} ${!isNext ? styles["back"] : ""}`}
      onClick={handleClick}
    >
      <i className={`bx bx-chevron-${isNext ? "right" : "left"}`}></i>
    </span>
  );
}

export default NextPrevButton;
