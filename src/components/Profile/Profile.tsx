import React from "react";
import {Loader} from "../common/loader/Loader";
import {ProfileType} from "../../redux/profileReducer";
import avatar from '../../images/User-avatar.png'

type UserProfilePropsType = {
    profile: ProfileType
}


export const Profile = (props: UserProfilePropsType) => {
    return (
        <>
            <p>{props.profile?.userId}</p>
            <img width={'60px'} src={props.profile.photos?.large? props.profile.photos.large : avatar}/>
            <h1>{props.profile?.fullName}</h1>
        </>
    )
}