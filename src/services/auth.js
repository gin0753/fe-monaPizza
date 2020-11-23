const isAuthenticated = () => {
    if(sessionStorage.getItem('username')) return true
    return false
}

const login = () => {
    sessionStorage.setItem('username', 'username')
    sessionStorage.setItem('jwtToken', 'XXXXXX')
}

const logout = () => {
    sessionStorage.clear()
}

export {
    isAuthenticated,
    login,
    logout
}