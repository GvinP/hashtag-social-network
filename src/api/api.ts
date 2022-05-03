import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'e2b2d8ed-9e2a-4c10-8057-a81181e19d3c'
    }
})

export const getUsers = (currentPage: number, pageSize: number) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
}

export const authMe = () => {
    return instance.get(`auth/me`).then(response => response.data)
}

export const getUserProfile = (userId: number) => {
    return instance.get(`profile/` + userId)
        .then(response => response.data)
}

export const follow = (id: number) => {
    return instance.post(`follow/${id}`)
        .then(response => response.data)
}

export const unfollow = (id: number) => {
    return instance.delete(`follow/${id}`)
        .then(response => response.data)
}