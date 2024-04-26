import { useContext } from 'react';
import { CartContext } from './CartContext';
import ImageGallery from 'react-image-gallery';
import { Link } from 'react-router-dom';
import { useState } from 'react';


// 

export default function ProductPage({ clickedData, shoeName, price, imgPath }) {
  const { addToCart } = useContext(CartContext);
  const { cart } = useContext(CartContext);
  

  const isProductInCart = cart.some((item) => item.shoeName === shoeName);

  const imageObjects = clickedData.map((imageUrl) => ({
    original: imageUrl,
    thumbnail: imageUrl,
  }));

  const galleryProps = {
    items: imageObjects,
    thumbnailPosition: 'left',
    showFullscreenButton: false,
    showPlayButton: false,
    showBullets: false,
    showIndex: false,
    useBrowserFullscreen: false,
    lazyLoad: true,
    startIndex: 0,
    showNav: false,
    className: 'product-image-gallery',
  };

  function clickHandler() {
    addToCart({ price, shoeName, selectedSize, imgPath });
  }

  

  const sizes = [8, 9, 10, 11, 12];

  

  const [selectedSize, setSelectedSize] = useState(null); // Track selected size
  
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="flex justify-between">
      <div className="w-1/2 p-12">
        <ImageGallery {...galleryProps} />
      </div>
      <div className="w-1/2 p-12">
        <p className="text-5xl font-bold mb-12">{shoeName}</p>
        <p className="">
          DESCRIPTION: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          enim nemo veritatis aliquid eligendi quisquam vero? Esse, aliquid
          culpa.
        </p>

        <div className="flex flex-wrap gap-2">
      {sizes.map((size) => (
        <span
          key={size}
          className={`cursor-pointer w-8 h-9 p-1 rounded-sm text-center border-2 border-gray-950 mt-10 ${
            selectedSize === size ? "bg-gray-800 text-white" : "text-gray-800 "
          }`}
          onClick={() => handleSizeClick(size)}
        >
          {size}
        </span>
      ))}
    </div>
        <p className="text-5xl mt-10">${price}</p>
        {isProductInCart ? (
          <div className='mt-5'>Item successfully added to cart</div>
        ) : (
          <button className="bg-black text-white p-3 mt-5 rounded-md" onClick={clickHandler}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}