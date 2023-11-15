import { Link } from '../Link/Link';
import styles from './Contact.module.scss';

export const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.contact_header}>
        <h1 className={styles.contact_title}>Contact me</h1>
        <h2 className={styles.contact_left}>Let&rsquo;s get in touch!</h2>
      </div>
      <div className={styles.contact_text}>
        <Link
          name={'wardulinskao@gmail.com'}
          theme={'large'}
          href={'mailto:wardulinskao@gmail.com'}
        />
        <div className={styles.contact_websites}>
          <Link name={'LinkedIn'} theme={'normal'} href={'#'} />
          <Link
            name={'Github'}
            theme={'normal'}
            href={'https://github.com/itsechi'}
          />
        </div>
      </div>
    </section>
  );
};
