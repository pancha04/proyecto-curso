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