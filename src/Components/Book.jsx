import styles from "./Book.module.css";
import ProfilePage from "../Pages/ProfilePage";
import BookPage from "./BookPage";
import WorkExperience from "../Pages/WorkExperience";
import { useNotebook } from "../Contexts/NotebookContext";
import EducationPage from "../Pages/EducationPage";
// import MyServicesPage from "../Pages/MyServicesPage";

import LatestProject from "../Pages/LatestProjectPage";
import ContactMePage from "../Pages/ContactMePage";
import MySkillsFirstPage from "../Pages/MySkillsFirstPage";
import MySkillsSecondPage from "../Pages/MySkillsSecondPage";

const Book = () => {
  const { currentPage } = useNotebook();

  return (
    <div className={styles.book}>
      <BookPage isFirstPage={true} frontContent={<ProfilePage />} />
      <BookPage
        turnPage={currentPage >= 2}
        pageNumber={1}
        currentPage={currentPage}
        frontContent={<WorkExperience />}
        backContent={<MySkillsFirstPage />}
      />
      <BookPage
        turnPage={currentPage >= 3}
        pageNumber={3}
        currentPage={currentPage}
        frontContent={<MySkillsSecondPage />}
        backContent={<LatestProject />}
      />

      <BookPage
        turnPage={currentPage >= 4}
        pageNumber={4}
        currentPage={currentPage}
        frontContent={<EducationPage />}
        backContent={<ContactMePage />}
      />
    </div>
  );
};

export default Book;
