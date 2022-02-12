import React from "react";
import profile from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return (
        <div className={profile.content}>
            <div>
                <img width={60} src='https://mobimg.b-cdn.net/v3/fetch/16/162162e62dd1166239149cae60f30252.jpeg' alt="avatar"/>
                <p>Cat</p>
            </div>
            <MyPosts/>
        </div>

    );
}

export default Profile;