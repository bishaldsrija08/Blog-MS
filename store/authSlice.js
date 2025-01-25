import { createSlice } from '@reduxjs/toolkit'
import STATUSES from '../src/globals/status/statuses'
import API from '../src/http'

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

//Register Thunk

export function register(data) {
    return async function registerThunk(dispatch) {
        dispatch(setStatus(STATUSES.LOADING))
        dispatch(setUser(data))
        try {
            const resopnse = await API.post('register', data)

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

//Login thunk
export function login(data) {
    return async function loginThunk(dispatch) {
        dispatch(setStatus(STATUSES.LOADING))
        dispatch(setUser(data))
        try {
            const resopnse = await API.post('login', data)
            if (resopnse.status === 200 && resopnse.data.token) {
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