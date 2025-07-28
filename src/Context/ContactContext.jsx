import React, { createContext, useState, useContext } from 'react'

export const ContactContext = createContext()

const contactsInitialState = [
  {
    id: 1,
    name: 'Pepe',
    avatar: '/assets/avatar-hombre2.avif',
    connectionStatus: 'offline',
    messages: [
      { emisor: 'YO', hora: '23:10', id: 1, texto: 'Hola estoy hablando con pepe', estado: 'visto' },
      { emisor: 'OTRO', hora: '23:11', id: 2, texto: 'Si el que canta y baila', estado: 'visto' },
      { emisor: 'YO', hora: '23:12', id: 3, texto: 'Todo esta bien?', estado: 'visto' }
    ]
  },
  {
    id: 2,
    name: 'Juan',
    avatar: '/assets/avatar-hombre2.jpg',
    connectionStatus: 'online',
    messages: [
      { emisor: 'YO', hora: '23:10', id: 1, texto: 'Hola', estado: 'visto' },
      { emisor: 'OTRO', hora: '23:11', id: 2, texto: 'Hola que tal?', estado: 'visto' },
      { emisor: 'YO', hora: '23:12', id: 3, texto: 'Todo esta bien?', estado: 'visto' }
    ]
  },
  {
    id: 3,
    name: 'Maria',
    avatar: '/assets/avatar-mujer.avif',
    connectionStatus: 'online',
    messages: [
      { emisor: 'YO', hora: '23:10', id: 1, texto: 'Hola', estado: 'visto' },
      { emisor: 'OTRO', hora: '23:11', id: 2, texto: 'Hola que tal?', estado: 'visto' },
      { emisor: 'YO', hora: '23:12', id: 3, texto: 'Todo esta bien?', estado: 'visto' }
    ]
  }
]

const ContactContextProvider = ({ children }) => {

    const [contacts, setContacts] = useState(contactsInitialState)

    const getContactById = id => contacts.find(c => Number(c.id) === Number(id))

    const deleteMessage = (contactId, id) => {
        setContacts(prevContacts =>
        prevContacts.map(contact => {
            if (contact.id === contactId) {
                const updatedMessages = contact.messages.filter(m => m.id !== id)
            return {
            ...contact,
            messages: updatedMessages
        }
            } else {
            return contact
        }
    })
    )
}

    const sendMessage = (contactId, texto) => {
    setContacts(prevContacts =>
        prevContacts.map(contact => {
        if (contact.id === contactId) {
            const newMessage = {
            id: contact.messages.length + 1,
            emisor: 'YO',
            texto,
            hora: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            estado: 'enviado'
            }
            return {
            ...contact,
            messages: [...contact.messages, newMessage]
            }
        } else {
            return contact
        }
        })
    )
    }

    return (
    <ContactContext.Provider
        value={{ contacts, getContactById, sendMessage,deleteMessage}}
    >
        {children}
    </ContactContext.Provider>
    )
}

export const useContactContext = () => useContext(ContactContext)

export default ContactContextProvider