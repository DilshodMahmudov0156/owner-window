import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./App.css";
import {Provider} from "react-redux";
import {createStore} from "redux";
import MyReducer from "./configurations/my-reducer";
import {composeWithDevTools} from "@redux-devtools/extension";

const store = createStore(MyReducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
