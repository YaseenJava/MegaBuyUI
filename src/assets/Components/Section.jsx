// import {Link, useLocation} from "react-router-dom"

// export default function Section(){



//   const location=useLocation();
//   const section=location.pathname
//   console.log(section)
 


// return(
// <>
// <div className="flex items-center gap-7 bg-white h-12 shadow-md px-4 pl-9">
// <Link to="/Lifestyle">
// <h3
// className={`text-lg font-medium hover:text-yellow-600 ${
//   section === "/Lifestyle" ? "text-yellow-600" : "text-gray-800"
// }`}
// >
// Lifestyle
// </h3>

// </Link>
// <Link to="/Foods">
// <h3
// className={`text-lg font-medium hover:text-yellow-600 ${
//   section === "/Foods" ? "text-yellow-600" : "text-gray-800"
// }`}
// >
// Foods
// </h3>

// </Link>
// <Link to="/Entertain">
// <h3
// className={`text-lg font-medium hover:text-yellow-600 ${
//   section === "/Entertain" ? "text-yellow-600" : "text-gray-800"
// }`}
// >
// Entertain
// </h3>

// </Link>
// <Link to="/Grocery">
// <h3
// className={`text-lg font-medium hover:text-yellow-600 ${
//   section === "/Grocery" ? "text-yellow-600" : "text-gray-800"
// }`}
// >
// Grocery
// </h3>
// </Link>
// </div>
// </>
// )}
import { Link, useLocation } from "react-router-dom";

export default function Section() {
  const location = useLocation();
  const section = location.pathname;

  const links = [
    { name: "Home", path: "/home" },
    { name: "Foods", path: "/Foods" },
    { name: "Entertain", path: "/Entertain" },
    { name: "Grocery", path: "/Grocery" },
  ];

  return (
   <div className="bg-white shadow-md w-[100%] ">
      <div className="flex overflow-x-auto gap-6 sm:gap-10 px-4 sm:px-8 h-12 items-center whitespace-nowrap scrollbar-hide">
        {links.map(({ name, path }) => (
          <Link to={path} key={name}>
            <h3
              className={`text-base sm:text-lg font-medium transition-colors ${
                section === path ? "text-yellow-600" : "text-gray-800"
              } hover:text-yellow-600`}
            >
              {name}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
