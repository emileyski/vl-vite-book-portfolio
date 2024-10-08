import NextPrevButton from "../Components/Buttons/NextPrevButton";
import styles from "./LatestProjectPage.module.css";
import Title from "../Components/Title";
import { useNotebook } from "../Contexts/NotebookContext";
import PageNumber from "../Components/PageNumber";

function LatestProject() {
  const { isMobile } = useNotebook();

  return (
    <div>
      <Title>
        Latest Project <i className="bx bxs-cog"></i>
      </Title>
      <div className={styles["portfolio-box"]}>
        <div className={styles["img-box"]}>
          <img src="ddd.png" alt="" />
        </div>
        <div className={styles["info-box"]}>
          <div className={styles["info-title"]}>
            <h3>NestJS Advanced Architectures</h3>
            {/* <a href="">
              Live preview <i className="bx bx-link-external"></i>
            </a> */}
          </div>
          {/* <p>Tech used:</p> */}
          <p>
          NestJS project that utilizes modern design patterns such as Clean Architecture, Domain-Driven Design, Event-Driven Architecture, Selective Event Sourcing and Command and Query Responsibility Segregation.
          </p>
        </div>

        <div className={styles["btn-box"]}>
          <a href="https://github.com/vlbras/nestjs-cqrs-ddd-event-sourcing" target="_blank" rel="noopener noreferrer">
            <button className={styles["btn"]}>Source Code</button>
          </a>
          <a href="https://github.com/vlbras" target="_blank" rel="noopener noreferrer">
            <button className={`${styles["btn"]} ${styles["secondary"]}`}>
              More Projects
            </button>
          </a>
        </div>
      </div>
      <NextPrevButton isNext={false} />

      {isMobile && <NextPrevButton />}
      <PageNumber number={5} />
    </div>
  );
}

export default LatestProject;
