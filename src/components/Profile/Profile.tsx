import React from "react";
import s from "./Profile.module.css"
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img width={60} src='https://mobimg.b-cdn.net/v3/fetch/16/162162e62dd1166239149cae60f30252.jpeg'
                     alt="avatar"/>
                <p>My name</p>
            </div>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;