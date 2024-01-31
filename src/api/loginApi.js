import http from '@/utils/http.js'

//登录接口 /api/ucenter/login/accountLogin
const accountLogin = (params) => {
    return http.postJson('/api/ucenter/login/accountLogin', params)
        .then(res => res.data)
}

//登出接口 /api/ucenter/login/logout
const logout = (params) => {
    return http.getJson('/api/ucenter/login/logout', params)
        .then(res => res.data)
}

export default {
    accountLogin,
    logout
}