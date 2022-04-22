import axios from "axios";
import React from "react";
import {mapDispatchToPropsType, mapStateToPropsType, usersPropsType} from "./UsersContainer";

// interface usersCPropsType extends mapStateToPropsType, mapDispatchToPropsType {}
// interface usersCStatePropsType extends mapStateToPropsType {}

class UsersC extends React.Component<usersPropsType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return this.props.usersPage.users.map((u) => {
            return <div key={u.id}>
                <div>{u.name}</div>
                <button onClick={() => this.props.followed(u.id)}>{u.followed ? 'unfollow' : 'follow'}</button>
                <div>{u.status}</div>
            </div>
        })
    }
}


export default UsersC;