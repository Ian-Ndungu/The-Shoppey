import React from 'react'
import { Outlet, Navigate, useLocation } from 'react-router-dom'
import { auth } from '../firebase'

function RequireAuth() {
    const location = useLocation()
    console.log(auth)
    return (
        auth?.currentUser?.email ? <Outlet/> : <Navigate to="/login" state={{from:location}} replace/>
    )

}

export default RequireAuth