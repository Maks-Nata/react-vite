import {Outlet} from "react-router";
import {MenuComponent} from "../components/menu/MenuComponent.tsx";

export const Mainlayout= ()=> {
    return  <>
        <MenuComponent/>
        <Outlet/>
    </>
    ;
}