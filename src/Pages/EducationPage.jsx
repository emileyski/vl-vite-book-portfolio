import Title from "../UI/Title";
import NextPrevButton from "../UI/Buttons/NextPrevButton";
import WorkEducBox from "../Components/WorkEducBox/WorkEducBox";
import WorkEducContent from "../Components/WorkEducContent/WorkEducContent";
import { useNotebook } from "../Contexts/NotebookContext";
import PageNumber from "../UI/PageNumber";

function EducationPage() {
  const { isMobile } = useNotebook();

  return (
    <>
      <Title>
        Education <i className="bx bxs-book"></i>
      </Title>

      <WorkEducBox>
        <WorkEducContent
          year={"2020 - 2021"}
          title={"Web Developer - Company"}
          content={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat odio eos assumenda consectetur, numquam officiis dicta fuga consequuntur possimus harum fugiat vel nemo? Ab, hic."
          }
        />

        <WorkEducContent
          year={"2020 - 2021"}
          title={"Web Developer - Company"}
          content={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat odio eos assumenda consectetur, numquam officiis dicta fuga consequuntur possimus harum fugiat vel nemo? Ab, hic."
          }
        />

        <WorkEducContent
          year={"2020 - 2021"}
          title={"Web Developer - Company"}
          content={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat odio eos assumenda consectetur, numquam officiis dicta fuga consequuntur possimus harum fugiat vel nemo? Ab, hic."
          }
        />
      </WorkEducBox>
      {isMobile && <NextPrevButton />}
      <NextPrevButton isNext={false} />
      <PageNumber number={2} />
    </>
  );
}

export default EducationPage;
