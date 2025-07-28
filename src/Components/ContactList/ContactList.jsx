import React from "react"
import Contact from "../Contact/Contact"

const ContactList = ({ contacts, onSelect }) => {
    return (
    <div>
        {contacts.map(contact => (
        <Contact
            key={contact.id}
            contact={contact}
            onSelect={() => onSelect(contact)}
        />
        ))}
    </div>
    )
}

export default ContactList