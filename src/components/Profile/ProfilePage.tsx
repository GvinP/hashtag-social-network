import React from "react";
import s from "./Profile.module.css"
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import ProfileContainer from "./ProfileContainer";
import {useParams} from "react-router-dom";

const ProfilePage = () => {
    return (
        <div className={s.content}>
            <ProfileContainer/>
            <MyPostsContainer/>
        </div>
    );
}

export default ProfilePage;

