import { useNotebook } from "../Contexts/NotebookContext";
import NextPrevButton from "../Components/Buttons/NextPrevButton";
import styles from "./ProfilePage.module.css";
import PageNumber from "../Components/PageNumber";

function ProfilePage() {
  const { isMobile, scrollToLastPage, scrollToFirstPage } = useNotebook();

  // const handleDownloadCV = () => {
  //   window.open(
  //     "https://docs.google.com/document/d/1fwFzwE4qh19sbpyyjnU2xWUcwsRK7R1F360M0OX3DcA/edit",
  //     "_blank"
  //   );
  // };

  const handleClick = () => {
    if (isMobile) {
      scrollToFirstPage(0);
      return;
    }
    scrollToLastPage(0);
  };

  return (
    <div className={styles["profile-page"]}>
      <img src="profile-14-10.jpg" alt="profile" />
      <h1>Vladyslav Braslavskyi</h1>
      <h3>Senior Backend Engineer</h3>
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
        I'm a Senior Backend Engineer with 5 years of commercial experience. My passion is
        crafting innovative and user-friendly apps for various platforms.
      </p>

      <div className={styles["btn-box"]}>
        {/* <button href="" className={styles["btn"]} onClick={handleDownloadCV}>
          Download CV
        </button> */}
        <button
          className={`${styles["btn"]} ${styles["contact-me"]}`}
          onClick={handleClick}
        >
          Contact Me
        </button>
      </div>
      {isMobile && <NextPrevButton isNext={true} />}
      <PageNumber number={1}/>
    </div>
  );
}
export default ProfilePage;
