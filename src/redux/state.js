let state = {
    dialogsPage: {
        dialogs: [
            { name: 'Anna Sthesia', id: 1 },
            { name: 'Paul Molive', id: 2 },
            { name: 'Anna Mull', id: 3 },
            { name: 'Paige Turner', id: 4 }
        ],
        messages: [
            { message: 'hello' },
            { message: 'how are u?' },
            { message: 'Yo'},
            { message: 'HeHe' }
        ]
    },
    profilePage: {
        posts: [
            { message: 'Hello, my first post!'},
            { message: 'And my too!'}
        ]
    },
    sidebar: {
        users: [
            { userName: 'Anna Sthesia', status: 'admin', url: 'https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/02.jpg' },
            { userName: 'Paul Molive', status: 'Just now', url: 'https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/01.jpg' },
            { userName: 'Anna Mull', status: 'admin', url: 'https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/03.jpg' },
            { userName: 'Paige Turner', status: 'admin', url: 'https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/user/04.jpg' }
        ]
    }
}

export default state;