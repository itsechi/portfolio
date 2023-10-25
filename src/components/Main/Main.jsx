import { Header } from '../Header/Header';
import { Intro } from '../Intro/Intro';
// import { Projects } from './Projects/Projects';
import { Fluid } from '../Fluid/Fluid';

export const Main = () => {
  return (
    <main>
      <Header />
      <Fluid />
      <Intro />
    </main>
  );
};
