import SectionBadge from '../common/SectionBadge'
import SectionHeading from '../common/SectionHeading'
import SectionInfo from '../common/SectionInfo'
import bg from '../assets/image/secondary_bg.jpg'

const Second = ({ oppos }) => {
    return (
        <div className="secondary" id="possibilities" style={{ backgroundImage: `url(${bg})` }}>
            <div className="section-wrapp">
                <div className="container">
                    <SectionBadge label="Imkoniyatlar" />
                    <SectionHeading label="Naqsh Market bilan savdoni oson boshqaring" />

                    <SectionInfo label={
                        <>
                            Bizning dastur yordamida siz savdo ustidan nazorat o’rnatish mumkin, mijozlar bilan
                            <br /> ishlashda
                            yengillik va xisob kitob
                            uchun bosh qotirmaslik kabi qulayliklarga ega bo’lasiz.
                        </>
                    } />

                    <ul className="secondary_list">
                        {oppos.map((oppo) => (
                            <li className="secondary_item" key={oppo.id}>
                                <ul className="secondary_body_list">
                                    <li className="secondary_body_item">
                                        <span>
                                            <i className={`bi ${oppo.icon}`}></i>
                                        </span>
                                    </li>
                                    <li className="secondary_body_item">
                                        <h3>
                                            {oppo.title}
                                        </h3>
                                    </li>
                                    <li className="secondary_body_item">
                                        <p className="secondary_body_text">
                                            {oppo.desc}
                                        </p>
                                    </li>
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Second