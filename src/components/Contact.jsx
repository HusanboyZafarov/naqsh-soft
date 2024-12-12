import React from 'react'

const Contact = ({ contacts }) => {
    return (
        <div className="contact">
            <div className="section-wrapp">
                <div className="container">

                    <ul className="contact_list">
                        {contacts.map((contact) => (
                            <li className="contact_item" key={contact.id}>
                                <ul className="contact_body_list">
                                    <li className="contact_body_item">
                                        <span>
                                            <i className={`bi ${contact.icon}`}></i>
                                        </span>
                                    </li>
                                    <li className="contact_body_item">
                                        <h3>
                                            {contact.title}
                                        </h3>
                                    </li>
                                    <li className="contact_body_item">
                                        <p className="contact_body_text">
                                            {contact.desc}
                                        </p>
                                        <a href={contact.link} className="contact_link">
                                            {contact.link_display}
                                        </a>
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

export default Contact