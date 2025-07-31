
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
            <button className="back-button" onClick={() => navigate("/contactos")}><IoIosArrowBack /></button>
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

