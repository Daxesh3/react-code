import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';
import * as serviceWorker from './serviceWorker';

const rootEl = document.getElementById('app-site');

// Create a reusable render method that we can call more than once
const render = (Component: React.FC) => {
    ReactDOM.render(<Component />, rootEl);
};

render(Root);

serviceWorker.unregister();
