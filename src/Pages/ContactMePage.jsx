import GoToProfile from "../Components/Buttons/GoToProfileButton";
import NextPrevButton from "../Components/Buttons/NextPrevButton";

import PageNumber from "../Components/PageNumber";
import Title from "../Components/Title";
import styles from "./ContactMePage.module.css";

function ContactMePage() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData); //data contains name, subject, message

    window.open(
      `mailto:vladyslav.braslavskyi@gmail.com?subject=${data.subject}
      &body=From: ${data.name}%0D%0A%0D%0AMessage Text: ${data.message}`
    );
  };

  return (
    <>
      <Title>
        Contact Me <i className="bx bx-mail-send"></i>
      </Title>
      <div className={styles["contact-box"]}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className={styles["field"]}
            placeholder="Full Name"
            name="name"
            required
          />
          <input
            type="text"
            className={styles["field"]}
            placeholder="Email Subject"
            name="subject"
            required
          />

          <textarea
            className={styles["field"]}
            placeholder="Your Message"
            name="message"
            required
            cols="30"
            rows="10"
          ></textarea>
          <input type="submit" value="Send Message" className={styles["btn"]} />
        </form>
      </div>

      <NextPrevButton isNext={false} />
      <GoToProfile />

      <PageNumber number={6} />
    </>
  );
}

export default ContactMePage;
