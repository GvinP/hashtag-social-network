import {allActionsType} from "./state";

const FOLLOW = "FOLLOW"
const SET_USERS = "SET-USERS"

export type user = {
    followed: boolean
    id: number
    name: string
    status: string | null
    uniqueUrlName: string | null
    // location: {
    //     city: string
    //     country: string
    // }
}

export type usersPage = {
    users: Array<user>
}

const initialState: usersPage = {
    users: [
        // {
        //     id: 1,
        //     followed: true,
        //     fullName: 'First User',
        //     status: 'First User status',
        //     location: {city: 'City', country: 'Country'}
        // },
        // {
        //     id: 2,
        //     followed: false,
        //     fullName: 'Second User',
        //     status: 'Second User status',
        //     location: {city: 'City', country: 'Country'}
        // },
        // {
        //     id: 3,
        //     followed: true,
        //     fullName: 'Third User',
        //     status: 'Third User status',
        //     location: {city: 'City', country: 'Country'}
        // }
    ]
}

export type followActionType = {
    type: "FOLLOW"
    userId: number
}

export type setUsersActionType = {
    type: "SET-USERS"
    users: Array<user>
}

export const followAC = (userId: number) => ({type: FOLLOW, userId})
export const setUsersAC = (users: Array<user>) => ({type: SET_USERS, users})

const usersReducer = (state = initialState, action: allActionsType): usersPage => {
    switch (action.type) {
        case FOLLOW:
            return {users: state.users.map(el => el.id === action.userId ? {...el, followed: !el.followed} : el)}
        case SET_USERS:
            return {...state, users: [...action.users]}
        default:
            return state
    }
}


export default usersReducer;