import store from './redux/store';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router} from 'react-router-dom';

import './index.css';
import App from './App';

export let rerenderEntireTree = (state)=> {
    ReactDOM.render(
        <React.StrictMode>
            <Router>
                <App 
                    state={state} 
                    
                    addPostToState={store.addPostToState.bind(store)} 
                    updateNewTextPost={store.updateNewTextPost.bind(store)}

                    addMessageToState={store.addMessageToState.bind(store)} 
                    updateNewMessageText={store.updateNewMessageText.bind(store)}
                />
            </Router>
        </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
reportWebVitals();
