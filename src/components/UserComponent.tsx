import {IUser} from "../modules/IUser.ts";

export const UserComponent=(props: { user: IUser })=> {

    return <div>{props.user.id}:{props.user.username}</div>;
}