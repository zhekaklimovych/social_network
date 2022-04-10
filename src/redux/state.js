let rerenderEntireTree = ()=> {}

let state = {
    dialogsPage: {
        dialogs: [
            { name: 'Anna Sthesia', id: 1 },
            { name: 'Paul Molive', id: 2 },
            { name: 'Anna Mull', id: 3 },
            { name: 'Paige Turner', id: 4 },
            { name: 'Anna Sthesia', id: 5 },
            { name: 'Paul Molive', id: 6 },
            { name: 'Anna Mull', id: 7 },
            { name: 'Paige Turner', id: 8 }
        ],
        messages: [
            { message: 'hello' },
            { message: 'how are u?' },
            { message: 'Yo'},
            { message: 'HeHe' },
            { message: 'hello' },
            { message: 'how are u?' },
            { message: 'Yo'},
            { message: 'HeHe' }
        ],
        newMessageText: ''
    },
    profilePage: {
        posts: [
            { message: 'Hello, my first post!'},
            { message: 'And my too!'}
        ],
        newPostText: ''
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
window.state = state;
export const addPostToState = ()=> {

    let newPost = {
        message: state.profilePage.newPostText
    }
    if(newPost.message !== '') {
        state.profilePage.posts.push(newPost);
        state.profilePage.newPostText = '';
        rerenderEntireTree(state);
    };
}

export const updateNewTextPost = (newText)=> {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const addMessageToState = ()=> {

    let newMessage = {
        message: state.dialogsPage.newMessageText
    }
    if(newMessage.message !== '') {
        state.dialogsPage.messages.push(newMessage);
        state.dialogsPage.newMessageText = '';
        rerenderEntireTree(state);
    };
}

export const updateNewMessageText = (newText)=> {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer=> {
    rerenderEntireTree = observer;
})

export default state;