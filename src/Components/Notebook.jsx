import ProfilePage from "../Pages/ProfilePage";
import NotebookPage from "./NotebookPage";
import styles from "./Notebook.module.css";
import { useNotebook } from "../Contexts/NotebookContext";
import WorkExperience from "../Pages/WorkExperience";
import EducationPage from "../Pages/EducationPage";
import MyServicesPage from "../Pages/MyServicesPage";
import MySkillsPage from "../Pages/MySkillsPage";
import LatestProjectPage from "../Pages/LatestProjectPage";
import ContactMePage from "../Pages/ContactMePage";
import { useEffect } from "react";

function Notebook() {
  const { currentPage, scrollToLastPage } = useNotebook(); //default value is 1

  useEffect(() => {
    setTimeout(() => {
      scrollToLastPage(500);
    }, 500);
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={`${styles.cover}`}>
          <NotebookPage>
            <ContactMePage />
          </NotebookPage>

          <NotebookPage turnPage={currentPage >= 2 ? false : true}>
            <LatestProjectPage />
          </NotebookPage>

          <NotebookPage turnPage={currentPage >= 3 ? false : true}>
            <MySkillsPage />
          </NotebookPage>

          <NotebookPage turnPage={currentPage >= 4 ? false : true}>
            <MyServicesPage />
          </NotebookPage>

          <NotebookPage turnPage={currentPage >= 5 ? false : true}>
            <EducationPage />
          </NotebookPage>

          <NotebookPage turnPage={currentPage >= 6 ? false : true}>
            <WorkExperience />
          </NotebookPage>

          <NotebookPage turnPage={currentPage >= 7 ? false : true}>
            <ProfilePage />
          </NotebookPage>
        </div>

        {/* <div
          className={
            styles["back-cover"] + (isTurned ? " " + styles["turn"] : "")
          }
        ></div> */}
      </div>
    </>
  );
}

export default Notebook;
