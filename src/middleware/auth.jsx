// LOGOUT
export const logout = () => {
    localStorage.removeItem('auth')
    console.log('Logout Success')
}

// LOGIN STATUS
export const isLogin = () => {
    if (localStorage.getItem('auth')) return true;
    return false;
}

// LOGIN DATA
export const user = () => {
    const user = (localStorage.getItem('auth'));
    return user;
}