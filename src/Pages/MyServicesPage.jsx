import { useNotebook } from "../Contexts/NotebookContext";
import NextPrevButton from "../Components/Buttons/NextPrevButton";
import PageNumber from "../Components/PageNumber";
import Title from "../Components/Title";
import styles from "./MyServicesPage.module.css";

function MysServiceItem({ icon = "bx bx-code-alt", title, content }) {
  return (
    <div className={styles["services-content"]}>
      <i className={icon}></i>
      <h3>{title}</h3>
      <p>{content}</p>
      <button
        className={styles["btn"]}
        onClick={() => {
          console.log("Read More");
        }}
      >
        Read More
      </button>
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
          content="Lorem, ipsum dolor sit amet consectetur a.

          "
        />
        <MysServiceItem
          title="Web Development"
          content="Lorem, ipsum dolor sit amet consectetur a."
        />
        <MysServiceItem
          title="Web Development"
          content="Lorem, ipsum dolor sit amet consectetur a."
        />
        <MysServiceItem
          title="Web Development"
          content="Lorem, ipsum dolor sit amet consectetur a."
        />

        <NextPrevButton />
        {isMobile && <NextPrevButton isNext={false} />}
        <PageNumber number={3} />
      </div>
    </div>
  );
}

export default MyServicesPage;
