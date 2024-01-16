import styles from "./Book.module.css";
import ProfilePage from "../Pages/ProfilePage";
import BookPage from "./BookPage";
import WorkExperience from "../Pages/WorkExperience";
import { useNotebook } from "../Contexts/NotebookContext";
import EducationPage from "../Pages/EducationPage";
import MyServicesPage from "../Pages/MyServicesPage";
import MySkillsPage from "../Pages/MySkillsPage";
import LatestProject from "../Pages/LatestProjectPage";
import ContactMePage from "../Pages/ContactMePage";

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
        backContent={<EducationPage />}
      />
      <BookPage
        turnPage={currentPage >= 3}
        pageNumber={3}
        currentPage={currentPage}
        frontContent={<MyServicesPage />}
        backContent={<MySkillsPage />}
      />

      <BookPage
        turnPage={currentPage >= 4}
        pageNumber={4}
        currentPage={currentPage}
        frontContent={<LatestProject />}
        backContent={<ContactMePage />}
      />
    </div>
  );
};

export default Book;
