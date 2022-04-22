import axios from "axios";
import React, {useEffect} from "react";
import {usersPropsType} from "./UsersContainer";

const Users = (props: usersPropsType) => {
    useEffect(()=>{
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{
            props.setUsers(response.data.items)
        })
    },[])

    const users = props.usersPage.users.map((u) => {
        return <div key={u.id}>
            <div>{u.name}</div>
            <button onClick={() => props.followed(u.id)}>{u.followed ? 'unfollow' : 'follow'}</button>
            <div>{u.status}</div>
        </div>
    })
    return (
        <div>
            {users}
            {/*<button onClick={onClickHandler}>Get users</button>*/}
        </div>
    );
}
export default Users;