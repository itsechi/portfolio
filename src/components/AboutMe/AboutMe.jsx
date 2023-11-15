import styles from './AboutMe.module.scss';

export const AboutMe = () => {
  return (
    <section className={styles.aboutMe}>
      <div className={styles.aboutMe_header}>
        <h2 className={styles.aboutMe_left}>Read more</h2>
        <h1 className={styles.aboutMe_title}>about me</h1>
      </div>
      <p className={styles.aboutMe_text}>
        Hello, my name is Oliwia Wardulińska and I&rsquo;m a self-taught
        front-end developer and graphic designer. Itsechi is the nickname I use
        across social medias. I build responsive, accessible websites from
        scratch that look and feel fresh and creative. I&rsquo;m committed to
        developing products that focus on usability and simplicity.
      </p>
      <p className={styles.aboutMe_text}>
        I love learning new things and technologies and I&rsquo;m always
        gathering inspiration and exploring different ideas and techniques.
        I&rsquo;m curious and passionate, especially when it comes to art, music
        and gaming.
      </p>
    </section>
  );
};
