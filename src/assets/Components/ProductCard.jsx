import { useState, useRef } from "react";
import { Link } from "react-router-dom";
export default function ProductCard({ product }) {
  const [userActivity, setUserActivity] = useState([]);
  const [count, setCount] = useState(0);
  const productLinkRef = useRef("");

  const handleVisit = (e, product) => {
    e.preventDefault();
    setUserActivity((prevActivity) => [...prevActivity, product]);

    if (product.url !== productLinkRef.current) {
      setCount((prev) => prev + 1);
      console.log("New visit count:", count + 1);
      productLinkRef.current = product.url;
    }

    window.open(product.url, "_blank");
  };
  
  return (
    <div className="max-w-sm w-full bg-white shadow-xl rounded-2xl overflow-hidden transform transition hover:scale-105 duration-300">
      
    
      <Link to={`/ProductView/${product.id}`}>
        <div className="relative h-48 overflow-hidden">
          <img
            src={product.imgUrl}
            alt={product.name}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
          />
        </div>
      </Link>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-500 mt-1 text-sm line-clamp-2">{product.description}</p>

        {/* Optional badge or price */}
        {/* <span className="text-green-600 font-bold text-md mt-2 block">$19.99</span> */}

        <button
          onClick={(e) => handleVisit(e, product)}
          className="mt-4 w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-2 rounded-lg transition-colors duration-300"
        >
           Visit Now
        </button>
      </div>
    </div>
  );
}
