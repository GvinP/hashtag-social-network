import {allActionsType} from "./state";

const FOLLOW = "FOLLOW"
const SET_USERS = "SET-USERS"
const SET_TOTAL_COUNT = "SET-TOTAL-COUNT"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_LOADER = "SET-LOADER"


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
}

const initialState: usersPage = {
    users: [],
    totalCount: 0,
    pageSize: 5,
    currentPage: 2,
    isLoading: false
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

export const followAC = (userId: number) => ({type: FOLLOW, userId})
export const setUsersAC = (users: Array<user>) => ({type: SET_USERS, users})
export const setTotalCountAC = (totalCount: number) => ({type: SET_TOTAL_COUNT, totalCount})
export const setCurrentPageAC = (page: number) => ({type: SET_CURRENT_PAGE, page})
export const setLoaderAC = (isLoading: boolean) => ({type: SET_LOADER, isLoading})

const usersReducer = (state = initialState, action: allActionsType): usersPage => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: !el.followed} : el)}
        case SET_USERS:
            return {...state, users: [...action.users]}
        case SET_TOTAL_COUNT:
            return {...state, totalCount: action.totalCount}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.page}
        case SET_LOADER:
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}


export default usersReducer;