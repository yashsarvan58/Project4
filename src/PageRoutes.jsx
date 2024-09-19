import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Loginwrapper from './Login/Loginwrapper'

const PageRoutes = () => {
  

    const router = createBrowserRouter([

        {
            path: "/",
            element:<Loginwrapper/>
        }
    ]

)
  return (
    <RouterProvider router={router} />
  )
}

export default PageRoutes
