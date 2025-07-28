import React from "react";
import { VscSend } from "react-icons/vsc";

const NewMessage = ({ sendMessage }) => {
    const handleSubmit=(event)=>{
        event.preventDefault()
        let messageNew = event.target.message.value;
        sendMessage(messageNew);
        event.target.message.value = ''
    }
    

    return(
        <form onSubmit={handleSubmit} className="new-message-content">
            <div className="input-wrapper">
                <label htmlFor="message">Escribe un mensaje:</label>
                <input className="message-input" type="text" placeholder='Escribe un mensaje...' id='message' name='message' required />
            </div>
            <button type='submit' className="message-send"><VscSend /></button>
        </form>
    )
}

export default NewMessage;