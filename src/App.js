import Header from "./components/Header";
import Form from "./common/Form";
import Closer from "./common/Closer";
import { useState } from "react";
import Hero from "./components/Hero";
import Second from "./components/Second";
import Price from "./components/Price";
import Contact from "./components/Contact";

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

  const [prices, setPrice] = useState([
    {
      id: 1,
      title: "Start",
      desc: "Kichik bizneslar uchun",
      cost: 9,
      allowance: [
        {
          id: 1,
          label: "Barcha imkoniyatlaridan foydalanish",
        },
        {
          id: 2,
          label: "O’rgatuvchi yordamchi",
        },
        {
          id: 3,
          label: "Tovarlarni kiritishda cheklov yo’q",
        },
        {
          id: 4,
          label: "Doimiy yordam",
        },
      ],
    },
    {
      id: 2,
      title: "Super",
      desc: "Ishlab chiqarish, katta bizneslar uchun",
      cost: 18,
      allowance: [
        {
          id: 1,
          label: "Barcha imkoniyatlaridan foydalanish",
        },
        {
          id: 2,
          label: "O’rgatuvchi yordamchi",
        },
        {
          id: 3,
          label: "Tovarlarni kiritishda cheklov yo’q",
        },
        {
          id: 4,
          label: "Doimiy yordam",
        },
      ],
    },
  ]);

  const [contacts, setContact] = useState([
    {
      id: 1,
      icon: "bi-envelope-open",
      title: "Email",
      desc: "Elektron xabarlar uchun",
      link: "support@naqshsoft.uz",
      link_display: "mailto:support@naqshsoft.uz",
    },
    {
      id: 2,
      icon: "bi-telephone",
      title: "Telefon",
      desc: "Qo’ng’iroqlar uchun",
      link: "tel:+998 99 903 44 40",
      link_display: "",
    },
    {
      id: 3,
      icon: "bi-geo-alt",
      title: "Manzil",
      desc: "Uchrashuvlar uchun",
      link: "https://www.google.com.bo/maps/place/Robocode+IT+Academy/@40.7468711,72.344796,220m/data=!3m2!1e3!4b1!4m6!3m5!1s0x38bced7b6cf5df29:0xace59ec7e44d0e57!8m2!3d40.7469172!4d72.3452063!16s%2Fg%2F11k3wqpkn9",
      link_display: "Andijon shahar M.Saidov ko’chasi 6-uy",
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
        <Price prices={prices} handleActive={handleActive} />
        <Contact contacts={contacts} />
      </main>
    </>
  );
}

export default App;
