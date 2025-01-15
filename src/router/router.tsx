import {createBrowserRouter} from "react-router";
import { Mainlayout } from "../layouts/MainLayout";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";



export const routes=createBrowserRouter([
    {
        path:'/',element :<Mainlayout/>,children:[
            {path:'users',element:<UsersPage/>},
            {path:'posts',element:<PostsPage/>}
        ]
    }
])