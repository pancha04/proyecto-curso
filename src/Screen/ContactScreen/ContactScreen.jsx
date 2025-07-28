<<<<<<< HEAD
import React, { useState, useContext } from "react";
import ContactList from "../../Components/ContactList/ContactList";
import { useContactContext } from "../../Context/ContactContext";
import Seeker from "../../Components/seeker/Seeker";
import { useNavigate } from 'react-router-dom'


const ContactScreen=()=>{
    const navigate = useNavigate()
    const {contacts}=useContactContext()
    const [search, setSearch] = useState('')

    const handleSelect = contact => {
    navigate(`/contactos/${contact.id}/mensajes`)
    }


    const filterContacts=contacts.filter(contact=>contact.name.toLowerCase().includes(search.toLowerCase()))
    
    return(
        <div className="contacts-screen-container">
            <div>
                <Seeker value={search} onChange={setSearch}/>
            </div>
            <div className="contacts-list">
                <ContactList contacts={filterContacts} onSelect={handleSelect}/>
            </div>
=======
import {React, useState} from "react";
import { getContacts } from "../../Services/ContactServices";
import ContactList from "../../Components/ContactList/ContactList";

const ContactScreen=()=>{
    const Contacts= getContacts();
    const [contactState, setContacts]=useState(Contacts)
    return(
        <div>
            <ContactList contacts={contactState}/>
>>>>>>> 461ea182b6d90e6ca39d71059a26a664e5158541
        </div>
    )
    
}

export default ContactScreen