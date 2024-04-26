import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import { addUser } from '../userFireStore';


const Cart = () => {
  const { cart,updateCart } = useContext(CartContext);
  const {isUserSignedIn} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRemoveItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    updateCart(updatedCart);
  };
  
  const [itemQuantities, setItemQuantities] = useState(
    cart.map(() => 1)
  );

  const handleQuantityIncrement = (index) => {
    setItemQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] += 1;
      return newQuantities;
    });
  };
  
  const handleQuantityDecrement = (index) => {
    setItemQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      if (newQuantities[index] > 1) {
        newQuantities[index] -= 1;
      }
      return newQuantities;
    });
  };

  const totalPrice = cart.reduce(
    (total, item, index) => total + item.price * itemQuantities[index],
    0
  );

  const handleProceedToCheckout = async () => {
    if (isUserSignedIn) {
      try {
        await addUser({ shoeName: `${cart[0].shoeName}`, price: `${cart[0].price}`, imgPath: `${cart[0].imgPath}` });
  
        // Clear the cart after successful addition
        updateCart([]); // Update context with an empty cart array

  
        console.log('Cart item added to user successfully!');
        navigate('/OrderSummary');
      } catch (err) {
        console.error('Error adding cart item:', err);
      }
    } else {
      navigate('/SignInPage');
    }
  };
  
  const isCartEmpty = cart.length === 0;
  return (<>
    {isCartEmpty ? (
      <p className='text-7xl text-center'>Your cart is empty.</p>
    ) :( <div className='flex mt-7'><div className="w-1/2">
    {cart.map((item, index) => (
   <div className="bg-white rounded-lg shadow-md p-4 mt-3" key={index}>
     <div className="flex items-center">
       <img src={item.imgPath} alt={item.shoeName} className="w-20 h-20 rounded-lg mr-4" />
       <div>
         <h3 className="text-lg font-medium">{item.shoeName}</h3>
         <p className="text-gray-600">Size:{item.selectedSize}</p>
         <p className="text-gray-800 font-bold">${item.price.toFixed(2)}</p>
       </div>
     </div>
     <div className="flex items-center justify-between mt-4">
       <div className="flex items-center">
         <button
           className="bg-gray-200 rounded-l-lg px-2 py-1 hover:bg-gray-300"
           onClick={() => handleQuantityDecrement(index)}
         >
           -
         </button>
         <input
           type="text"
           value={itemQuantities[index]}
           className="bg-gray-100 px-2 py-1 w-12 text-center"
           readOnly
         />
         <button
           className="bg-gray-200 rounded-r-lg px-2 py-1 hover:bg-gray-300"
           onClick={() => handleQuantityIncrement(index)}
         >
           +
         </button>
       </div>
       <button onClick={() => handleRemoveItem(index)} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
         Remove
       </button>
     </div>
   </div>
 ))}
     
   </div>
   
   <div className='w-1/2 flex items-end justify-end flex-col'>
   <div className="mt-4 text-right font-bold mb-5 text-4xl">Total: ${totalPrice.toFixed(2)}</div>
   <button className='bg-green-700 p-3 rounded-md font-bold text-xl text-white'  onClick={handleProceedToCheckout}>Place Order</button>
     
     </div></div>)}

</>
  );
};

export default Cart;