import { useState, useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Logged } from "./LoggedUser";

export default function ProductCard({ product }) {
  const productLinkRef = useRef("");
  const { setUser, user } = useContext(Logged);
  const [cooldownData, setCooldownData] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("cooldownData") || "{}");
    return saved[product.id] || { time: null, coins: 0 };
  });

  // Sync with localStorage whenever cooldownData changes
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cooldownData") || "{}");
    saved[product.id] = cooldownData;
    localStorage.setItem("cooldownData", JSON.stringify(saved));
  }, [cooldownData, product.id]);

  const handleVisit = (e) => {
    e.preventDefault();
    const now = new Date();

    const lastTime = cooldownData.time ? new Date(cooldownData.time) : null;
    const oneHour = 60 * 60 * 1000;

    if (!lastTime || now - lastTime > oneHour) {
      const earnedCoins = Math.floor(Math.random() * 10) + 1;

      // Update UI and localStorage
      setCooldownData({
        time: now.toISOString(),
        coins: earnedCoins,
      });

      // Update user context reward
      setUser(prev => ({
        ...prev,
        rewards: (prev.rewards || 0) + earnedCoins
      }));

      alert(`🎉 You earned ${earnedCoins} coins!`);
    } else {
      const remaining = Math.ceil((oneHour - (now - lastTime)) / 60000);
      alert(`⏳ Please wait ${remaining} more minute(s) to earn coins again.`);
    }

    // Open product link in new tab
    if (product.url !== productLinkRef.current) {
      productLinkRef.current = product.url;
    }
    window.open(product.url, "_blank");
  };

  return (
<div className="max-w-sm w-full bg-white shadow-xl rounded-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
  <Link to={`/ProductView/${product.id}`}>
    <div className="relative h-48 sm:h-56 md:h-60 overflow-hidden">
      <img
        src={product.imgUrl}
        alt={product.name}
        className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
      />
    </div>
  </Link>

  <div className="p-4 sm:p-5">
    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 truncate">{product.name}</h3>
    <p className="text-gray-500 mt-1 text-sm sm:text-base line-clamp-2">
      {product.description}
    </p>

    <button
      onClick={handleVisit}
      className="mt-4 w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-2 sm:py-2.5 rounded-xl transition-all duration-300"
    >
      🚀 Visit Now to Earn Coins
    </button>

    <div className="text-gray-700 text-sm mt-3">
      Coins Earned in Last Visit:{" "}
      <span className="font-bold text-green-600">{cooldownData.coins}</span>
    </div>
  </div>
</div>

  );
}
