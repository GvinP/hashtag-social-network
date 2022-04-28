import {ChangeEvent} from "react";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {addPost, profileStoreType, updatePost} from "../../../redux/profileReducer";
import {AppStateType} from "../../../redux/store";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    posts: profileStoreType
}
type mapDispatchToPropsType = {
    newPost: () => void
    onPostChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

export type myPostsPropsType = mapStateToPropsType & mapDispatchToPropsType



let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        newPost: () => {
            dispatch(addPost())
        },
        onPostChange: (event: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(updatePost(event.target.value))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
