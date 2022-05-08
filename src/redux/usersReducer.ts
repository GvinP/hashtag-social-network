import {allActionsType} from "./state";
import {usersApi} from "../api/api";
import {Dispatch} from "redux";

const FOLLOW = "FOLLOW"
const SET_USERS = "SET-USERS"
const SET_TOTAL_COUNT = "SET-TOTAL-COUNT"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_LOADER = "SET-LOADER"
const SET_FOLLOWING_PROGRESS = "SET-FOLLOWING-PROGRESS"


export type user = {
    followed: boolean
    id: number
    name: string
    status: string | null
    uniqueUrlName: string | null
    photos: {
        small: string | null,
        large: string | null
    }
}
export type usersPage = {
    users: Array<user>
    totalCount: number
    pageSize: number
    currentPage: number
    isLoading: boolean
    followingProgress: Array<number>

}

const initialState: usersPage = {
    users: [],
    totalCount: 0,
    pageSize: 5,
    currentPage: 1,
    isLoading: false,
    followingProgress: [],
}

export type followActionType = {
    type: "FOLLOW"
    userId: number
}
export type setUsersActionType = {
    type: "SET-USERS"
    users: Array<user>
}
export type setTotalCountActionType = {
    type: "SET-TOTAL-COUNT"
    totalCount: number
}
export type setCurrentPageActionType = {
    type: "SET-CURRENT-PAGE"
    page: number
}
export type setLoaderActionType = {
    type: "SET-LOADER"
    isLoading: boolean
}
export type setFollowingProgressActionType = {
    type: "SET-FOLLOWING-PROGRESS"
    followingProgress: boolean
    id: number
}

export const follow = (userId: number) => ({type: FOLLOW, userId})
export const setUsers = (users: Array<user>) => ({type: SET_USERS, users})
export const setTotalCount = (totalCount: number) => ({type: SET_TOTAL_COUNT, totalCount})
export const setCurrentPage = (page: number) => ({type: SET_CURRENT_PAGE, page})
export const setLoader = (isLoading: boolean) => ({type: SET_LOADER, isLoading})
export const setFollowingProgress = (followingProgress: boolean, id: number) => ({
    type: SET_FOLLOWING_PROGRESS,
    followingProgress,
    id
})

export const getUsers = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(setLoader(true))
    usersApi.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(setLoader(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalCount(data.totalCount))
        })
}
export const followTC = (userId: number) => (dispatch: Dispatch)=> {
    usersApi.follow(userId)
        .then(data => {
        if (data.resultCode === 0) {
            dispatch(follow(userId))
        }
        dispatch(setFollowingProgress(false, userId))
    })
}
export const unfollowTC = (userId: number) => (dispatch: Dispatch)=> {
    usersApi.unfollow(userId)
        .then(data => {
        if (data.resultCode === 0) {
            dispatch(follow(userId))
        }
        dispatch(setFollowingProgress(false, userId))
    })
}

const usersReducer = (state = initialState, action: allActionsType): usersPage => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(el => el.id === action.userId ? {...el, followed: !el.followed} : el)
            }
        case SET_USERS:
            return {...state, users: [...action.users]}
        case SET_TOTAL_COUNT:
            return {...state, totalCount: action.totalCount}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.page}
        case SET_LOADER:
            return {...state, isLoading: action.isLoading}
        case SET_FOLLOWING_PROGRESS:
            return {
                ...state, followingProgress: action.followingProgress ? [...state.followingProgress, action.id]
                    : state.followingProgress.filter(el => el !== action.id)
            }
        default:
            return state
    }
}


export default usersReducer;