import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const { pathname } = useLocation();
  const links = [
    { pathname: "/aboutme", text: "About Me" },
    { pathname: "/portfolio", text: "PortFolio" },
    { pathname: "/contact", text: "Contact" },
    { pathname: "/resume", text: "Resume" },
  ];
  const renderLinks = () => {
    return links.map((link) => {
      return (
        <li>
          <Link
            className={pathname === link.pathname ? styles.activated : ""}
            to={link.pathname}
            key={link.pathname}
          >
            {link.text}
          </Link>
        </li>
      );
    });
  };
  return (
    <div className={styles.header}>
      <h1>Linda Fan</h1>
      <ul className={styles.navigations}>{renderLinks()}</ul>
    </div>
  );
};

export default Header;
