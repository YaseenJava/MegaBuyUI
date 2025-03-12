import { useState } from "react"
export default function ProductCard ({ product }){
  const [userActivity, setUserActivity] = useState([]);
  var count=0;
  var productlink='';
 // const handleVisit = (product) => {
   // setUserActivity((prevActivity) => [...prevActivity, product]);
    //window.location.href=product.link;
    // if(product.link!=productlink){
    //  count=count+1;
    //  productlink=product.link;
    // }
 // };
  // console.log(userActivity)
  // console.log(product.link)
  // console.log(count)
  console.log(product.url)
 const handleVisit = (e, product) => {
    e.preventDefault(); 

    if (!product.link || !product.link.startsWith("http")) {
      alert("Invalid product link!"); // Handle missing/invalid URLs
      return;
    }

    setUserActivity((prevActivity) => [...prevActivity, product]);
    window.location.href = product.link; // Open directly in the same tab
  };
  
    return<>
    <div className="bg-gray shadow-lg rounded-lg p-4 transform transition duration-300 hover:scale-105">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
      <h3 className="text-xl font-bold mt-2">{product.name}</h3>
      <p className="text-gray-600">{product.description}</p>
      <a href={product.url} onClick={() => handleVisit(e,product)} className="mt-3 inline-block bg-yellow-400 w-full text-white px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-black">Visit</a>
    </div>
    </>
}
  