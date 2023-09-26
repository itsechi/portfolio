import { Nav } from "./components/Nav/Nav";
import { Cursor } from "./components/Cursor/Cursor";
import { Home } from "./components/Home/Home";
import { Projects } from "./components/Projects/Projects";

export const App = () => {
  return (
    <>
      <Cursor />
      <Nav />
      {/* <Home /> */}
      <Projects />
    </>
  );
};
