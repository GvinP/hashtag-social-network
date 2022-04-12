
export type user = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string
        country: string
    }
}
export type usersActionType = {
    type: string
    userId?: number
    users?: Array<user>
}
export type usersPage = {
    users: Array<user>
}

const FOLLOW = "FOLLOW"
const SET_USERS = "SET-USERS"

const initialState: usersPage = {
    users: [
        {id: 1, followed: true, fullName: 'First User', status: 'First User status', location: {city: 'City', country: 'Country'}},
        {id: 2, followed: false, fullName: 'Second User', status: 'Second User status', location: {city: 'City', country: 'Country'}},
        {id: 3, followed: true, fullName: 'Third User', status: 'Third User status', location: {city: 'City', country: 'Country'}}
    ]
}

export const followAC = (userId: number) => ({type: FOLLOW, userId})
export const setUsersAC = (users: Array<user>) => ({type: SET_USERS, users})

const usersReducer = (state = initialState, action: usersActionType) => {
    switch (action.type) {
        case FOLLOW:
            return {users: state.users.map(el=> el.id === action.userId? {...el, followed: !el.followed}:el)}
        case SET_USERS:
            if (action.users) {
                return {...state, users: [...state.users, ...action.users]}
            }
    }
    return state;
}

export default usersReducer;