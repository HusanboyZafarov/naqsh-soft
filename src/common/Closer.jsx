const Closer = ({ isActive, handleActive }) => {
  return (
    <div
      onClick={handleActive}
      className={`closer ${isActive ? "changed" : ""}`}
    ></div>
  );
};

export default Closer;
