import { Link } from "react-router-dom";


export default function Shoe ({shoeData,onShoeClick}){
    const imgArray = [...shoeData[0].images];
    const shoeName = shoeData[0].shoeName;
    const price = shoeData[0].price;
    const imgPath = shoeData[0].imgPath;
    
    
   
    const clickHandler = () =>{
        onShoeClick({imgArray,shoeName,price,imgPath});
    }

    
    return (<>
     {shoeData.map((shoe)=>(
        <Link to='/productpage'>
        <div className=" bg-gray-800 rounded-lg text-white border-4 border-gray-800" onClick={clickHandler} >
            <img src={shoe.imgPath} alt="aj" className="rounded-md" />
            <div className="flex justify-between p-2">
                <div>
               <div> <p>{shoe.shoeName}</p>
                <p>★★★★★</p></div>
            </div>
            <div>
                <p>${shoe.price}</p>
            </div>
            </div>
        </div></Link>
      ))}</>
    
     
    )
}

