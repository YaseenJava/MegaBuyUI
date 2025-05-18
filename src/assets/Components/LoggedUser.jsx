import { createContext, useState, useEffect } from "react";

const Logged = createContext();

export default function LoggedUser({ children }) {
  const [user, setUser] = useState({});
    useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
   console.log("contex",user)


  return (
    <Logged.Provider value={{ user, setUser }}>
      {children}
    </Logged.Provider>
  );
}

export { Logged ,LoggedUser};
