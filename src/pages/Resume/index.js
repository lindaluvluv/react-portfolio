import styles from "./style.module.css";
import resumePdf from "../../static/pdf/Lin Fan Resume.pdf";
const Resume = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Download My Resume</h2>
      <div className={styles.pdfLink}>
        <a href={resumePdf}>Click Me To Download</a>
      </div>
    </div>
  );
};

export default Resume;
