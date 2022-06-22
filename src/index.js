import store from './redux/redux-store';
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
                    dispatch={store.dispatch.bind(store)} 
                    store={store}
                />
            </Router>
        </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState());
store.subscribe(()=> {
    let state = store.getState();
    rerenderEntireTree(state);
});
reportWebVitals();
