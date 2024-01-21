import Title from "../Components/Title";
import NextPrevButton from "../Components/Buttons/NextPrevButton";
import WorkEducBox from "../Components/WorkEducBox/WorkEducBox";
import WorkEducContent from "../Components/WorkEducContent/WorkEducContent";
import { useNotebook } from "../Contexts/NotebookContext";
import PageNumber from "../Components/PageNumber";

const educationInfo = [
  {
    year: "2020 - 2021",
    title: "Web Developer - Company",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat odio eos assumenda consectetur, numquam officiis dicta fuga consequuntur possimus harum fugiat vel nemo? Ab, hic.",
  },
  {
    year: "2020 - 2021",
    title: "Web Developer - Company",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat odio eos assumenda consectetur, numquam officiis dicta fuga consequuntur possimus harum fugiat vel nemo? Ab, hic.",
  },
  {
    year: "2020 - 2021",
    title: "Web Developer - Company",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat odio eos assumenda consectetur, numquam officiis dicta fuga consequuntur possimus harum fugiat vel nemo? Ab, hic.",
  },
];

function EducationPage() {
  const { isMobile } = useNotebook();

  return (
    <>
      <Title>
        Education <i className="bx bxs-book"></i>
      </Title>

      {educationInfo.map((info, index) => (
        <WorkEducBox key={index}>
          <WorkEducContent
            key={index}
            year={info.year}
            title={info.title}
            content={info.content}
          />
        </WorkEducBox>
      ))}
      {isMobile && <NextPrevButton isNext={false} />}
      <NextPrevButton />
      <PageNumber number={5} />
    </>
  );
}

export default EducationPage;
