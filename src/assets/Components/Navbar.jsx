import { useContext, useState } from "react";
import {  Link } from "react-router-dom";
import { Menu, X, Gift, User, LogOut } from "lucide-react";
import { Logged } from "./LoggedUser"; 


export default function Navbar() {
  const { user } = useContext(Logged);
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-yellow-400 p-4 shadow-lg text-white w-full lg:absolute lg:top-0">
      <div className="container mx-auto flex justify-between items-center">
        {/* Mobile Hamburger (left side) */}
        <button
          className="md:hidden mr-3 p-2 rounded-lg hover:bg-white/20"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white font-bold hover:text-yellow-300">
            Home
          </Link>
          <Link to="/personal" className="text-white font-bold hover:text-yellow-300">
            Personal
          </Link>
          <Link to="/category" className="text-white font-bold hover:text-yellow-300">
            Category
          </Link>
        </div>

        {/* Profile (always right) */}
        <Link to="/personal">
          <div className="flex items-center gap-2 border rounded-full px-3 py-1 shadow-sm">
            <div className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-200">
              <User className="h-5 w-5 text-black" />
            </div>
            <span className="hidden md:inline text-sm font-medium">
              {user.username || user.email}
            </span>
          </div>
        </Link>
      </div>

      {/* Mobile Sliding Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-2/3 bg-gradient-to-r from-blue-700 to-yellow-400 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex flex-col space-y-4">
          <button
            className="self-end p-2 rounded-lg hover:bg-white/20"
            onClick={() => setOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>

          <Link
            to="/"
            className="text-white font-bold hover:text-yellow-300"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/personal"
            className="text-white font-bold hover:text-yellow-300"
            onClick={() => setOpen(false)}
          >
            Personal
          </Link>
          <Link
            to="/category"
            className="text-white font-bold hover:text-yellow-300"
            onClick={() => setOpen(false)}
          >
            Category
          </Link>
        </div>
      </div>
    </nav>
  );
}