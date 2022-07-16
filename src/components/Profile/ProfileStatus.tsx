import React, {ChangeEvent, useState} from 'react';
import {useDispatch} from "react-redux";
import {updateUserStatus} from "../../redux/profileReducer";
import s from "./Profile.module.css"

type ProfileStatusPropsType = {
    status: string
}

const ProfileStatus = (props: ProfileStatusPropsType) => {
    let [status, setStatus] = useState('')
    let [editMode, setEditMode] = useState(false)
    const dispatch = useDispatch()

    const changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    const updateStatus = () => {
        setEditMode(false)
        dispatch(updateUserStatus(status))
    }

    return (
        <div className={s.profileStatus}>
            {editMode
                    ? <input value={status} onBlur={updateStatus} onChange={changeStatus}/>
                    : <span
                        onDoubleClick={() => setEditMode(true)}>
                    {props.status ? props.status : 'No status'}
            </span>
            }
        </div>
    );
};

export default ProfileStatus;