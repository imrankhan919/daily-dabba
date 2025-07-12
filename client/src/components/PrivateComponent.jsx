import React from 'react'
import useAuthStatus from '../hooks/useAuthStatus'
import Loader from './Loader'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateComponent = () => {

    const { checkUser, isloggedIn } = useAuthStatus()

    if (checkUser) {
        return (
            <Loader />
        )
    }

    return isloggedIn ? <Outlet /> : <Navigate to={"/login"} />

}

export default PrivateComponent
