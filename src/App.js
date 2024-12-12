import Header from "./components/Header";
import Form from "./common/Form";
import Closer from "./common/Closer";
import { useState } from "react";
import Hero from "./components/Hero";

function App() {
  const [isActive, setActive] = useState(false);
  const [navActive, setNavActive] = useState(false);

  const handleActive = () => {
    setActive(!isActive);
  };

  return (
    <>
      <Header handleActive={handleActive} />
      <Form isActive={isActive} handleActive={handleActive} />
      <Closer isActive={isActive} handleActive={handleActive} />

      <main>
        <Hero handleActive={handleActive} />
      </main>
    </>
  );
}

export default App;
