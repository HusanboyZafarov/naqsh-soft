const Burger = ({ handleNavActive }) => {
  return (
    <div className="burger" onClick={handleNavActive}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  );
};

export default Burger;
