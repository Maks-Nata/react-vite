import {useEffect, useState} from "react";
import {IBaceResponseModel} from "../models/IBaceResponseModel.ts";
import {IUser} from "../models/IUser.ts";
import {UserComponent} from "./UserComponent.tsx";
import {getUsers} from "../services/users.api.services.ts";


const UsersComponent = () => {
    const [users,setUsers]=useState<IUser[]>([])
    useEffect(()=>{getUsers<IBaceResponseModel & {users:IUser[]}>().then(({users} )=> setUsers(users))},[])
    return (
        <div>
            {
                users.map((user:IUser)=><UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersComponent;