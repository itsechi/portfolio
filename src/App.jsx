import { Nav } from "./components/Nav/Nav";
import { Home } from "./components/Home/Home";
import { Projects } from "./components/Projects/Projects";
import { Fluid } from "./components/Fluid/Fluid";
import React from "react";

export const App = () => {
  const [active, setActive] = React.useState("home");
  const [loaded, setLoaded] = React.useState(false);

  const updateState = (tab) => {
    setActive(tab);
  };

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
      <Nav active={active} updateState={updateState} />
      <Fluid />
      {active === "home" && <Home />}
      {active === "projects" && <Projects />}
    </>
  );
};
