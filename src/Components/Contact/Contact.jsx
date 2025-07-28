<<<<<<< HEAD
import React from "react"
import { useContactContext } from '../../Context/ContactContext'

const Contact = ({ contact, onSelect }) => {
    if (!contact) return null

    const lastMessage = contact.messages.length > 0 ? contact.messages.at(-1) : null

    return (
    <div className="contact-item" onClick={() => onSelect(contact)}>
        <div className="contact-avatar">
        <img src={contact.avatar} alt={contact.name} />
        </div>
        <div className="contact-info">
        <h2>{contact.name}</h2>
        <span>
            {lastMessage ? `${lastMessage.emisor === 'YO' ? 'Tú: ' : ''}${lastMessage.texto}` : 'Sin mensajes'}
        </span>
        </div>
    </div>
    )
}

export default Contact
=======
import React from "react";
import { Link } from "react-router-dom";

const Contact=({contact})=>{
    return(
        <Link to={`/contactos/${contact.id}/mensajes`}>
            <h2>{contact.name}</h2>
            <img src={contact.avatar} alt={contact.name} />
            <span>{contact.connectionStatus}</span>
        </Link>

    )
}

export default Contact;
>>>>>>> 461ea182b6d90e6ca39d71059a26a664e5158541
