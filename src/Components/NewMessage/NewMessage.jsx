import React from "react";

const NewMessage = ({ sendMessage }) => {
    const handleSubmit=(event)=>{
        event.preventDefault()
        let messageNew = event.target.message.value;
        sendMessage(messageNew);
        event.target.message.value = ''
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="message">Escribe un mensaje:</label>
                <input type="text" placeholder='Escribe un mensaje...' id='message' name='message' required />
            </div>
            <button type='submit'>Enviar mensaje</button>
        </form>
    )
}

export default NewMessage;