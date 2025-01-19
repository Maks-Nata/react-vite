import {useEffect, useState} from "react";
import {IUser} from "../models/IUser.ts";
import {IUsersResponse} from "../models/IUsersResponse.tsx";
export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(value => value.json())
            .then(({users}: IUsersResponse) => {
                setUsers(users)
            });
    }, [])
    return (
        <div>
            {
                users.map((user) => <UsersComponent key={item.id} item={user}/>)
            }
        </div>
    );
};

