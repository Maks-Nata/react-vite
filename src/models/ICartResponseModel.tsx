import {ICart} from "./ICart.tsx";


export interface ICartResponseModel {
    carts: ICart[];
    total: number;
    skip: number;
    limit: number;
}