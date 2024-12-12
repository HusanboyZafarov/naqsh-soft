import Header from "./components/Header";
import Form from "./common/Form";
import Closer from "./common/Closer";
import { useState } from "react";
import Hero from "./components/Hero";
import Second from "./components/Second";

function App() {
  const [isActive, setActive] = useState(false);
  const [navActive, setNavActive] = useState(false);

  const [oppos, setOppo] = useState([
    {
      id: 1,
      icon: "bi-emoji-wink",
      title: "Foydalanish oson",
      desc: "Dastur oddiy va sodda interfeysga ega foydalanish uchun qulay.",
    },
    {
      id: 2,
      icon: "bi-graph-up",
      title: "Biznes tahlil",
      desc: "To'liq savdo boshqaruv paneli. Faoliyat, daromad va ijtimoiy koʻrsatkichlarni bir joyda koʻring.",
    },
    {
      id: 3,
      icon: "bi-cash-stack",
      title: "Bir nechta kassa",
      desc: "Dastur bir nechta kassalar bilan bir vaqtda ishlash imkonini beradi.",
    },
    {
      id: 4,
      icon: "bi-upc-scan",
      title: "Tarozi va Skanerlar",
      desc: "Dastur elektron tarozi va barkod skanerlar bilan ishlay oladi",
    },
    {
      id: 5,
      icon: "bi-cart-check",
      title: "Ombor nazorati",
      desc: "Ombordagi tovarlar nazorati ular haqida to’liq ma’lumotlarni bilib turishingiz mumkin.",
    },
    {
      id: 6,
      icon: "bi-arrow-repeat",
      title: "Tovar aylanish nazorati",
      desc: "Tovarlar kirdi-chiqdisini hujjatlashtirish ularni saralash va oson nazorat qilish imkoni.",
    },
  ]);

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
        <Second oppos={oppos} />
      </main>
    </>
  );
}

export default App;
