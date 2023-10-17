import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Projects } from './components/Projects/Projects';
import { Fluid } from './components/Fluid/Fluid';
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
      <div className="noise"></div> {/* testing */}
      <Header />
      <Fluid />
      <Home />
    </>
  );
};
