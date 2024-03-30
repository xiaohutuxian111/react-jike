// 路由配置

import * as React from "react";
import { createBrowserRouter } from "react-router-dom";

import Layout from "../pages/Layout";
import Login from "../pages/Login"




// 配置路由

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Layout></Layout>
        ),
    },
    {
        path: "/login",
        element: <Login></Login>
    },
])

export default router;