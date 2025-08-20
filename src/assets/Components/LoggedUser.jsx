import axios from "axios";
import { useState, createContext, useEffect } from "react";

const Logged = createContext();

export default function LoggedUser({ children }) {
  const [user, setUser] = useState({ username: "", email: "", rewards: 0 });
  const [hasLoaded, setHasLoaded] = useState(false);

  // Load user from localStorage once
  useEffect(() => {
    const stored = localStorage.getItem("user");
    console.log(user);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed && typeof parsed === "object") {
          setUser({
            username: parsed.username ?? "",
            email: parsed.email ?? "",
            rewards: parsed.rewards ?? 0,
          });
        }
      } catch (err) {
        console.error("Invalid JSON in localStorage for 'user':", stored);
        localStorage.removeItem("user");
      }
    }
    setHasLoaded(true);
  }, []);

  // Save user to localStorage only after it has been loaded
  useEffect(() => {
    if (hasLoaded) {
      console.log(user)
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user, hasLoaded]);

  // ✅ keep reward sync functionality as you had it
  useEffect(() => {
    if (user?.email && user?.rewards != null) {
      const update = async () => {
        console.log("Syncing rewards to backend:", user.email, user.rewards);
        try {
          await axios.post(
            "http://localhost:8080/updateRewards",
            { email: user.email, rewards: user.rewards },
            { headers: { "Content-Type": "application/json" } }
          );
        } catch (err) {
          console.error("Reward sync error:", err);
        }
      };
      update();
    }
  }, [user?.rewards]); 

  return (
    <Logged.Provider value={{ user, setUser }}>
      {children}
    </Logged.Provider>
  );
}

export { Logged, LoggedUser };
