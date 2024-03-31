import { createSlice } from '@reduxjs/toolkit'
import { request } from '@/utils'


// 和用户相关的状态管理
const userStore = createSlice({
    // 数据状态
    name: 'user',
    initialState: {
        token: ''
    },
    // 同步修改方法
    reducers: {
        setToken(state, action) {
            state.token = action.payload
        }
    }
})

// 解析actionCreater
const { setToken } = userStore.actions

// 获取reduce函数
const userReducer = userStore.reducer

// 异步方法封装
const fetchLogin = (loginForm) => {
    return async (dispatch) => {
        // 1. 发送异步请求
        const res = await request.post('/authorizations', loginForm)
        // 2.同步提交action进行token更新
        dispatch(setToken(res.data.token))
    }
}


export { fetchLogin, setToken }
export default userReducer