import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroPage from './components/HeroPage'
import Products from './components/Products'
import ProductPage from './components/ProductPage'
import Cart from './components/Cart'
import SignInPage from './components/SignInPage'
import OrderSummary from './components/OrderSummary'
import 'react-image-gallery/styles/css/image-gallery.css';
import { CartProvider } from './components/CartContext'
import { AuthProvider } from './components/AuthContext'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [clickedData, setClickedData] = useState(null);
  const [shoeName, setShoeType] = useState(null);
  const [price, setPrice] = useState(null);
  const [imgPath, setImgPath] = useState(null);
  

  const handleShoeClick = (data) => {
    setClickedData(data.imgArray);
    setShoeType(data.shoeName);
    setPrice(data.price);
    setImgPath(data.imgPath);
  };

  return (
    
    <BrowserRouter>
    <main className='mt-6 px-28'>
      <AuthProvider>
    <Navbar></Navbar>
    <CartProvider>
    <Routes>
      <Route path='/' element={<HeroPage />} />
      <Route path='/products' element={<Products onShoeClick={handleShoeClick}/>} />
      <Route path='/productpage' element={<ProductPage clickedData={clickedData} shoeName={shoeName}
       price={price} imgPath={imgPath} />}/>
      <Route path='/cart' element={<Cart />} />
      <Route path='SignInPage' element={<SignInPage />} />
      <Route path="/OrderSummary" element={<OrderSummary />} />
      </Routes>
    
    </CartProvider>
    </AuthProvider>
    </main></BrowserRouter>
    
  )
}

export default App
