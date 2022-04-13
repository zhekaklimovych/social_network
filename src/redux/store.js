const ADD_POST = 'ADD_POST';
const UPDATE_NEW_TEXT_POST = 'UPDATE_NEW_TEXT_POST';
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_TEXT_MESSAGE = 'UPDATE_NEW_TEXT_MESSAGE';

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

    subscribe(observer){
        this._callSubscriber = observer;
    },

    dispatch(action) {

        if(action.type === ADD_POST) {

            let newPost = {
                message: this._state.profilePage.newPostText
            }
            if(newPost.message !== '') {
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this.getState());
            };

        } else if(action.type === UPDATE_NEW_TEXT_POST) {

            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this.getState());

        } else if(action.type === ADD_MESSAGE) {

            let newMessage = {
                message: this._state.dialogsPage.newMessageText
            }
            if(newMessage.message !== '') {
                this._state.dialogsPage.messages.push(newMessage);
                this._state.dialogsPage.newMessageText = '';
                this._callSubscriber(this.getState());
            };

        } else if(action.type === UPDATE_NEW_TEXT_MESSAGE) {

            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this.getState());
        }
    }
}

export const addPostActionCreator = ()=> ({ type: ADD_POST })
export const addMessageActionCreator = ()=> ({ type: ADD_MESSAGE })
export const updateNewTextPostActionCreator = text => ({ type: UPDATE_NEW_TEXT_POST, newText: text})
export const updateNewTextMessageActionCreator = text => ({ type: UPDATE_NEW_TEXT_MESSAGE, newMessage: text})

window.store = store;

export default store;