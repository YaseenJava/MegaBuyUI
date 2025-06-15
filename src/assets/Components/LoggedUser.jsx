import { createContext, useState, useEffect } from "react";
import axios from "axios";

const Logged = createContext();

export default function LoggedUser({ children }) {
  const [user, setUser] = useState({});
    useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
  },[]);

  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

 useEffect(() => {
  const update = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/updateRewards",
        { email: user.email, rewards: user.rewards },
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("rewards updated");
      console.log(response.data);
    } catch (err) {
      console.error("Error updating rewards:", err);
    }
  };

  // Call update only if user.email and user.rewards are defined
  if (user?.email && user?.rewards != null) {
    update();
  }
}, [user.rewards]);
 // // console.log("contex",user)
    // if (user) localStorage.setItem("user", JSON.stringify(user));
    // const stored = localStorage.getItem("user");
    // if (stored) setUser(JSON.parse(stored));

  return (
    <Logged.Provider value={{ user, setUser }}>
      {children}
    </Logged.Provider>
  );
}

export { Logged ,LoggedUser};
