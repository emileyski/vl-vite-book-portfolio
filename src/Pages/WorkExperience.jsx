import NextPrevButton from "../Components/Buttons/NextPrevButton";
import Title from "../Components/Title";
import WorkEducBox from "../Components/WorkEducBox/WorkEducBox";
import WorkEducContent from "../Components/WorkEducContent/WorkEducContent";
import { useNotebook } from "../Contexts/NotebookContext";
import PageNumber from "../Components/PageNumber";

function WorkExperience() {
  const { isMobile } = useNotebook();

  return (
    <>
      <Title>
        Work Experience <i className="bx bxs-briefcase"></i>
      </Title>

      <WorkEducBox>
        <WorkEducContent
          title="Senior Backend Engineer - Flip"
          year="2024 - Present"
          content={`• Implemented a combination of Orchestration and Choreography approaches, reducing transaction failures by 65%<br>
• Divided large domain into CQRS microservices, enhancing query performance by 55%
	and lowering peak hour load by 20%
`}
        />
        <WorkEducContent
          title="Backend Engineer - WNET"
          year="2022 - 2024"
          content="• Integrated Domain-Driven Design, cutting new feature development time by 25%<br>
• Adopted caching mechanisms that speed up application response times by up to 70%"
        />
        <WorkEducContent
          title="Software Engineer - WeblancerNet"
          year="2019 - 2022"
          content="• Engineered Role-Based Access Control and Access Control Lists, enhancing access management<br>
• Identified and applied code refactoring opportunities, reducing code volume by 35%"
        />
      </WorkEducBox>

      <NextPrevButton />
      {isMobile && <NextPrevButton isNext={false} />}
      <PageNumber number={2} />
    </>
  );
}

export default WorkExperience;
