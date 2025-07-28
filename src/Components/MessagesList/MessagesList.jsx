import React from "react";
import Message from "../../Message/Message";

const MessagesList = ({ messages }) => (
    <div className="messages-list">
      {messages.map(message => (

      <Message
        key={message.id}
        id={message.id}
        texto={message.texto}
        hora={message.hora}
        emisor={message.emisor}
        estado={message.estado}
      />
    ))}
    </div>

)

export default MessagesList;