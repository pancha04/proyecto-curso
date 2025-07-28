import React from "react";
import { useParams } from 'react-router-dom'
import { useContactContext } from '../Context/ContactContext'
import { BsCheck2All } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

const Message=({id, texto,hora,emisor,estado})=>{
    const { deleteMessage } = useContactContext()
    const { id: idRoute } = useParams()
    const contactId = Number(idRoute)

    const handleDelete = () => {
    deleteMessage(contactId, id)
    }
    return(
        <div className={`message-position ${emisor==="YO" ? "right" : "left"}`}>
            <div className="message-text">
                <p>{texto}</p>
            </div>
            <div className="message-info">
                <span>{hora}</span>
                <span className="message-check"><BsCheck2All /></span>
                <button onClick={handleDelete} className="message-delete"><MdDelete /></button>
            </div>
        </div>
    )
}

export default Message;