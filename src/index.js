import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import createStore from "./store";

const store = createStore();

store.dispatch({
  type: 'API_URL',
  data: 'http://localhost:8080'
});

ReactDOM.render(
    <ReduxProvider store={store}>
        <Router>
            <App />
        </Router>
    </ReduxProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
