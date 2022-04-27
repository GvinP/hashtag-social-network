import {ChangeEvent} from "react";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {addPostActionCreator, profileInitialStoreType, updatePostActionCreator} from "../../../redux/profileReducer";
import {AppStateType} from "../../../redux/store";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    posts: profileInitialStoreType
}
type mapDispatchToPropsType = {
    newPost: () => void
    onPostChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

export type myPostsPropsType = mapStateToPropsType & mapDispatchToPropsType



let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.postPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
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
