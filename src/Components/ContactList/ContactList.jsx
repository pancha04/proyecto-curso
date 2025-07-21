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