import Landing from "./assets/Components/Landing";
import Sidebar from "./assets/components/Sidebar";
import Navbar from "./assets/components/Navbar";
import Home from "./assets/Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Personal from "./assets/Components/Personal";
import HomeScreen from "./assets/Components/HomeScreen";
import Login from "./assets/Components/Login";
import Register from "./assets/Components/Register"
import Pages from "./assets/Components/Pages";
export default function App() {
  return (

    <Router>
    
    
    

      <Routes>
    
      <Route path="/" element={<HomeScreen/>} />
      {/* <Route path="/personal" element={<Account/>}
      <Route path="/category" element={<Category />} /> */}
      
      <Route path="/home" element={<Pages/>} />

      <Route path="/about" element={<Landing />} />
      <Route path="/personal" element={<Personal/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
  );
}
