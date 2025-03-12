import React, { useState } from "react";
import axios from "axios";
import { FaUser, FaLock, FaEnvelope, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("username", formData.username);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("password", formData.password);

    try {
      const response = await axios.post("http://localhost:8080/registerUser", form,
       {headers:{ "Content-Type": "application/json" }},

      );
      alert("Registration Successful!");
    } catch (err) {
      console.log("Error:", err.message);
      alert("Registration Failed!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-l from-blue-600 to-yellow-400 px-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h3 className="text-3xl font-bold text-center text-gray-800">Register</h3>
        <p className="text-center text-gray-500 mb-4">Create your MegaBuy account</p>

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="flex items-center border border-gray-300 rounded-lg p-2 bg-gray-100">
            <FaUser className="text-gray-500 mr-2" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full bg-transparent focus:outline-none"
              required
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-lg p-2 bg-gray-100">
            <FaEnvelope className="text-gray-500 mr-2" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent focus:outline-none"
              required
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-lg p-2 bg-gray-100">
            <FaPhone className="text-gray-500 mr-2" />
            <input
              type="text"
              name="phone"
              placeholder="Phone No"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-transparent focus:outline-none"
              required
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-lg p-2 bg-gray-100">
            <FaLock className="text-gray-500 mr-2" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-transparent focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-white py-2 rounded-lg hover:bg-blue-800 transition-all font-bold shadow-lg"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
         <Link to="/login"> <span className="text-yellow-400 cursor-pointer hover:underline">Login</span></Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
