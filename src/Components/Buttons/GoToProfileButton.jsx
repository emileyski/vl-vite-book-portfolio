import { useNotebook } from "../../Contexts/NotebookContext";
import styles from "./GoToProfileButton.module.css";

function GoToProfile() {
  const { scrollToFirstPage, isMobile, scrollToLastPage } = useNotebook();

  const handleClick = () => {
    if (isMobile) {
      scrollToLastPage(0);
      return;
    }
    scrollToFirstPage(0);
  };

  return (
    <button className={styles["back-profile"]} onClick={handleClick}>
      <p>Profile</p>
      <i className="bx bxs-user"></i>
    </button>
  );
}

export default GoToProfile;
