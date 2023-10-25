import React from 'react';
import { Main } from './components/Main/Main';

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
      <Main />

    </>
  );
};
