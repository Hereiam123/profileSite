import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className={styles.navbar + " " + styles["navbar-fixed"]}>
      <nav className={`${styles["main-navigation"]} light-bg`}>
        <div className={`${styles["nav-wrapper"]}`}>
          <ul>
            <li>
              <Link to="home" activeClass="active" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="education"
                spy={true}
                smooth={true}
              >
                Education
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Work Experience
              </Link>
            </li>
            <li>
              <Link to="skills" spy={true} smooth={true}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Services
              </Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
