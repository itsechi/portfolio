import styles from './Link.module.scss';

export const Link = (props) => {
  const style =
    props.theme === 'large'
      ? styles.link_large
      : props.theme === 'normal'
      ? styles.link_normal
      : styles.link;

  return (
    <a
      className={style}
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.name}
    </a>
  );
};
