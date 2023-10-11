import styles from "./Home.module.scss";

export const Home = () => {

  return (
    <main>
      <div className={styles.noise}></div>
      <div className={styles.header}>
        <h1>
          hello, I&rsquo;m{" "}
          <span className={styles.bold}>Oliwia Wardulińska</span>
        </h1>
        <h1>
          a <span className={styles.bold}>front-end developer</span> &{" "}
          <span className={styles.bold}>designer</span>
        </h1>
        <p>
          you can check out my github{" "}
          <a className={styles.bold} href="#">
            here
            <svg>
              <path d="M34.2691 13.3109L39.707 7.87309C39.8873 7.69281 39.9885 7.44831 39.9885 7.19336C39.9885 6.93841 39.8873 6.6939 39.707 6.51363L34.2691 1.07579C34.1348 0.940932 33.9634 0.849012 33.7767 0.81168C33.59 0.774349 33.3965 0.793287 33.2206 0.866094C33.0447 0.938901 32.8943 1.0623 32.7887 1.22064C32.683 1.37898 32.6267 1.56514 32.6269 1.75552L32.6283 6.23222L0.962364 6.23086V8.15586L32.6283 8.1545L32.6269 12.6312C32.6267 12.8216 32.683 13.0077 32.7887 13.1661C32.8943 13.3244 33.0447 13.4478 33.2206 13.5206C33.3965 13.5934 33.59 13.6124 33.7767 13.575C33.9634 13.5377 34.1348 13.4458 34.2691 13.3109Z" />
            </svg>
          </a>
        </p>
      </div>
    </main>
  );
};
