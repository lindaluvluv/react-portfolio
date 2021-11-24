import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul className={styles.externalLinks}>
        <li>
          <a href="https://github.com/lindaluvluv">Github</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
