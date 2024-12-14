import logo from "../assets/image/naqsh-soft-logo.png";
import Burger from "../common/Burger";
import Button from "../common/Button";
import Closer from "../common/Closer";

const Header = ({ handleActive, navActive, handleNavActive, activeSide, closer }) => {
  const links = [
    { id: 1, label: "Dastur", url: "#" },
    { id: 2, label: "Imkoniyatlar", url: "#possibilities" },
    { id: 3, label: "Narx", url: "#price" },
  ];

  return (
    <header>
      <div className="section-wrapp">
        <div className="container">
          <Closer isActive={activeSide()} handleCloseActive={closer} />
          <nav className="header_navbar">
            <ul className="header_list">
              <li className="header_item">
                <img src={logo} alt="logo" />
              </li>
              <li className="header_item">
                <ul className={`header_inner_list ${navActive && 'opened'}`}>
                  {links.map((link) => (
                    <li className="header_inner_item" key={link.id}>
                      <a href={link.url} className={link.label}>
                        {link.label}
                      </a>
                    </li>
                  ))}

                  <li className="header_inner_item sotib_olish">
                    <p className="sotib_olish form_opener">Sotib olish</p>
                  </li>
                  <li className="header_inner_item sinab_korish">
                    <p className="sinab_korish form_opener">Sinab ko’rish</p>
                  </li>
                </ul>
              </li>
              <li className="header_item">
                <div className="header_links">
                  <Button handleActive={handleActive} label="Sinab ko’rish" />
                  <Button handleActive={handleActive} label="Sotib olish" />
                  <Burger handleNavActive={handleNavActive} />
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="success">
        <div className="message_closer">
          <div className="message_closer_one"></div>
          <div className="message_closer_two"></div>
        </div>
        <p className="message_body">
          Xabar qabul qilindi, tez orada siz bilan bog'lanamiz.
        </p>
      </div>
      <div className="error">
        <div className="message_closer">
          <div className="message_closer_one"></div>
          <div className="message_closer_two"></div>
        </div>
        <p className="message_body">
          Xatolik ro'y berdi! Yana bir bor urinib ko`ring!
        </p>
      </div>
      <a className="btn-up" href="#">
        <i className="bi bi-chevron-up"></i>
      </a>
    </header>
  );
};

export default Header;
