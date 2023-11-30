import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Fluid } from './components/Fluid/Fluid';
import SmoothScroll from '../public/assets/js/SmoothScroll';
import React from 'react';

export const App = () => {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!loaded && <div className="loading"></div>}
      <div className="noise"></div>
      <Fluid />
      <Header />
      <SmoothScroll>
        <Main loaded={loaded} />
      </SmoothScroll>
    </>
  );
};
