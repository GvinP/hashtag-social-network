import React from "react";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import ProfileContainer from "./ProfileContainer";

const ProfilePage = () => {
    return (
        <div>
            <ProfileContainer/>
            <MyPostsContainer/>
        </div>
    );
}

export default ProfilePage;

