import Landing from "./assets/Components/Landing";


import Home from "./assets/Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Personal from "./assets/Components/Personal";
import HomeScreen from "./assets/Components/HomeScreen";
import Login from "./assets/Components/Login";
import Register from "./assets/Components/Register"
import ProductPage from "./assets/Components/ProductPage";
import Lifestyle from "./assets/Components/Lifestyle"
import Entertain from "./assets/Components/Entertain"
import Foods from "./assets/Components/Foods"

export default function App() {
  
  return (

    <Router>
    
    
    

      <Routes>
    
      <Route path="/" element={<HomeScreen/>} />
      {/* <Route path="/personal" element={<Account/>}
      <Route path="/category" element={<Category />} /> */}
      
      <Route path="/home" element={<Home/>} />

      <Route path="/about" element={<Landing />} />
      <Route path="/personal" element={<Personal/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/productView/*" element={<ProductPage/>}/>
      {/* <Route path="/Lifestyle" element={<Lifestyle/>}/>*/}
      <Route path="/Foods" element={<Foods/>}/> 
      <Route path="/Entertain" element={<Entertain/>}/> 


      </Routes>
    </Router>
  );
}
