import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import React from "react";
import {myPostsPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


const MyPosts = (props: myPostsPropsType) => {
    let posts = props.posts.postsData.map((p, index) => <Post key={index} message={p.message}/>)
    const addNewPost = (values: any) => {
        props.newPost(values.newPostText)
    }

    return (
        <div className={s.content}>
            <MyPostFormRedux onSubmit={addNewPost}/>
            {posts}
        </div>
    );
}


export const MyPostForm: React.FC<InjectedFormProps> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={'textarea'} name={'newPostText'} placeholder={'Enter your post'}/>
        <button>Add post</button>
    </form>
}

const MyPostFormRedux = reduxForm({
    form: 'newPostText'
})(MyPostForm)


export default MyPosts;