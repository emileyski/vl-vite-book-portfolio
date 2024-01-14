import { useNotebook } from "../Contexts/NotebookContext";
import NextPrevButton from "../Components/Buttons/NextPrevButton";
import styles from "./ProfilePage.module.css";

function ProfilePage() {
  const { isMobile, scrollToLastPage } = useNotebook();

  const handleDownloadCV = () => {
    window.open(
      "https://docs.google.com/document/d/1fwFzwE4qh19sbpyyjnU2xWUcwsRK7R1F360M0OX3DcA/edit",
      "_blank"
    );
  };

  return (
    <div className={styles["profile-page"]}>
      <img src="profile.jpeg" alt="profile" />
      <h1>Vladyslav Braslavskyi</h1>
      <h3>Backend Developer</h3>
      <div className={styles["social-media"]}>
        <a href="https://github.com/vlbras">
          <i className="bx bxl-github"></i>
        </a>
        <a href="https://t.me/vlbras">
          <i className="bx bxl-telegram"></i>
        </a>
        <a href="https://www.linkedin.com/in/vladyslav-braslavskyi/">
          <i className="bx bxl-linkedin"></i>
        </a>
      </div>

      <p>
        I'm a Backend Developer with 3 years of work experience. My passion is
        crafting innovative and user-friendly apps for various platforms.
      </p>

      <div className={styles["btn-box"]}>
        <button href="" className={styles["btn"]} onClick={handleDownloadCV}>
          Download CV
        </button>
        <button
          className={`${styles["btn"]} ${styles["contact-me"]}`}
          onClick={() => scrollToLastPage(0)}
        >
          Contact Me
        </button>
      </div>
      {isMobile && <NextPrevButton />}
    </div>
  );
}
export default ProfilePage;
