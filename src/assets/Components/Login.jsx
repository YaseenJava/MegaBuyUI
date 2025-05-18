import React, { Children, createContext, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaUser, FaLock, FaGoogle } from "react-icons/fa";
import LoggedUser from "./LoggedUser";

const Logged=createContext(null)
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({
    userName:"",
    reward:"",
    userEmail:""

  });


  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Logging in:", email, password);
    
    const form = new FormData();
    form.append("email", email);
    form.append("password", password);

    try {
  const response = await axios.post("http://localhost:8080/check", form, {
    headers: { "Content-Type": "application/json" },
  });

  if (response.status === 200) {
    const user = response.data.data;
    setData(user); // store user
    console.log("User logged in:", user);
    if (user.email==email) {
          window.location.href = "http://localhost:5173/home";

    }
  }
} catch (err) {
  console.log("Error:", err.message);
};
  }

  const handleGoogleLogin = () => {
    alert("Logging in with Google.....");
    window.location.href = "http://localhost:8080/googleLogin";
  };

  return (
    // <Logged.Provider value={{ data, setData }}>
    //   {Children}
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-l from-blue-600 to-yellow-400 px-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="flex items-center border border-gray-300 rounded-lg p-2 bg-gray-100">
            <FaUser className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Email id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent focus:outline-none"
              required
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-lg p-2 bg-gray-100">
            <FaLock className="text-gray-500 mr-2" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-white py-2 rounded-lg hover:bg-blue-800 transition-all font-bold shadow-lg"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <button
            className="w-full h-12 flex items-center justify-center bg-white text-black border border-gray-300 py-2 rounded-lg shadow-md hover:bg-gray-100 transition-all"
            onClick={handleGoogleLogin}
          >
            <FaGoogle className="text-red-600 mr-2" />
            <span>Sign in with Google</span>
          </button>

          <p className="mt-4 text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="text-yellow-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
   // </Logged.Provider>
  );
};

export default Login;
