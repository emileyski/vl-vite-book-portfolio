import NextPrevButton from "../Components/Buttons/NextPrevButton";
import Title from "../Components/Title";
import { useNotebook } from "../Contexts/NotebookContext";
import PageNumber from "../Components/PageNumber";
import SkillsContent from "../Components/SkillsContent";
import SkillsBox from "../Components/SkillsBox";

const languages = [
  {
    name: "JavaScript",
    icon: "bx bxl-javascript",
    img: null,
  },
  {
    name: "TypeScript",
    icon: "bx bxl-typescript",
    img: null,
  },
  {
    name: "SQL",
    icon: null,
    img: "skill-icons/sql-database-generic-svgrepo-com.svg",
  },
];

const backend = [
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
    name: "Jest",
    icon: null,
    img: "skill-icons/jest-svgrepo-com.svg",
  },
];

const databases = [
  {
    name: "PostgreSQL",
    icon: "bx bxl-postgresql",
    img: null,
  },
  {
    name: "MySQL",
    icon: null,
    img: "skill-icons/mysql-svgrepo-com.svg",
  },
  {
    name: "MongoDB",
    icon: "bx bxl-mongodb",
    img: null,
  },
  {
    name: "DynamoDB",
    icon: null,
    img: "skill-icons/aws-dynamodb-svgrepo-com.svg",
  },
  {
    name: "Redis",
    icon: null,
    img: "skill-icons/redis-svgrepo-com.svg",
  },
  {
    name: "TypeORM",
    icon: null,
    img: "skill-icons/typeorm-svgrepo-com.svg",
  },
  {
    name: "Prisma",
    icon: null,
    img: "skill-icons/prisma-svgrepo-com.svg",
  },
];

function MySkillsFirstPage() {
  const { isMobile } = useNotebook();

  console.log(isMobile);

  return (
    <div>
      <Title>
        My Skills <i className="bx bxl-visual-studio"></i>
      </Title>
      <SkillsBox>
        <SkillsContent title={"Languages"} skills={languages} />

        <SkillsContent title={"Backend"} skills={backend} />

        <SkillsContent title={"Databases"} skills={databases} />
      </SkillsBox>

      {isMobile && <NextPrevButton isNext={false} />}

      <NextPrevButton />
      <PageNumber number={3} />
    </div>
  );
}

export default MySkillsFirstPage;
