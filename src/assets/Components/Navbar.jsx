import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Menu, X, Gift, User, LogOut } from "lucide-react";

export default function Navbar() {
  
  return<>
    <nav className="bg-gradient-to-l from-blue-500 to-yellow-400 p-4 shadow-lg text-white w-screen lg:absolute lg:top-0">
      <div className="container mx-auto flex justify-between items-center">
        {/* <h4 className="text-1xl font-bold">Mega Buy</h4> */}
        <div className="space-x-6">
          <Link to="/" className=" text-white font-bold hover:text-gray-300">Home</Link>
          <Link to="/personal" className=" text-white font-bold  hover:text-gray-300">Personal</Link>
          <Link to="/category" className=" hover:text-gray-300">Category</Link>
           {/* <span className="text-green-500 font-bold">500 Points</span> */}
        </div>
      </div>
    </nav>
</>
  
}