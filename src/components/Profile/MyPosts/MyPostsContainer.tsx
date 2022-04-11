import React, {ChangeEvent} from "react";
import {actionType, addPostActionCreator, stateType, updatePostActionCreator} from "../../../redux/state";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";


let mapStateToProps = (state: stateType) => {
    return {
        posts: state.postPage
    }
}
let mapDispatchToProps = (dispatch: (action: actionType) => void) => {
    return {
        newPost: () => {
            dispatch(addPostActionCreator())
        },
        onPostChange: (event: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(updatePostActionCreator(event.target.value))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
