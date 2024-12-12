const Button = ({ label, handleActive }) => {
  return <button onClick={handleActive} className="form_opener">{label}</button>;
};

export default Button;
