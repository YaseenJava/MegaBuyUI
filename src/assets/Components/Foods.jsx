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

  const fallbackMeals = [
    {
      id: 1,
      name: "Butter Chicken",
      desc: "Creamy tomato-based curry with tender chicken pieces.",
      link: "#",
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9k3aQ9aF-SoTeZrZOdkv5FL9A_Pfw2ghUJQ&s"
    },
    {
      id: 2,
      name: "Paneer Biryani",
      desc: "Fragrant basmati rice layered with spicy paneer masala.",
      link: "#",
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfNMYsE3P2Q1cuZzjh6igftp8Dr2AqC0Jwcg&s"
    },
    {
      id: 3,
      name: "Cheese Burst Pizza",
      desc: "Loaded with cheese and toppings, perfect for pizza lovers.",
      link: "#",
      imgUrl: "https://content.jdmagicbox.com/comp/def_content/pizza_outlets/default-pizza-outlets-13.jpg"
    }
  ];
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/product/productByCategory/Foods");
        if (response.status !== 200) {
          throw new Error("Something went wrong");
        }

        
       // console.log(response.data.);
        
        
      setProduct(response.data.data);
      } catch (err) {
        setError(err.message);
        setProduct(fallbackMeals); // Use fallback products if API fails
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
    { imgUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0fdd0e25559501.56347a238b44b.png", text: "Hot selling", url: "#" },
    { imgUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e9eec5183336727.653e32340bec9.jpg", text: "Get Cashback Now", url: "#" },
    { imgUrl: "https://cdn.create.vista.com/downloads/fdce49aa-e21e-4159-8905-7e56b5a53cde_1024.jpeg", text: "Get Cashback Now", url: "#" },

   
    
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
