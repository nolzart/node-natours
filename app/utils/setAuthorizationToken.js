import axios from 'axios'

const setAuthorizationToken = token =>
    token
        ? (axios.defaults.headers.common.Authorization = `Bearer ${token}`)
        : delete axios.defaults.headers.common.Authorization

export default setAuthorizationToken
