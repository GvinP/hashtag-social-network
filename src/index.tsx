import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {addMessage, addPost, state, updateMessage, updatePost} from "./redux/state";
import {renderTree} from './redux/render';

renderTree(state, addPost, addMessage, updatePost, updateMessage);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

