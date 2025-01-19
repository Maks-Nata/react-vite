import {IUser} from "../models/IUser.ts";


interface UsersComponentProps {
    item: IUser
}
export const UserComponent = ({item}:UsersComponentProps) => {
    return (
        <div>
<h2>{item.firstName}</h2>
        </div>
    );
};

export default UserComponent;