import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';
import {Routes} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {_state} from "./redux/state";

type appProps = {
    state: _state,
    addPost(postContent: string): void,
    updatePost(newText: string): void,
    updateMessage(newText: string): void,
    addMessage(messageContent: string): void
}

const App = (props: appProps) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navigation/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/Profile" element={<Profile posts={props.state.postPage} addPost={props.addPost} updatePost={props.updatePost}/>}/>
                        <Route path="/Dialogs/*" element={<Dialogs dialogs={props.state.dialogPage} addMessage={props.addMessage} updateMessage={props.updateMessage}/>}/>
                        <Route path="/News" element={<News/>}/>
                        <Route path="/Music" element={<Music/>}/>
                        <Route path="/Settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
