import {React, useState} from "react";
import { getContacts } from "../../Services/ContactServices";
import ContactList from "../../Components/ContactList/ContactList";

const ContactScreen=()=>{
    const Contacts= getContacts();
    const [contactState, setContacts]=useState(Contacts)
    return(
        <div>
            <ContactList contacts={contactState}/>
        </div>
    )
    
}

export default ContactScreen