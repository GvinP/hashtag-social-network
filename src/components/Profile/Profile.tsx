import React from "react";
import {ProfileType} from "../../redux/profileReducer";
import avatar from '../../images/User-avatar.png'

type UserProfilePropsType = {
    profile: ProfileType
}


export const Profile = (props: UserProfilePropsType) => {
    return (
        <>
            <img width={'260px'} src={props.profile.photos?.large? props.profile.photos.large : avatar}/>
            <h1>{props.profile?.fullName}</h1>
            <p>{props.profile.aboutMe}</p>
        </>
    )
}