import {useEffect, useState} from "react";
import {IUser} from "../modules/IUser.ts";
import {getUsers} from "../servisec/api.servisec.tsx";
import {IUserResponseModel} from "../modules/IUserResponseModel.tsx";


const UsersComponent = () => {
    const [users,setUsers]=useState<IUser[]>([])
    useEffect(()=>{getUsers<IUserResponseModel >()},[])
    return (
        <div>

        </div>
    );
};

export default UsersComponent;