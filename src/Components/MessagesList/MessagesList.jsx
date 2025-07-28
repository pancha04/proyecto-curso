import React from "react";
import Message from "../../Message/Message";

<<<<<<< HEAD

const MessagesList = ({ messages }) => (
    <div className="messages-list">
      {messages.map(message => (
=======
const MessagesList = ({ messages, deleteMessageById }) => (
  <>
    {messages.map(message => (
>>>>>>> 461ea182b6d90e6ca39d71059a26a664e5158541
      <Message
        key={message.id}
        id={message.id}
        texto={message.texto}
        hora={message.hora}
        emisor={message.emisor}
        estado={message.estado}
<<<<<<< HEAD
      />
    ))}
    </div>
=======
        deleteMessageById={deleteMessageById}
      />
    ))}
  </>
>>>>>>> 461ea182b6d90e6ca39d71059a26a664e5158541
)

export default MessagesList;