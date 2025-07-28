import React from "react";
<<<<<<< HEAD
import { VscSend } from "react-icons/vsc";
=======
>>>>>>> 461ea182b6d90e6ca39d71059a26a664e5158541

const NewMessage = ({ sendMessage }) => {
    const handleSubmit=(event)=>{
        event.preventDefault()
        let messageNew = event.target.message.value;
        sendMessage(messageNew);
        event.target.message.value = ''
    }
<<<<<<< HEAD
    

    return(
        <form onSubmit={handleSubmit} className="new-message-content">
            <div className="input-wrapper">
                <label htmlFor="message">Escribe un mensaje:</label>
                <input className="message-input" type="text" placeholder='Escribe un mensaje...' id='message' name='message' required />
            </div>
            <button type='submit' className="message-send"><VscSend /></button>
=======

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="message">Escribe un mensaje:</label>
                <input type="text" placeholder='Escribe un mensaje...' id='message' name='message' required />
            </div>
            <button type='submit'>Enviar mensaje</button>
>>>>>>> 461ea182b6d90e6ca39d71059a26a664e5158541
        </form>
    )
}

export default NewMessage;