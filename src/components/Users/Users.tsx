import React from "react";
import {user, usersPage} from "../../redux/usersReducer";

type usersPropsType = {
    users: Array<user>,
    followed: (userId: number) => void
    setUsers: (users: Array<user>) => void
}
const Users = (props: usersPropsType) => {
    const users = props.users.map((u) => {
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
            <button onClick={() => props.setUsers(props.users)}>Set users</button>
        </div>
    );
}
export default Users;