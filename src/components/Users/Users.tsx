import React from "react";
import avatar from "../../images/User-avatar.png";
import {usersPage} from "../../redux/usersReducer";
import {Loader} from "../common/loader/Loader";


type UsersPropsType = {
    usersPage: usersPage
    followed: (userId: number) => void
    onClickPage: (page: number) => void
}

export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.usersPage.totalCount / props.usersPage.pageSize)
    let pages = []

    for (let i = 1; i < 10; i++) {
        pages.push(i)
    }
    return (
        <div>
            {props.usersPage.isLoading ? <Loader/> : null}
            {pages.map(el => <span onClick={() => {
                props.onClickPage(el)
            }} style={el === props.usersPage.currentPage ? {fontWeight: 'bold', marginRight: '10px'} : {cursor: 'pointer', marginRight: '10px'}}>{el}</span>)}
            {
                props.usersPage.users.map((u) => {
                    return <div key={u.id}>
                        <img src={u.photos.small ? u.photos.small : avatar}
                             style={{width: '60px', height: '60px'}} alt={'avatar'}/>
                        <div>{u.name}</div>
                        <button
                            onClick={() => props.followed(u.id)}>{u.followed ? 'unfollow' : 'follow'}</button>
                        <div>{u.status}</div>
                    </div>
                })
            }
        </div>
    )
}