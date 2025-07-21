import React from "react";

const Message=({id, texto,hora,emisor,estado,deleteMessageById})=>{
    return(
        <div>
            <p>{texto}</p>
            <span>{hora}</span>
            <button onClick={()=>{deleteMessageById(id)}}><i className="bi bi-trash3-fill"></i></button>
        </div>
    )
}

export default Message;