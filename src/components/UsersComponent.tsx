import {useEffect, useState} from "react";
import {IUser} from "../modules/IUser.ts";
import {getUsers} from "../servisec/api.servisec.tsx";
import {IUserResponseModel} from "../modules/IUserResponseModel.tsx";


const UsersComponent = () => {
    const [users,setUsers]=useState<IUser[]>([])
    useEffect(()=>{getUsers<IUserResponseModel & {users:IUser[]}>().then(({users}:IUserResponseModel )=> setUsers(users))},[])
    return (
        <div>
            {
                users.map((user:IUser)=><div key={user.id}>{user.username}</div>)
            }
        </div>
    );
};

export default UsersComponent;