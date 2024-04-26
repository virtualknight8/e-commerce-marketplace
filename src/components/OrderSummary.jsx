import { useContext } from "react"
import { CartContext } from "./CartContext"

export default function OrderSummary(){

    const {cart} = useContext(CartContext);
    

    return(
        <div className="flex justify-center items-center mt-28">
            <h1 className="text-5xl">Your Order has been placed</h1>

            
        </div>
    )
}