const contacts = [
    {
        id: 1,
        name: 'Pepe',
        avatar: '/assets/avatar-hombre2.avif',
        connectionStatus: 'offline',
        messages: [
            {
                emisor: 'YO',
                hora: '23:10',
                id: 1,
                texto: 'Hola estoy hablando con pepe',
                estado: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:11',
                id: 2,
                texto: 'Si el que canta y baila',
                estado: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:12',
                id: 3,
                texto: 'Todo esta bien?',
                estado: 'visto'
            }
        ]
    },
    {
        id: 2,
        name: 'Juan',
        avatar: '/assets/avatar-hombre2.jpg',
        connectionStatus: 'online',
        messages: [
            {
                emisor: 'YO',
                hora: '23:10',
                id: 1,
                texto: 'Hola',
                estado: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:11',
                id: 2,
                texto: 'Hola que tal?',
                estado: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:12',
                id: 3,
                texto: 'Todo esta bien?',
                estado: 'visto'
            }
        ]
    },{
        id: 3,
        name: 'maria',
        avatar: '/assets/avatar-mujer.avif',
        connectionStatus: 'online',
        messages: [
            {
                emisor: 'YO',
                hora: '23:10',
                id: 1,
                texto: 'Hola',
                estado: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:11',
                id: 2,
                texto: 'Hola que tal?',
                estado: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:12',
                id: 3,
                texto: 'Todo esta bien?',
                estado: 'visto'
            }
        ]
    }
];

export const getLastMessage=(id)=>{
    const contact=getContactById(id)
    if(!contact|| !contact.messages || contact.messages.length === 0) return null;
    return contact.messages[contact.messages.length-1];
}
export const getContacts=()=>{
    return contacts
}

export const getContactById=(id)=>{
    return contacts.find(contacto=>Number(contacto.id)===Number(id))
}