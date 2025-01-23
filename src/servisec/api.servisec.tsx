import {IUserResponseModel} from "../modules/IUserResponseModel.tsx";

const baceUrl = 'https://dummyjson.com'
export const UserUrl = {
    getAllUsers: async (): Promise<IUserResponseModel> => {
        return await fetch(baceUrl + '/users')
            .then(value => value.json())
    }
}