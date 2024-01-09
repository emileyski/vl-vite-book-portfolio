import { useNotebook } from "../Contexts/NotebookContext";
import Button from "../UI/Buttons/Button";
import NextPrevButton from "../UI/Buttons/NextPrevButton";
import PageNumber from "../UI/PageNumber";
import Title from "../UI/Title";
import styles from "./MyServicesPage.module.css";

function MysServiceItem({ icon = "bx bx-code-alt", title, content }) {
  return (
    <div className={styles["services-content"]}>
      <i className={icon}></i>
      <h3>{title}</h3>
      <p>{content}</p>
      <Button
        small
        onClick={() => {
          console.log("Read More");
        }}
      >
        Read More
      </Button>
    </div>
  );
}

function MyServicesPage() {
  const { isMobile } = useNotebook();
  return (
    <div className={styles["services-page"]}>
      <Title>
        My Services <i className="bx bx-code-alt"></i>
      </Title>
      <div className={styles["services-box"]}>
        <MysServiceItem
          title="Web Development"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quos."
        />
        <MysServiceItem
          title="Web Development"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quos."
        />

        <MysServiceItem
          title="Web Development"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quos."
        />

        <MysServiceItem
          title="Web Development"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quos."
        />

        <NextPrevButton />
        {isMobile && <NextPrevButton isNext={false} />}
        <PageNumber number={3} />
      </div>
    </div>
  );
}

export default MyServicesPage;
