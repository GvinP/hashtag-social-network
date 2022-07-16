import React from "react";
import {ProfileType} from "../../redux/profileReducer";
import avatar from '../../images/User-avatar.png'
import ProfileStatus from "./ProfileStatus";
import s from "./Profile.module.css";

type UserProfilePropsType = {
    profile: ProfileType
    status: string
}


export const Profile = (props: UserProfilePropsType) => {

    return (
        <div className={s.profileContainer}>
            <div className={s.profileAvatar}>
                <img width={225} src={props.profile.photos?.large ? props.profile.photos.large : avatar}/>
                <ProfileStatus status={props.status}/>
                <button className={s.button}>Change profile pic</button>
                <button className={`${s.button} ${s.deleteButton}`}>Delete account</button>
            </div>
            <div className={s.userInfoContainer}>
                <div className={s.userInfo}>
                    <span>user name: {props.profile?.fullName}</span>
                    <span>contacts: </span>
                    <span>website: <span className={s.text}>{props.profile.contacts?.website || 'no information'}</span></span>
                    <span>instagram: <span className={s.text}>{props.profile.contacts?.instagram || 'no information'}</span></span>
                    <span>youtube: <span className={s.text}>{props.profile.contacts?.youtube || 'no information'}</span></span>
                    <span>github: <span className={s.text}>{props.profile.contacts?.github || 'no information'}</span></span>
                    <span>facebook: <span className={s.text}>{props.profile.contacts?.facebook || 'no information'}</span></span>
                </div>
                <button className={s.button}>Change user info</button>
            </div>


        </div>
    )
}