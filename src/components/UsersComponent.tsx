import {useEffect, useState} from "react";
import {IUser} from "../modules/IUser.ts";
import {getUsers} from "../servisec/api.servisec.ts";
import {IUserResponseModel} from "../modules/IUserResponseModel.tsx";
import {UserComponent} from "./UserComponent.tsx";
import {useSearchParams} from "react-router";


const UsersComponent = () => {
    const [searchParams] = useSearchParams({page: '1'});
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
         const currentPage=searchParams.get('page')||'1'
        getUsers(currentPage).then(({users}: IUserResponseModel) => setUsers(users))
    }, [searchParams])
    return (
        <div>
            {
                users.map((user: IUser) => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersComponent;