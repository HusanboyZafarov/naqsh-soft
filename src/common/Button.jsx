const Button = ({ label, handleActive, name }) => {
  return <button onClick={handleActive} className={`form_opener ${name}`}>{label}</button>;
};

export default Button;
