import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let dialogs = [
	{ name: 'Alex', id: 1 },
  	{ name: 'Dave', id: 2 },
  	{ name: 'Nick', id: 3 },
  	{ name: 'John', id: 4 }
];

let messages = [
  	{ message: 'hello' },
  	{ message: 'how are u?' },
  	{ message: 'Yo'},
  	{ message: 'HeHe' }
];

let posts = [
  	{ message: 'Hello, my first post!'},
  	{ message: 'And my too!'}
];

ReactDOM.render(
  	<React.StrictMode>
    	<Router>
      		<App dialogs={dialogs} messages={messages} posts={posts} />
    	</Router>
  	</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
