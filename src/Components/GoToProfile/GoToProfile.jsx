import { useNotebook } from "../../Contexts/NotebookContext";
import styles from "./GoToProfile.module.css";

function GoToProfile() {
  const { scrollToFirstPage } = useNotebook();

  return (
    <button
      className={styles["back-profile"]}
      onClick={() => scrollToFirstPage(0)}
    >
      <p>Profile</p>
      <i className="bx bxs-user"></i>
    </button>
  );
}

export default GoToProfile;
