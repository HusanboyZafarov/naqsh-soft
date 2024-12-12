const Form = ({ isActive, handleActive }) => {
  const options = [
    { id: 1, value: "", selected: true },
    { id: 2, value: "", selected: true },
    { id: 3, value: "", selected: true },
    { id: 4, value: "", selected: true },
  ]

  return (
    <form action="" className={`form ${isActive ? "opened" : ""}`}>

      <div className="closers" onClick={handleActive}>
        <div className="closer_line_two"></div>
        <div className="closer_line_one"></div>
      </div>

      <h3 className="form_heading">
        Xizmatlarga buyurtma yoki maslahat olish uchun bog’lanish formasi
      </h3>

      <input type="text" name="fullname" placeholder="Ism familiya" />

      <input type="number" name="number" placeholder="Telefon raqam" />

      <select name="tarif" id="tarif">
        <option
          value="Dastur uchun tarif"
          selected
          style={{ display: "none" }}
        >
          Dastur uchun tarif
        </option>
      </select>

      <textarea
        name="message"
        id="message"
        placeholder="Qo’shimcha xabar"
      ></textarea>

      <button type="submit">Yuborish</button>
    </form>
  );
};

export default Form;
