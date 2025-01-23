import {createBrowserRouter} from "react-router";
import MainLayout from "../layouts/MainLayout.tsx";
import {UserPage} from "../pages/UsersPage.tsx";

export const routers = createBrowserRouter([{
    path: '/',
    element: <MainLayout/>,
    children: [{path: '/users', element: <UserPage/>}]
}])