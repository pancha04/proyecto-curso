<<<<<<< HEAD
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
=======
import React from "react";
import Contact from "../Contact/Contact";
const ContactList=({contacts})=>{
    return(
        <div>
            {contacts.map(contact=>(
                <Contact contact={contact} key={contact.id}/>
            ))}
        </div>
    )
}

export default ContactList;
>>>>>>> 461ea182b6d90e6ca39d71059a26a664e5158541
