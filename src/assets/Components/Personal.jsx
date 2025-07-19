import { useContext } from "react";
import { Logged } from "./LoggedUser"; // ✅ Do NOT import LoggedUser here

export default function Personal() {
  const { user } = useContext(Logged);
 // console.log(Logged);
  //console.log("User from context:", user);

  if (!user) {
    return <div className="text-center mt-10">Please login to view your profile.</div>;
  }

  return (
   <div className="flex items-center justify-center min-h-screen w-screen bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500">
  <div className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-2xl w-full max-w-sm border border-yellow-200 transition-all duration-300">
    <h2 className="text-2xl font-extrabold text-center text-gray-900 mb-4 tracking-wide drop-shadow">
       User Account
    </h2>
    <p className="text-gray-800 text-center text-lg">
      Name: <span className="font-semibold text-gray-900">{user.username}</span>
    </p>
    <p className="text-center text-lg mt-2">
      Rewards: <span className="text-green-700 font-extrabold">{user.rewards} Points</span>
    </p>
    <button className="mt-6 w-full bg-yellow-600 text-white py-2 rounded-xl font-semibold shadow-md hover:bg-yellow-700 hover:shadow-lg transition-all duration-200">
      Logout
    </button>
  </div>
</div>

  );
}
