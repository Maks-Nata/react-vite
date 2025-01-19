import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {ICart} from "../models/ICart.tsx";
import {ICartResponseModel} from "../models/ICartResponseModel.tsx";
import {UserCart} from "../services/api.sevice.tsx";


const CartsComponent = () => {
    const {id}=useParams()
    const[carts,setCarts]=useState<ICart[]>([])
    useEffect(() => {
if (id){ UserCart.getofcartsUser(id)
    .then(({carts}:ICartResponseModel)=>{
        setCarts(carts)
    });}

    },[id]);

    return (
        <div>
            {
                carts.map((cart:ICart)=>(<div key={id}>{cart.total}</div>))
            }
        </div>
    );
};

export default CartsComponent;