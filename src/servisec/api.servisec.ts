import {IUserResponseModel} from "../modules/IUserResponseModel.tsx";

const  baceURL='https://dummyjson.com'

export const getUsers = async (page:string): Promise<IUserResponseModel> => {
    const limit:number=30
    const skip:number=limit*(+page)-limit
    return    await fetch(baceURL+'/users' +'?skip='+ skip).then(value => value.json())


}