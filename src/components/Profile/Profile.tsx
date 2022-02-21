import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import {postPage} from "../../redux/state";

type profileProps = {
    posts: postPage,
    dispatch(action: any): void
}

const Profile = (props: profileProps) => {
    return (
        <div className={s.content}>
            <div>
                <img width={60} src='https://mobimg.b-cdn.net/v3/fetch/16/162162e62dd1166239149cae60f30252.jpeg' alt="avatar"/>
                <p>My name</p>
            </div>
            <MyPosts posts={props.posts} dispatch={props.dispatch}/>
        </div>
    );
}

export default Profile;