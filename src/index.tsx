import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogData = [
    {name: "First User", id: 1},
    {name: "Second User", id: 2},
    {name: "Third User", id: 3},
    {name: "Fourth User", id: 4}
]

let messageData = [
    {message: "First Message", id: 1},
    {message: "Second Message", id: 2},
    {message: "Third Message", id: 3}
]

let postsData = [
    {message: "First Post", likes: 1},
    {message: "Second Post", likes: 3},
    {message: "Third Post", likes: 14}
]


ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogData} messages={messageData} posts={postsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

