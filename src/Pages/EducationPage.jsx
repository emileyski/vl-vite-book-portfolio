import Title from "../Components/Title";
import NextPrevButton from "../Components/Buttons/NextPrevButton";
import WorkEducBox from "../Components/WorkEducBox/WorkEducBox";
import WorkEducContent from "../Components/WorkEducContent/WorkEducContent";
import { useNotebook } from "../Contexts/NotebookContext";
import PageNumber from "../Components/PageNumber";

const educationInfo = [
  {
    year: "2019 - 2023",
    title: "National Technical University of Ukraine",
    content:
      `The National Technical University of Ukraine specializes in algorithms, distributed systems and back-end architecture, applying modern technologies to develop scalable solutions.`,
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
      <PageNumber number={6} />
    </>
  );
}

export default EducationPage;
