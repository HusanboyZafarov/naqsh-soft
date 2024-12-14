const Closer = ({ isActive, handleCloseActive }) => {
  return (
    <div
      onClick={handleCloseActive}
      className={`closer ${isActive ? "changed" : ""}`}
    ></div>
  );
};

export default Closer;
