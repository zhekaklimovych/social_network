let store = {
    _state: {
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
    },

    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },

    addPostToState () {

        let newPost = {
            message: this._state.profilePage.newPostText
        }

        if(newPost.message !== '') {
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this.getState());
        };
    },

    updateNewTextPost(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this.getState());
    },

    addMessageToState() {

        let newMessage = {
            message: this._state.dialogsPage.newMessageText
        }
        if(newMessage.message !== '') {
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this.getState());
        };
    },
    
    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this.getState());
    },
    
    subscribe(observer){
        this._callSubscriber = observer;
    }
}

window.store = store;

export default store;