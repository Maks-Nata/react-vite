import {createBrowserRouter} from "react-router";
import { Mainlayout } from "../layouts/MainLayout";



export const routes=createBrowserRouter([
    {
        path:'/',element :<Mainlayout/>
    }
])