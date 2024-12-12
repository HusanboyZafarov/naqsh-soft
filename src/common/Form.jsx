const Form = ({ isActive, handleActive }) => {
  const options = [
    { id: 1, value: "for-business", label: "Biznes uchun" },
    { id: 2, value: "for-company", label: "Korxona uchun" },
    { id: 3, value: "for-individuals", label: "YaTT uchun" },
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

      <select name="tarif" id="tarif" defaultValue="">
        <option value="" disabled>
          Dastur uchun tarif
        </option>
        {options.map((option) => (
          <option
            key={option.id}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
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
