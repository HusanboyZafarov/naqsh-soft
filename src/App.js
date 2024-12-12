import "./App.css";
import Header from "./components/Header";
import Form from "./common/Form";
import Closer from "./common/Closer";
import { useState } from "react";

function App() {
  const [isActive, setActive] = useState(false);

  return (
    <>
      <Header handleActive={() => setActive(true)} />
      <Form isActive={isActive} handleActive={() => setActive(false)} />
      <Closer isActive={isActive} handleActive={() => setActive(false)} />

      <main>
      
      </main>


    </>
  );
}

export default App;
