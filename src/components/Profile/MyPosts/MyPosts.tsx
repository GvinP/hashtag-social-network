import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import React, {ChangeEvent} from "react";
import {myPostsPropsType} from "./MyPostsContainer";
import {profileStoreType} from "../../../redux/profileReducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


const MyPosts = (props: myPostsPropsType) => {
    let posts = props.posts.postsData.map((p, index) => <Post key={index} message={p.message}/>)
    return (
        <div className={s.content}>
            <MyPostFormRedux/>
            {posts}
        </div>
    );
}


export const MyPostForm: React.FC<InjectedFormProps> = () => {
    return <form>
        <Field component={'textarea'} name={'newPostText'} placeholder={'Enter your post'}/>
        <button>Add post</button>
    </form>
}

const MyPostFormRedux = reduxForm({
    form: 'newPostText'
})(MyPostForm)


export default MyPosts;