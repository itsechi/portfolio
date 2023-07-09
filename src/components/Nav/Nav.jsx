import PropTypes from "prop-types";
import styles from "./Nav.module.scss";

export const Nav = () => {
  const NavLink = (props) => {
    return (
      <li>
        <a href="#">
          <span className={styles.navNumber}>{props.number} </span>
          {props.title}
        </a>
      </li>
    );
  };

  NavLink.propTypes = {
    number: PropTypes.string,
    title: PropTypes.string,
  };

  return (
    <nav>
      <ul className={styles.navLinks}>
        <NavLink number={"01"} title={"home"} />
        <NavLink number={"02"} title={"projects"} />
        <NavLink number={"03"} title={"about me & contact"} />
      </ul>
    </nav>
  );
};
