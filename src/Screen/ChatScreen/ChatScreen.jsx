<<<<<<< HEAD
import React from "react"
import { useParams } from "react-router-dom"
import MessagesList from "../../Components/MessagesList/MessagesList"
import NewMessage from "../../Components/NewMessage/NewMessage"
import { useContactContext } from "../../Context/ContactContext" 
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


const ChatScreen = () => {
    const { id } = useParams()
    const contactId = Number(id)    
    const { getContactById, sendMessage } = useContactContext()
    const contactSelected = getContactById(contactId)
    const navigate = useNavigate() 



    if (!contactSelected) return <p>Contacto no encontrado</p>  
    return (
    <div className="chat-screen">
        <div className="contact-item">
            <button className="back-button" onClick={() => navigate(-1)}><IoIosArrowBack /></button>
            <div className="contact-avatar">
                <img src={contactSelected.avatar} alt={contactSelected.name} />
            </div>
            <div className="contact-info">
                <h2>{contactSelected.name}</h2>
                <span>{contactSelected.connectionStatus}</span>
            </div>
            </div>

        <div className="chat-content">
        <div className="chat-messages">
            <MessagesList
            messages={contactSelected.messages}
            />
        </div>
        <div className="new-message">
            <NewMessage sendMessage={texto => sendMessage(contactId, texto)} />
        </div>
        </div>
    </div>
    )
}

export default ChatScreen
=======
import React, { useState } from "react";
import { getContactById, getContacts } from "../../Services/ContactServices";
import {useParams} from "react-router-dom";
import MessagesList from "../../Components/MessagesList/MessagesList";
import NewMessage from "../../Components/NewMessage/NewMessage";
const ChatScreen=()=>{

    const {id}=useParams();
    const contactSelected=getContactById(Number(id));
    const [messages, setMessages]=useState(contactSelected.messages || []);

    const deleteMessage=(id)=>{
        const updateMessages=messages.filter(message=> message.id !== id);
        setMessages(updateMessages);
    }

    const sendMessage=(message)=>{
        const newmessage={
            emisor: 'YO',
            hora: new Date().toLocaleTimeString(),
            id: messages.length + 1,
            texto: message,
            status: 'enviado'
        }
        const updateMessages=[...messages]

        updateMessages.push(newmessage);
        setMessages(updateMessages);
    }

    const deleteAllMessages=()=>{
        setMessages([]);
    }

    return(
        <div>
            <div className="chat-header">
                <img src={contactSelected.avatar} alt={contactSelected.avatar} className="avatar" />
                <h2>{contactSelected.name}</h2>
                <span>{contactSelected.connectionStatus}</span>
            </div>
            <div className="chat-messages">
                <MessagesList messages={messages} deleteMessageById={deleteMessage}/>
            </div>
            <div>
                <NewMessage sendMessage={sendMessage}/>
            </div>
        </div>
    )
}

export default ChatScreen;
>>>>>>> 461ea182b6d90e6ca39d71059a26a664e5158541
