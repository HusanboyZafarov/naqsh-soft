const HeaderButton = ({ label, handleActive }) => {
  return <button onClick={handleActive} className="form_opener">{label}</button>;
};

export default HeaderButton;
