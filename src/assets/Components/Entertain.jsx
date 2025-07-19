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

  const fallbackMovies = [
    {
      id: 1,
      name: "The Last Frontier",
      desc: "An epic tale of survival and war.",
      platform: "Netflix",
      link: "#",
      imgUrl: "https://image.tmdb.org/t/p/original/bi4XdL0LiP1Vgn1CI1JEJRvBnTZ.jpg"
      
    },
    {
      id: 2,
      name: "Cyber Hunt",
      desc: "A hacker battles a corrupt system in a digital future.",
      platform: "Amazon Prime Video",
      link: "#",
      imgUrl: "https://i.pinimg.com/1200x/36/70/a0/3670a0e73c7a56837e69596107db488d.jpg"
    },
    {
      id: 3,
      name: "Silent Waves",
      desc: "A chilling mystery set on a remote island.",
      platform: "Disney+",
      link: "#",
imgUrl:"https://filmfreeway-production-storage-01-connector.filmfreeway.com/press_kits/posters/002/793/671/original/44f94b097e-poster.jpg?1717203158"    
},
    {
      id: 4,
      name: "Midnight Express",
      desc: "A man's daring escape from a foreign prison.",
      platform: "Hulu",
      link: "#",
    imgUrl:"https://i.pinimg.com/736x/1e/96/c7/1e96c7247b3d6d4ea844fb0713abdb3e.jpg"
    },
    {
      id: 5,
      name: "Skyline Rush",
      desc: "Futuristic car races above skyscrapers.",
      platform: "Netflix",
      link: "#",
imgUrl:"https://rukminim2.flixcart.com/image/750/900/l2dmky80/poster/l/i/q/small-poster-rush-a-slo133-sl1277-wall-poster-13x19-inches-matte-original-imagdqezekavfrbn.jpeg?q=20&crop=false"
    },
    {
      id: 6,
      name: "The Forgotten Room",
      desc: "A family uncovers a room that shouldn't exist.",
      platform: "HBO Max",
      link: "#",
imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7jLS0g4saupC2GU53dUMui7KIwBDwlbYkJg&s"
    },
    
  ];
  
    useEffect(() => {
    const fetchData = async () => {
      try {
        //const response = await axios.get("http://localhost:8080/product/productInfo");
        if (response.status !== 200) {
          throw new Error("Something went wrong");
        }

        
       // console.log(response.data.token);
        
        
      setProduct(response.data.data);
      } catch (err) {
        setError(err.message);
        setProduct(fallbackMovies); // Use fallback products if API fails
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
    {
        imgUrl: "https://tinybeans.com/wp-content/uploads/2022/03/netflix-codes.png?w=640",
        text: "50% Off on Annual Netflix Plan!",
        url: "#"
      },
      {
        imgUrl: "https://m.media-amazon.com/images/G/01/primevideo/seo/primevideo-seo-logo.png",
        text: "Get Cashback When You Watch Prime Originals",
        url: "#"
      },
      {
        imgUrl: "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/07/Disney-Films-No-Prince-Charming.jpg",
        text: "Unlock Disney+ Exclusive Series Early!",
        url: "#"
      },
      
    
  ];

  return (
  <div>
            <Navbar/>
  
            <SliderSection ads={ads} />
            <Section/>
  
      <div className="lg:p-[50px] lg:ml-7 lg:mt-[1px] w-[200px] ml-0 flex flex-wrap justify-center gap-4">
        
        <div className="w-screen container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6 w-screen pl-[10px]">
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
