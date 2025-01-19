import {useEffect, useState} from "react";
import {IUser} from "../models/IUser.ts";
import {IUsersResponse} from "../models/IUsersResponse.tsx";
import {UserComponent} from "./UserComponent.tsx";
import {UserUrl} from "../services/api.sevice.tsx";


const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
UserUrl.getAllUsers()
            .then(({users}: IUsersResponse) => {
                setUsers(users)
            })
    }, []);


    return (
        <div>
            {
                users.map((user: IUser) => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersComponent;
