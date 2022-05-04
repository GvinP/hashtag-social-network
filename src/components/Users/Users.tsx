import React from "react";
import avatar from "../../images/User-avatar.png";
import {usersPage} from "../../redux/usersReducer";
import {Loader} from "../common/loader/Loader";
import {NavLink} from "react-router-dom";
import {follow, unfollow} from "../../api/api";


type UsersPropsType = {
    usersPage: usersPage
    follow: (userId: number) => void
    onClickPage: (page: number) => void
    setFollowingProgress: (follow: boolean, id: number) => void
}

export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.usersPage.totalCount / props.usersPage.pageSize)
    let pages = []

    for (let i = 1; i < 10; i++) {
        pages.push(i)
    }
    pages.push(pagesCount - 2)
    pages.push(pagesCount - 1)
    pages.push(pagesCount)
    return (
        <div>
            {props.usersPage.isLoading ? <Loader/> : null}
            {pages.map(el => <span onClick={() => {
                props.onClickPage(el)
            }} style={el === props.usersPage.currentPage ? {
                fontWeight: 'bold',
                marginRight: '10px'
            } : {cursor: 'pointer', marginRight: '10px'}}>{el}</span>)}
            {
                props.usersPage.users.map((u) => {
                    return <div key={u.id + u.name}>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small ? u.photos.small : avatar}
                                 style={{width: '60px', height: '60px'}} alt={'avatar'}/>
                        </NavLink>

                        <div>{u.name}</div>
                        <button
                            disabled={props.usersPage.followingProgress.some(el => el === u.id)}
                            onClick={() => {
                                props.setFollowingProgress(true, u.id)
                                u.followed ?
                                    unfollow(u.id).then(data => {
                                        if (data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                        props.setFollowingProgress(false, u.id)
                                    })
                                    : follow(u.id).then(data => {
                                        if (data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                        props.setFollowingProgress(false, u.id)
                                    })

                            }}>{u.followed ? 'unfollow' : 'follow'}</button>
                        <div>{u.status}</div>
                    </div>
                })
            }
        </div>
    )
}