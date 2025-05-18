import { useContext } from "react";
import { Logged } from "./LoggedUser";

export default function Personal() {
  const { userInfo } = useContext(Logged);
 console.log(userInfo)
  return (
    <div className="flex flex-col items-center justify-center w-screen bg-gray absolute top-[200px]">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-xl font-bold text-center mb-4">User Account</h2>
        <p className="text-white text-center">
          Name: <span className="font-semibold">{userInfo.userName}</span>
        </p>
        <p className="text-white text-center">
          Rewards: <span className="text-green-400 font-bold">{userInfo.reward} Points</span>
        </p>
        <button className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-300">
          Logout
        </button>
      </div>
    </div>
  );
}
