import styles from "./MySkillsPage.module.css";
import NextPrevButton from "../UI/Buttons/NextPrevButton";
import Title from "../UI/Title";
import { useNotebook } from "../Contexts/NotebookContext";
import PageNumber from "../UI/PageNumber";

function MySkillsPage() {
  const { isMobile } = useNotebook();

  return (
    <div>
      <Title>
        My Skills <i className="bx bxl-visual-studio"></i>
      </Title>
      <div className={styles["skills-box"]}>
        <div className={styles["skills-content"]}>
          <h3>Back-end</h3>
          <div className={styles["content"]}>
            <span>
              <i className="bx bxl-nodejs"></i>Node
            </span>
            <span>
              <i className="bx bx-coffee"></i>Express
            </span>
            <span>
              <img src="nest-js-icon.svg" alt="" />
              Nest
            </span>
            <span>
              <i className="bx bxl-typescript"></i>TypeScript
            </span>
            <span>
              <i className="bx bxl-aws"></i>AWS
            </span>
            <span>
              <i className="bx bxl-postgresql"></i>PostgreSQL
            </span>
            <span>
              <i className="bx bxl-mongodb"></i>MongoDB
            </span>
            <span>
              <i className="bx bxl-graphql"></i>GraphQL
            </span>
          </div>
        </div>

        <div className={styles["skills-content"]}>
          <h3>Deployment</h3>
          <div className={styles["content"]}>
            <span>
              <i className="bx bxl-docker"></i>Docker
            </span>
            <span>
              <i className="bx bxl-kubernetes"></i>Kubernetes
            </span>
            <span>
              <i className="bx bx-package"></i>CI/CD
            </span>
            <span>
              <i className="bx bxl-git"></i>Git
            </span>
            <span>
              <img src="linux-svgrepo-com.svg" alt="" />
              Linux
            </span>
            <span>
              <img src="nginx-svgrepo-com.svg" alt="" />
              NGINX
            </span>
          </div>
        </div>
      </div>
      {isMobile && <NextPrevButton />}

      <NextPrevButton isNext={false} />
      <PageNumber number={4} />
    </div>
  );
}

export default MySkillsPage;
