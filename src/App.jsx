import "./App.css";
import { Nav } from "./components/Nav/Nav";
import { Cursor } from "./components/Cursor/Cursor";
import { Home } from "./components/Home/Home";

export const App = () => {
  return (
    <>
      <Cursor />
      <Nav />
      <Home />
    </>
  );
};
