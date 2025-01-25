import { createSlice } from '@reduxjs/toolkit'
import STATUSES from '../src/globals/status/statuses'
import API from '../src/http'

const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        data: null,
        status: null
    },
    reducers: {
        setBlog(state, action) {
            state.status = action.payload
        },
        setUser(state, action) {
            state.data = action.payload
        }
    }
})

export const { setBlog, setUser } = blogSlice.actions

export default blogSlice.reducer

//Register Thunk

export function addBlog(data) {
    return async function addBlogThunk(dispatch) {
        dispatch(setBlog(STATUSES.LOADING))
        try {
            const resopnse = await API.post('blog', data, {
                headers: {
                    'Contnt-Type': 'multipart/form-data'
                }
            })

            if (resopnse.status === 201) {
                dispatch(setBlog(STATUSES.SUCCESS))
            } else {
                dispatch(setBlog(STATUSES.ERROR))
            }
        } catch (error) {
            dispatch(setBlog(STATUSES.ERROR))
        }
    }
}

//Login thunk
export function fetchBlog() {
    return async function fetchBlogThunk(dispatch) {
        dispatch(setBlog(STATUSES.LOADING))
        try {
            const resopnse = await API.get('blog')
            if (resopnse.status === 200 && resopnse.data.blog.length > 0) {
                dispatch(setBlog(resopnse.data.blog))
                dispatch(setBlog(STATUSES.SUCCESS))
            } else {
                dispatch(setBlog(STATUSES.ERROR))
            }
        } catch (error) {
            dispatch(setBlog(STATUSES.ERROR))
        }
    }
}

//delete Blog thunk
export function deleteBlog(id, token) {
    return async function deleteBlogThunk(dispatch) {
        dispatch(setBlog(STATUSES.LOADING))
        try {
            const resopnse = await API.delete(`blog/${id}`, {
                headers: {
                    token: token
                }
            })
            if (resopnse.status === 200) {
                dispatch(setBlog(STATUSES.SUCCESS))
            } else {
                dispatch(setBlog(STATUSES.ERROR))
            }
        } catch (error) {
            dispatch(setBlog(STATUSES.ERROR))
        }
    }
}