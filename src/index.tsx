import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {store} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";

let renderTree = () => {
    let state: any = store.getState()
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} updatePost={store.updatePost.bind(store)} updateMessage={store.updateMessage.bind(store)} addMessage={store.addMessage.bind(store)} addPost={store.addPost.bind(store) }/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderTree();

store.subscriber(renderTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

