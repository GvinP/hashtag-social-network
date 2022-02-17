import React from 'react';
import ReactDOM from 'react-dom';
import './../index.css';
import App from './../App';
import reportWebVitals from './../reportWebVitals';
import {state, updateMessage} from "./state";


export let renderTree = (state: state, addPost: any, addMessage: any, updatePost: any, updateMessage: any) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} addMessage={addMessage} updatePost={updatePost} updateMessage={updateMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

