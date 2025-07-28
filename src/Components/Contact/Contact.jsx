
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

