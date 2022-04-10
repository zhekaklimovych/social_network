import state, { subscribe } from './redux/state';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router} from 'react-router-dom';
import { addPostToState, updateNewTextPost, addMessageToState, updateNewMessageText } from './redux/state';

import './index.css';
import App from './App';

export let rerenderEntireTree = (state)=> {
    ReactDOM.render(
        <React.StrictMode>
            <Router>
                <App 
                    state={state} 
                    
                    addPostToState={addPostToState} 
                    updateNewTextPost={updateNewTextPost}

                    addMessageToState={addMessageToState} 
                    updateNewMessageText={updateNewMessageText}
                />
            </Router>
        </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(state);
subscribe(rerenderEntireTree);
reportWebVitals();
