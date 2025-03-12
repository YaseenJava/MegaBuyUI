import { Link } from "react-router-dom";

export default function AuthPage() {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center p-6 w-screen relative"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/blue-background-with-toy-shopping-cart-boxes-copy-space-text-design-represents-sale-discount-sho_908985-18694.jpg')",
      }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Welcome Card with Glassmorphism Effect */}
      <div className="relative bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-xl shadow-lg text-center w-full max-w-lg">
        <h1 className="text-4xl font-bold text-white mb-4 animate-fadeIn">
          Welcome to <span className="text-yellow-400">MegaBuy</span>
        </h1>
        <p className="text-gray-200 text-lg">
          Earn money effortlessly without investing! 
        </p>
      </div>

      {/* Buttons with Animations */}
      <div className="mt-6 space-y-4 flex flex-col items-center w-full max-w-md">
        <Link to="/register">
          <div className="bg-green- text-white px-6 py-3 rounded-lg shadow-lg w-full text-center text-lg font-bold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105">
            Get Started
          </div>
        </Link>

        <Link to="/login">
          <div className="border-2 border-white text-white px-6 py-3 rounded-lg shadow-lg w-full text-center text-lg font-bold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
            Login
          </div>
        </Link>
      </div>
    </div>
  );
}
