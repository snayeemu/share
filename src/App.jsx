import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavbarCompo from "./components/NavbarCompo/NavbarCompo";
import Main from "./components/Main/Main";
import MyBlog from "./components/MyBlog/MyBlog";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavbarCompo></NavbarCompo>
      <Main></Main>
      <MyBlog></MyBlog>
    </div>
  );
}

export default App;
