import NextPrevButton from "../UI/Buttons/NextPrevButton";
import styles from "./LatestProjectPage.module.css";
import Title from "../UI/Title";
import Button from "../UI/Buttons/Button";
import { useNotebook } from "../Contexts/NotebookContext";
import PageNumber from "../UI/PageNumber";

function LatestProject() {
  const { isMobile } = useNotebook();

  return (
    <div>
      <Title>
        Latest Project <i className="bx bxs-cog"></i>
      </Title>
      <div className={styles["portfolio-box"]}>
        <div className={styles["img-box"]}>
          <img src="project.jpeg" alt="" />
        </div>
        <div className={styles["info-box"]}>
          <div className={styles["info-title"]}>
            <h3>Project Name</h3>
            <a href="">
              Live preview <i className="bx bx-link-external"></i>
            </a>
          </div>
          <p>Tech used:</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            magni fugit saepe enim? Provident, ad ea voluptatibus molestias
            aliquid reiciendis.
          </p>
        </div>

        <div className={styles["btn-box"]}>
          <Button>Source Code</Button>
          <Button secondary>More Projects</Button>
        </div>
      </div>
      <NextPrevButton />

      {isMobile && <NextPrevButton isNext={false} />}
      <PageNumber number={5} />
    </div>
  );
}

export default LatestProject;
