import React from 'react'
import SectionBadge from '../common/SectionBadge'
import SectionHeading from '../common/SectionHeading'
import SectionInfo from '../common/SectionInfo'
import Button from '../common/Button'

const Price = ({ prices, handleActive }) => {
    return (
        <div className="price" id="price">
            <div className="section-wrapp">
                <div className="container">
                    <SectionBadge label="Narxi" />
                    <SectionHeading label="O’zingiz uchun qulay narxni tanlang" />
                    <SectionInfo label="Narxlar sizning biznesingiz uchun qulaylashtirilgan" />
                    <div className="wrapper_btns">
                        <div className="price_btns">
                            <Button label="Oylik to’lov" name="selected" />
                            <Button handleActive={handleActive} label="Butunlay sotib olish" />
                        </div>
                    </div>
                    <ul className="price_list">
                        {prices.map((price) => (
                            <li className="price_item" key={price.id}>
                                <ul className="price_body_list">
                                    <li className="price_body_item">
                                        <ul className="price_info_list">
                                            <li className="price_info_item">
                                                <h3>
                                                    {price.title}
                                                </h3>
                                                <p className="price_info_text">
                                                    {price.desc}
                                                </p>
                                            </li>
                                            <li className="price_info_item">
                                                <h1>{price.cost}</h1>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="price_body_item">
                                        <ul className="price_opp_list">
                                            {price.allowance.map((allow) => (
                                                <li className="price_opp_item" key={allow.label}>
                                                    <span><i className="bi bi-check"></i></span>
                                                    {allow.label}
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                    <li className="price_body_item">
                                        <Button handleActive={handleActive} label="Sinab ko'rish" />
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

export default Price