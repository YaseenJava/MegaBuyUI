import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import axios from "axios";

// import {Logged} from "./LoggedUser";
// import {Logged } from "./Logged";

// // const Home = () => {
// //   const [products, setProducts] = useState([]);
// //   const [userActivity, setUserActivity] = useState([]);

// //   const productList = [
// //     {
// //       id: 1,
// //       name: "Organic Face Wash",
// //       category: "Beauty & Personal Care",
// //       description: "A natural face wash with organic ingredients for a glowing skin.",
// //       image1: "https://via.placeholder.com/150",
// //       image2: "https://via.placeholder.com/150",
// //       link: "https://example.com/product1"
// //     },
// //     {
// //       id: 2,
// //       name: "Night Suit Set",
// //       category: "Fashion",
// //       description: "Comfortable and stylish night suit for a restful sleep.",
// //       image1: "https://via.placeholder.com/150",
// //       image2: "https://via.placeholder.com/150",
// //       link: "https://example.com/product2"
// //     },
// //     {
// //       id: 3,
// //       name: "Party Avi Blue Dress",
// //       category: "Women's Fashion",
// //       description: "Elegant blue dress perfect for parties and special occasions.",
// //       image1: "https://via.placeholder.com/150",
// //       image2: "https://via.placeholder.com/150",
// //       link: "https://example.com/product3"
// //     },
// //     {
// //       id: 4,
// //       name: "Herbal Hair Oil",
// //       category: "Beauty & Hair Care",
// //       description: "Nourishing herbal hair oil for strong and shiny hair.",
// //       image1: "https://via.placeholder.com/150",
// //       image2: "https://via.placeholder.com/150",
// //       link: "https://example.com/product4"
// //     }
// //   ];

// //   useEffect(() => {
// //     setProducts(productList);
// //   }, []);

// //   const handleVisit = (product) => {
// //     setUserActivity([...userActivity, product]);
// //     window.open(product.link, "_blank");
// //   };

// //   return (
// //     <div className="min-h-screen lg:w-[80%] bg-gray p-4 lg:absolute  lg:top-[20px] ">
// //       <h1 className="text-3xl font-bold text-center mb-6 ml-[-40px]">MegaBuy</h1>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 ">
// //         {products.map((product) => (
// //           <motion.div key={product.id} whileHover={{ scale: 1.05 }}>
// //             <div className="p-4 shadow-lg rounded-2xl bg-black w-[200px] lg:h-[]">
// //               {/* <img src={product.image1} alt={product.name} className="w-full h-40 object-cover rounded-lg" /> */}
// //               <img src={product.image2} alt={product.name} className="w-full h-20 object-cover rounded-lg mt-2" />
// //               <div className="p- lg:h-[250px]">
// //                 <h2 className="text-xl font-semibold">{product.name}</h2>
// //                 <p className="text-gray-600">{product.category}</p>
// //                 <p className="mt- text-gray-800">{product.description}</p>
// //                 <button className="w-full bg-blue-500 text-white" onClick={() => handleVisit(product)}>
// //                   Visit Product
// //                 </button>
// //               </div>
// //             </div>
// //           </motion.div>
// //         ))}
// //       </div>

// //       {/* User Activity */}
// //       <div className="mt-8 p-4 bg-black rounded-2xl shadow-lg w-[200px]">
// //         <h2 className="text-2xl font-bold mb-4">Your Visited Products</h2>
// //         {userActivity.length > 0 ? (
// //           <ul className="space-y-2">
// //             {userActivity.map((item, index) => (
// //               <li key={index} className="text-blue-600 underline cursor-pointer" onClick={() => window.open(item.link, "_blank")}>
// //                 {item.name}
// //               </li>
// //             ))}
// //           </ul>
// //         ) : (
// //           <p className="text-gray-600">No products visited yet.</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;


// export default function Home(){

// const [product, setPoduct]=useState('')
// const [loading ,setloading]=useState(true)
// const [userActivity, setUserActivity] = useState([]);
// const [error, setError] = useState(null);

// const products = [
//   { id: 1, name: "Smartphone", desc: "Latest 5G smartphone.", link: "#", image: "https://lalithatraders.com/wp-content/uploads/2023/10/Vivo-T2-Pro-5G-Mobile-Phone-New-Moon-Black.jpg" },
//   { id: 2, name: "Laptop", desc: "Powerful gaming laptop.", link: "#", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMKseBU0IA-ebm2KTxop_7QQoYfc_J6VVeqw&s" },
//   { id: 3, name: "Headphones", desc: "Noise-cancelling wireless.", link: "#", image: "https://cdn.moglix.com/p/VDHEszRlLxUL8-xxlarge.jpg" },
// ];
// // useEffect(() => {
// //   const fetchData = async () => {
// //     try {
// //       const response = await axios.get("http://localhost:8080/product/productInfo");
// //       if (response.status !== 200) {
// //         throw new Error("Something went wrong");
// //       }
// //       console.log(response.data);
// //       setProduct(response.data);
// //     } catch (err) {
// //       setError(err.message);
// //     }
// //   };

// //   fetchData();
// // }, []);

// // // const userInfo=useContext(Logged);
// // // console.log(userInfo);
// // if (error) {
// //   return <h1>Oops! {error}</h1>;
// // }

// // const handleVisit = (product) => {
// //   setUserActivity((prevActivity) => [...prevActivity, product]);
// //   window.open(product.link, "_blank");
// // };
// // const user=useContext(Logged);
// // console.log(user);


//   return<div className="lg:p-[50px] lg:ml-7 lg:mt-7 w-[200px] ml-0" >
//   <div className="w-screen container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6 w-screen pl-[0px]">
//     {products.map((product) => (
//       <ProductCard key={product.id} product={product} />
//     ))}

    
//   </div>
// {/* 
//   <div className="mt-8 p-2 bg-black text-white rounded-2xl shadow-lg w-screen">
//         <h2 className="text-2xl font-bold mb-4">Your Visited Products</h2>
//         {userActivity.length > 0 ? (
//           <ul className="space-y-2">
//             {userActivity.map((item, index) => (
//               <li key={index} className="text-blue-400 underline cursor-pointer" onClick={() => window.open(item.link, "_blank")}>
//                 {item.name}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-400">No products visited yet.</p>
//         )}
//       </div> */}
//   </div>
// }



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
        const response = await axios.get("http://localhost:8080/product/productInfo");
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

  return (
    <div className="lg:p-[50px] lg:ml-7 lg:mt-7 w-[200px] ml-0">
      <div className="w-screen container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6 w-screen pl-[0px]">
      {Array.isArray(product) && product.length > 0 ? (
        product.map((prod) => <ProductCard key={prod.id} product={prod} />)
      ) : (
        <p>No products available</p> 
      )}
      </div>
    </div>
  );
}
