import { createContext, useState } from "react";

const Logged = createContext();

export default function LoggedUser({ children, user }) {
  const [userInfo, setUserInfo] = useState({
    userName: "",
    reward: "",
    userEmail: "",
  });

  // Update state only if user changes
  useState(() => {
    if (user) {
      setUserInfo(user);
    }
  }, [user]);

  return (
    <Logged.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </Logged.Provider>
  );
}
