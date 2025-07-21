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