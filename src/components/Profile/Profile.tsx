import React from "react";
import profile from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Post/Post";

type profileProps = {
    posts: any
}

const Profile = (props: profileProps) => {
    return (
        <div className={profile.content}>
            <div>
                <img width={60} src='https://mobimg.b-cdn.net/v3/fetch/16/162162e62dd1166239149cae60f30252.jpeg' alt="avatar"/>
                <p>Cat</p>
            </div>
            <MyPosts posts={props.posts}/>
        </div>
    );
}

export default Profile;