import styles from './Projects.module.scss';
import weather from '../../assets/weather.png';
import shoppingCart from '../../assets/shoppingcart.png';
import twitter from '../../assets/twitter.png';
import todoList from '../../assets/todoList.png';
import wheresWaldo from '../../assets/wheresWaldo.png';
import { Link } from '../Link/Link';

export const Projects = () => {
  const Project = (props) => {
    const projectTags = props.tags.map((tag) => (
      <p className={styles.project_tag} key={tag}>
        {tag}
      </p>
    ));

    return (
      <article className={props.classes}>
        <img className={styles.project_image} src={props.img}></img>
        <h3 className={styles.project_title}>{props.title}</h3>
        <div className={styles.project_tags}>{projectTags}</div>
        <p className={styles.project_description}>{props.description}</p>
        <a
          className={styles.project_website}
          href={props.website}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z" />
          </svg>
          View project{' '}
        </a>
      </article>
    );
  };

  return (
    <section className={styles.projects}>
      <h2 className={styles.projects_header}>Projects</h2>
      <div className={styles.projects_grid}>
        <Project
          classes={styles.project}
          tags={['React', 'Firebase', 'Vite', 'SCSS', 'CSS modules']}
          title={'Twitter Clone'}
          description={`A Twitter clone built with React and Firebase. The users can edit their profile, follow and unfollow accounts, write and like tweets and visit other profiles. I made it possible for users to log in through Google or use the site as a guest to test the functionality.`}
          website={'https://itsechi.github.io/twitter-clone/'}
          img={twitter}
        />
        <Project
          classes={[styles.project, styles.project_uneven].join(' ')}
          tags={['React', 'Firebase', 'SCSS', 'Jest', 'CSS modules']}
          title={'Shopping Cart'}
          description={`A simple fake store React application made to practice routing, Jest testing and using CSS modules. It allows users to log in through Google, browse the store catalog, add items to cart and store that information in the Firebase database. I wanted the design to be simple yet effective.`}
          website={'https://itsechi.github.io/shopping-cart/'}
          img={shoppingCart}
        />
        <Project
          classes={styles.project}
          tags={['JavaScript', 'Webpack', 'SCSS']}
          title={'Weather App'}
          description={`Weather app that displays current forecast data for a given location. It was a part of the The Odin Project curriculum and I made it with a model-view-controller design pattern. I created the design in Figma using grids for the first time and I focused on making the design user-friendly and minimalistic.`}
          website={'https://itsechi.github.io/weather/'}
          img={weather}
        />
        <Project
          classes={[styles.project, styles.project_uneven].join(' ')}
          tags={['JavaScript', 'Webpack', 'SCSS']}
          title={'Todo List'}
          description={`A simple task organizer made with pure JavaScript. The user can add projects, add and edit tasks, sort the tasks by due date, name and date of creation, delete taks and projects, set priority of the tasks and monitor their progress with a progress bar for each project.`}
          website={'https://itsechi.github.io/todo-list/'}
          img={todoList}
        />
        <Project
          classes={styles.project}
          tags={['React', 'Firebase', 'Vite', 'CSS']}
          title={`Where's waldo?`}
          description={`A Stardew Valley themed Where's Waldo type of game made with React and Firebase. The user must find three hidden characters in the shortest time possible. They can then submit their score and name to the leaderboard which is stored in the Firebase. I wanted to recreate the pixel art vibe of the game while keeping things plain and simple.`}
          website={'https://itsechi.github.io/wheres-waldo/'}
          img={wheresWaldo}
        />
        <div className={[styles.project, styles.project_uneven].join(' ')}>
          <h3 className={styles.projects_largeText}>Want to see more?</h3>
          <p>
            If you&rsquo;d like to see more design-oriented projects, you can
            view my{' '}
            <Link
              href="https://itsechi.github.io/restaurant/"
              name={'Pure Cove Restaurant site'}
            />
            ,{' '}
            <Link
              href="https://itsechi.github.io/admin-dashboard/"
              name={'Admin Dashboard'}
            />{' '}
            or{' '}
            <Link
              href="https://itsechi.github.io/cv-project/"
              name={'the CV Creator'}
            />
            .
          </p>

          <p>
            If you want to play some of the games I&rsquo;ve made, you can check
            out my{' '}
            <Link
              href="https://itsechi.github.io/memory-card/"
              name={'Memory Card'}
            />
            ,{' '}
            <Link
              href="https://itsechi.github.io/battleship/"
              name={'Battleship'}
            />{' '}
            or{' '}
            <Link
              href="https://itsechi.github.io/tic-tac-toe/"
              name={'Tic-Tac-Toe'}
            />{' '}
            apps.
          </p>
        </div>
      </div>
    </section>
  );
};
