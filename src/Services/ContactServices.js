const contacts = [
    {
        id: 1,
        name: 'Pepe',
<<<<<<< HEAD
        avatar: '/assets/avatar-hombre2.avif',
=======
        avatar: 'https://nupciasmagazine.com/wp-content/uploads/2024/07/la-pantera-rosa-celebra-60-anos.jpg',
>>>>>>> 461ea182b6d90e6ca39d71059a26a664e5158541
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
<<<<<<< HEAD
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
=======
        avatar: 'https://nupciasmagazine.com/wp-content/uploads/2024/07/la-pantera-rosa-celebra-60-anos.jpg',
>>>>>>> 461ea182b6d90e6ca39d71059a26a664e5158541
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

<<<<<<< HEAD
export const getLastMessage=(id)=>{
    const contact=getContactById(id)
    if(!contact|| !contact.messages || contact.messages.length === 0) return null;
    return contact.messages[contact.messages.length-1];
}

=======
>>>>>>> 461ea182b6d90e6ca39d71059a26a664e5158541
export const getContacts=()=>{
    return contacts
}

export const getContactById=(id)=>{
    return contacts.find(contacto=>Number(contacto.id)===Number(id))
}