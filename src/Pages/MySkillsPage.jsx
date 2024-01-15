import styles from "./MySkillsPage.module.css";
import NextPrevButton from "../Components/Buttons/NextPrevButton";
import Title from "../Components/Title";
import { useNotebook } from "../Contexts/NotebookContext";
import PageNumber from "../Components/PageNumber";

const backEndSkills = [
  {
    name: "Node",
    icon: "bx bxl-nodejs",
    img: null,
  },
  {
    name: "Express",
    icon: "bx bx-coffee",
    img: null,
  },
  {
    name: "Nest",
    icon: null,
    img: "nest-js-icon.svg",
  },
  {
    name: "TypeScript",
    icon: "bx bxl-typescript",
    img: null,
  },
  {
    name: "AWS",
    icon: "bx bxl-aws",
    img: null,
  },
  {
    name: "PostgreSQL",
    icon: "bx bxl-postgresql",
    img: null,
  },
  {
    name: "MongoDB",
    icon: "bx bxl-mongodb",
    img: null,
  },
  {
    name: "GraphQL",
    icon: "bx bxl-graphql",
    img: null,
  },
];

const deploymentSkills = [
  {
    name: "Docker",
    icon: "bx bxl-docker",
    img: null,
  },
  {
    name: "Kubernetes",
    icon: "bx bxl-kubernetes",
    img: null,
  },
  {
    name: "CI/CD",
    icon: "bx bx-package",
    img: null,
  },
  {
    name: "Git",
    icon: "bx bxl-git",
    img: null,
  },
  {
    name: "Linux",
    icon: null,
    img: "linux-svgrepo-com.svg",
  },
  {
    name: "NGINX",
    icon: null,
    img: "nginx-svgrepo-com.svg",
  },
];

const SkillItem = ({ skill }) => {
  return (
    <span>
      {skill.icon && <i className={skill.icon}></i>}
      {skill.img && <img src={skill.img} alt="" />}
      {skill.name}
    </span>
  );
};

const SkillsContent = ({ title, skills }) => {
  return (
    <div className={styles["skills-content"]}>
      <h3>{title}</h3>
      <div className={styles["content"]}>
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

function MySkillsPage() {
  const { isMobile } = useNotebook();

  return (
    <div>
      <Title>
        My Skills <i className="bx bxl-visual-studio"></i>
      </Title>
      <div className={styles["skills-box"]}>
        <SkillsContent title={"Back End"} skills={backEndSkills} />

        <SkillsContent title={"Deployment"} skills={deploymentSkills} />
      </div>
      {isMobile && <NextPrevButton />}

      <NextPrevButton isNext={false} />
      <PageNumber number={4} />
    </div>
  );
}

export default MySkillsPage;
