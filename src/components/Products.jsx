import Shoe from "./Shoe";
import { SHOE_DATA } from "./productsData";

export default function Products ({onShoeClick}){

 

    return(
        <div className="grid grid-rows-3 grid-cols-4 gap-3 pt-10">
            <Shoe  shoeData={SHOE_DATA[0]} onShoeClick={onShoeClick}></Shoe>
            <Shoe  shoeData={SHOE_DATA[2]} onShoeClick={onShoeClick}></Shoe>
            <Shoe  shoeData={SHOE_DATA[3]} onShoeClick={onShoeClick}></Shoe>           
            <Shoe  shoeData={SHOE_DATA[4]} onShoeClick={onShoeClick}></Shoe>
            <Shoe  shoeData={SHOE_DATA[5]} onShoeClick={onShoeClick}></Shoe>
            <Shoe  shoeData={SHOE_DATA[1]} onShoeClick={onShoeClick}></Shoe>
           
        </div>
    )
}