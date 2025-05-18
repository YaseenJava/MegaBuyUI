import { useContext } from "react";
import { Logged } from "./LoggedUser"; // ✅ Do NOT import LoggedUser here

export default function Personal() {
  const { user } = useContext(Logged);
 // console.log(Logged);
  console.log("User from context:", user);

  if (!user) {
    return <div className="text-center mt-10">Please login to view your profile.</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center w-screen bg-gray absolute top-[200px]">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-xl font-bold text-center mb-4">User Account</h2>
        <p className="text-white text-center">
          Name: <span className="font-semibold">{user.username}</span>
        </p>
        <p className="text-white text-center">
          Rewards: <span className="text-green-400 font-bold">{user.rewards} Points</span>
        </p>
        <button className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-300">
          Logout
        </button>
      </div>
    </div>
  );
}
