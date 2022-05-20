import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {addPost, profileStoreType} from "../../../redux/profileReducer";
import {AppStateType} from "../../../redux/store";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    posts: profileStoreType
}
type mapDispatchToPropsType = {
    newPost: (newPostText: string) => void
}

export type myPostsPropsType = mapStateToPropsType & mapDispatchToPropsType


let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        newPost: (newPostText: string) => {
            dispatch(addPost(newPostText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
