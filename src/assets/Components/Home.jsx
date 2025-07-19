import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import axios from "axios";
import SliderSection from "./SliderSection"
import {Link, useLocation} from "react-router-dom"
import Section from "./Section"
import Navbar from "./Navbar"
import ProductSkelton from "./ProductSkelton";

export default function Home() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userActivity, setUserActivity] = useState([]);
  const [error, setError] = useState(null);

  const fallbackProducts = [
    { id: 1, name: "Smartphone", desc: "Latest 5G smartphone.", link: "#", image: "https://lalithatraders.com/wp-content/uploads/2023/10/Vivo-T2-Pro-5G-Mobile-Phone-New-Moon-Black.jpg" },
    { id: 2, name: "Laptop", desc: "Powerful gaming laptop.", link: "#", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMKseBU0IA-ebm2KTxop_7QQoYfc_J6VVeqw&s" },
    { id: 3, name: "Headphones", desc: "Noise-cancelling wireless.", link: "#", image: "https://cdn.moglix.com/p/VDHEszRlLxUL8-xxlarge.jpg" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/product/productByCategory/Lifestyle");
        if (response.status !== 200) {
          throw new Error("Something went wrong");
        }

        
       // console.log(response.data.token);
        
        
      setProduct(response.data.data);
      } catch (err) {
        setError(err.message);
        setProduct(fallbackProducts); // Use fallback products if API fails
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  if (loading) {
    return <ProductSkelton/>;
  }

  // if (error) {
  //   return <h1>Oops! {error}</h1>;
  // }
  const ads = [
    { imgUrl: "https://img.freepik.com/premium-photo/cosmetics-makeup-products-woman-with-skincare-products-beauty-product-cosmetics-advertising_265223-82563.jpg", text: "50% Off Sale!", url: "#" },
    { imgUrl: "https://www.gingermediagroup.com/wp-content/uploads/2023/04/unnamed-19.jpg", text: "Get Cashback Now", url: "#" },
    { imgUrl: "https://www.shutterstock.com/image-photo/happiness-calm-dreaminess-collage-made-600nw-2290214985.jpg", text: "Get Cashback Now", url: "#" },

    { imgUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/headphone-ads-design-template-7fe6b8c54d38cf99a83aac13e0f79352_screen.jpg?ts=1635073389", text: "Get Cashback Now", url: "#" },

    { imgUrl: "https://dazeinfo.com/wp-content/uploads/2021/07/Apple-ad-privacy.jpeg", text: "Get Cashback Now", url: "#" },

    
  ];

  return (

    <div className="w-full">
          <Navbar/>

          <SliderSection ads={ads} />
          <Section/>

    <div className=" w-[100%] lg:p-[20px] lg:ml-7 lg:mt-[1px] w-[200px] ml-0">
      
      <div className=" container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6 w-screen pl-[10px]">
      {Array.isArray(product) && product.length > 0 ? (
        product.map((prod) => <ProductCard key={prod.id} product={prod} />)
      ) : (
        <p>No products available</p> 
      )}
      </div>
    </div>
    </div>
  );
}






//     <div className="bg-black min-h-screen w-[100%] p-5">
//   <Navbar />
//   <SliderSection ads={ads} />
//   <Section />

//   <div className="container mx-auto">
//     {Array.isArray(product) && product.length > 0 ? (
//       <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  px-6 py-4">
//         {product.map((prod) => (
//           <ProductCard key={prod.id} product={prod} />
//         ))}
//       </div>
//     ) : (
//       <p className="text-center text-gray-500 mt-10 text-lg">No products available</p>
//     )}
//   </div>
// </div>
