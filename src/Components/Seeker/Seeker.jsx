import React,{ useState } from 'react';

const Seeker=({value, onChange})=>{
    return(
        <div className='seeker'>
            <h3>Chats</h3>
            <input
            type='text'
            value={value}
            onChange={e=>onChange(e.target.value)}
            placeholder='Buscar...'
            className="seeker-input"
            />
        </div>
    )
}

export default Seeker