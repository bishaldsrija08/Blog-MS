import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import STATUSES from '../src/globals/status/statuses'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: null,
        status: null
    },
    reducers: {
        setStatus(state, action) {
            state.status = action.payload
        },
        setUser(state, action) {
            state.user = action.payload
        },
        setToken(state, action) {
            state.token = action.payload
        }
    }
})

export const { setStatus, setUser, setToken } = authSlice.actions

export default authSlice.reducer

export function register(data) {
    return async function registerThunk(dispatch) {
        dispatch(setStatus(STATUSES.LOADING))
        dispatch(setUser(data))
try {
    const resopnse = await axios.post('https://react30.onrender.com/api/user/register', data)


    if (resopnse.status === 201) {
        dispatch(setStatus(STATUSES.SUCCESS))
    } else {
        dispatch(setStatus(STATUSES.ERROR))
    }
} catch (error) {
    dispatch(setStatus(STATUSES.ERROR))
}
    }
}

export function login(data) {
    return async function loginThunk(dispatch) {
        dispatch(setStatus(STATUSES.LOADING))
        dispatch(setUser(data))
try {
    const resopnse = await axios.post('https://react30.onrender.com/api/user/login', data)
    if (resopnse.status === 201 && resopnse.data.token) {
        dispatch(setStatus(STATUSES.SUCCESS))
        dispatch(setToken(resopnse.data.token))
    } else {
        dispatch(setStatus(STATUSES.ERROR))
    }
} catch (error) {
    dispatch(setStatus(STATUSES.ERROR))
}
    }
}