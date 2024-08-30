import { Component } from "react"
import {AdminLayout} from "../layouts"
import {LoginAdmin} from "../pages/Admin"



const routesAdmin = [

    {
        path: "/admin",
        layout: AdminLayout,
        Component: LoginAdmin,
    }
]

export default routesAdmin
