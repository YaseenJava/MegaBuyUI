import { useState } from "react";
import { Menu, X, Gift, User, LogOut } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex ">
      {/* Sidebar Toggle Button
      <button 
        className="p-2 m-2 rounded-md bg-gray-800 text-white md:hidden"
        onClick={() => {
          if(!isOpen){
           setIsOpen(true)
          }
          else{
            setIsOpen(false)
          }
        }
        }
      >
        {isOpen ? <X /> : <Menu /> || !isOpen ? <Menu/> : <></>} 
      </button> */}

      {/* Sidebar */}
      <div 
        className={` fixed md:relative top-0 left-0 h-full lg:h-screen bg-yellow-300 z-[999] text-white w-64 p-5 transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5" />
            <span className="text-lg font-bold">John Doe</span>
          </div>
          <div className="flex items-center gap-2">
            <Gift className="w-5 h-5" />
            <span className="text-lg font-bold">Rewards: 100</span>
          </div>
          <button 
            className="flex items-center gap-2 w-full p-2 mt-4 bg-red-600 rounded-md hover:bg-red-700"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
