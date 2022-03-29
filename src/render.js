import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { addPostToState } from './redux/state';
import './index.css';
import App from './App';

export let rerenderEntireTree = (state)=> {
    ReactDOM.render(
        <React.StrictMode>
          <Router>
                <App state={state} addPostToState={addPostToState}/>
          </Router>
        </React.StrictMode>,
    document.getElementById('root')
  );
}