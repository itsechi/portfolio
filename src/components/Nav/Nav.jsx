import styles from "./Nav.module.scss";

export const Nav = (props) => {
  const { updateState } = props;

  const NavLink = (props) => {
    return (
      <li onClick={() => updateState(props.title)}>
        <span className={styles.navNumber}>{props.number} </span>
        {props.title}
      </li>
    );
  };

  return (
    <nav
      className={[
        styles.nav,
        props.active !== "home" ? styles.navHalf : "",
      ].join(" ")}
    >
      {props.active !== "home" && <h3>{props.active}</h3>}{" "}
      <div>
        <ul className={styles.navLinks}>
          <NavLink number={"01"} title={"home"} />
          <NavLink number={"02"} title={"projects"} />
          <NavLink number={"03"} title={"about me & contact"} />
        </ul>
      </div>
    </nav>
  );
};
