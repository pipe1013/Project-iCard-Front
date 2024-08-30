import { Component } from "react"
import {ClientLayout} from "../layouts"
import {Home} from "../pages/Client"

const routesClient = [

    {
        path: "/",
        layout: ClientLayout,
        Component: Home,
    }
]

export default routesClient