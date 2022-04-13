import React from "react";
import {usersPropsType} from "./UsersContainer";


const Users = (props: usersPropsType) => {
    const users = props.usersPage.users.map((u) => {
        return <div key={u.id}>
            <div>{u.fullName}</div>
            <button onClick={() => props.followed(u.id)}>{u.followed ? 'unfollow' : 'follow'}</button>
            <div>{u.status}</div>
            <div>{u.location.city}{u.location.country}</div>
        </div>
    })
    return (
        <div>
            {users}
            <button onClick={() => props.setUsers(props.usersPage.users)}>Set users</button>
        </div>
    );
}
export default Users;