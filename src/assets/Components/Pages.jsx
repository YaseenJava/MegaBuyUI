import Navbar from "./Navbar";
import Home from "./Home";
import {useLocation} from "react-router-dom"
import Entertain from "./Entertain"
import Foods from "./Foods"

export default function pages(){
    const location=useLocation();
  const section=location.pathname
  //console.log(section)

    return<>
   
    <Navbar/>
  
    {section === "/Entertain" ? <Entertain /> : <pages/>}
    {section === "/Foods" ? <Foods /> : <Home />}
    

    

    
    </>
}