import React from 'react';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import ProfilePage from "./components/Profile/ProfilePage";
import {Navigate, Route, Routes} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import UsersContainer from "./components/Users/UsersContainer";
import {AppStateType} from "./redux/store";
import {connect, ConnectedProps} from "react-redux";
import {initializedApp} from "./redux/appReducer";
import {Loader} from "./components/common/loader/Loader";


class App extends React.Component<ConnectedType> {
    componentDidMount() {
        this.props.initializedApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Loader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navigation/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/" element={<Navigate to={'profile'}/>}/>
                        <Route path="/profile/*" element={<ProfilePage/>}/>
                        <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state: AppStateType) => {
    return {
        initialized: state.app.initialized,
    }
}
let connector = connect(mapStateToProps, {initializedApp})
type ConnectedType = ConnectedProps<typeof connector>
export default connector(App as any)
