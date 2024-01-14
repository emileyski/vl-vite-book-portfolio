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
          title="Web Developer - Company"
          year="2020 - 2021"
          content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat odio eos assumenda consectetur, numquam officiis dicta fuga consequuntur possimus harum fugiat vel nemo? Ab, hic."
        />
        <WorkEducContent
          title="Web Developer - Company"
          year="2020 - 2021"
          content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat odio eos assumenda consectetur, numquam officiis dicta fuga consequuntur possimus harum fugiat vel nemo? Ab, hic."
        />
        <WorkEducContent
          title="Web Developer - Company"
          year="2020 - 2021"
          content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat odio eos assumenda consectetur, numquam officiis dicta fuga consequuntur possimus harum fugiat vel nemo? Ab, hic."
        />
      </WorkEducBox>

      <NextPrevButton />
      {isMobile && <NextPrevButton isNext={false} />}
      <PageNumber number={1} />
    </>
  );
}

export default WorkExperience;
