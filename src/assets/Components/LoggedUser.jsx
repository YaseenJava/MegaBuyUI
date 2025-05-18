import { createContext, useState, useEffect } from "react";

const Logged = createContext();

export default function LoggedUser({ children, user }) {
  const [userInfo, setUserInfo] = useState({
    userName: "",
    reward: 0,
    userEmail: "",
  });

  useEffect(() => {
    if (user) {
      // Match these with actual keys in your `user` object
      setUserInfo({
        userName: user.userName || "",
        reward: user.reward || 0,
        userEmail: user.email || "", // make sure you're using the correct key
      });
    }
  }, [user]);

  return (
    <Logged.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </Logged.Provider>
  );
}

export { Logged };
