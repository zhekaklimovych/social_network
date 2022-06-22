import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';

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
            newPostMessage: ''
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

    subscribe(observer){
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this.getState());
    }
}

// export default store;