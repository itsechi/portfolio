import styles from './Link.module.scss';

export const Link = (props) => {
  return (
    <a
      className={styles.link}
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.name}
    </a>
  );
};
