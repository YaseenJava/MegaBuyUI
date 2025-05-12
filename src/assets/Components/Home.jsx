import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import axios from "axios";
import SliderSection from "./SliderSection"
import {Link, useLocation} from "react-router-dom"
import Section from "./Section"



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
    return <h1>Loading...</h1>;
  }

  // if (error) {
  //   return <h1>Oops! {error}</h1>;
  // }
  const ads = [
    { imgUrl: "https://www.lakmeindia.com/cdn/shop/files/Lakme_Mobile-VitC-2_71bb67c8-9dd0-4daa-9aa5-8a326deb6a20.png?v=1718629947", text: "50% Off Sale!", url: "#" },
    { imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6_we8EYhJFw4efPWBu2UkoB4MCHxmrcEc1w&s", text: "Get Cashback Now", url: "#" },
    { imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8yzokVlQLn9FYCcTPK6nGaHmfkzjluT8EgQ&s", text: "Get Cashback Now", url: "#" },

    { imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMCrG9AH8X1d_RCGr1iJ8FgieGfiifCnlbqw&s", text: "Get Cashback Now", url: "#" },

    { imgUrl: "https://dazeinfo.com/wp-content/uploads/2021/07/Apple-ad-privacy.jpeg", text: "Get Cashback Now", url: "#" },

    
  ];

  return (
    <div>
          <SliderSection ads={ads} />
          <Section/>

    <div className="lg:p-[50px] lg:ml-7 lg:mt-[1px] w-[200px] ml-0">
      
      <div className="w-screen container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6 w-screen pl-[0px]">
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
