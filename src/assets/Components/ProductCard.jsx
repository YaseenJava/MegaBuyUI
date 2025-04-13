// import { useState,useEffect } from "react"
// export default function ProductCard ({ product }){
//   const [userActivity, setUserActivity] = useState([]);
//   const [imgSrc,setImg]=useState('');
//   //const [count,setCount]=useState('');
//   // useEffect(() => {
//   //   if (product.data) {
//   //     const url = URL.createObjectURL(product.data);
//   //     setImg(url);
      
      
//   //     return () => URL.revokeObjectURL(url);
//   //   }
//   // }, [product.data]); 



//   var count=0;
//   var productlink='';
//  const handleVisit = (product) => {
//    setUserActivity((prevActivity) => [...prevActivity, product]);
//     window.location.href=product.link;
//     if(product.url!=productlink){
//      count=count+1;
//       console.log(count);
//      productlink=product.url;
//     }
//  };
//   //console.log(userActivity)
//   //console.log(product.link)
//   //console.log(count)
//     return<>
//     <div className="bg-gray shadow-lg rounded-lg p-4 transform transition duration-300 hover:scale-105">
//       <img src={product.imgUrl} alt={product.name} className="w-full h-40 object-cover rounded-md" />
//       <h3 className="text-xl font-bold mt-2">{product.name}</h3>
//       <p className="text-gray-600">{product.description}</p>
//       <a href={product.url} onClick={(e) => handleVisit(product)} className="mt-3 inline-block bg-yellow-400 w-full text-white px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-black">Visit</a>
//     </div>
//     </>
// }
  


import { useState, useEffect, useRef } from "react";

export default function ProductCard({ product }) {
  const [userActivity, setUserActivity] = useState([]);
  const [count, setCount] = useState(0);
  const productLinkRef = useRef(""); // Store last visited product URL

  const handleVisit = (e, product) => {
    e.preventDefault(); // Stop default link navigation

    setUserActivity((prevActivity) => [...prevActivity, product]);

    if (product.url !== productLinkRef.current) {
      setCount((prevCount) => prevCount + 1);
      console.log("New visit count:", count + 1);
      productLinkRef.current = product.url;
    }

  
    window.location.href = product.url;
  };

  return (
    <div className="bg-gray shadow-lg rounded-lg p-4 transform transition duration-300 hover:scale-105">
      <img src={product.imgUrl} alt={product.name} className="w-full h-40 object-cover rounded-md" />
      <h3 className="text-xl font-bold mt-2">{product.name}</h3>
      <p className="text-gray-600">{product.description}</p>
      {/* <p className="text-blue-500">Coins Earned: {count}</p> */}
      <a
        href={product.url}
        onClick={(e) => handleVisit(e, product)}
        target="_blank"
        rel="noopener noreferrer"

        className="mt-3 inline-block bg-yellow-400 w-full text-white px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-black"
      >
        Visit
      </a>
    </div>
  );
}
