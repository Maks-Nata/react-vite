import {IUsersResponse} from "../models/IUsersResponse.tsx";
import {ICartResponseModel} from "../models/ICartResponseModel.tsx";

const baceUrl = 'https://dummyjson.com'
export const UserUrl = {
    getAllUsers: async (): Promise<IUsersResponse> => {
        return await fetch(baceUrl + '/users')
            .then(value => value.json())
    }
}
export const UserCart = {
    getofcartsUser: async(userId: string): Promise<ICartResponseModel> => {
        return await fetch(baceUrl +'/carts'+'/user/' + userId)
            .then(res => res.json())
    }
}