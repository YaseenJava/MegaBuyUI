// import { createContext, useState, useEffect } from "react";
// import axios from "axios";

// const Logged = createContext();

// export default function LoggedUser({ children }) {
//   const [user, setUser] = useState({});
//   const [hasLoaded, setHasLoaded] = useState(false); // flag to track load

//   // Load user from localStorage on first render
//   useEffect(() => {
//     const stored = localStorage.getItem("user");
//     if (stored) {
//       setUser(JSON.parse(stored));
//     }
//     setHasLoaded(true);
//   }, []);

//   // Save to localStorage only after initial load
//   useEffect(() => {
//     if (hasLoaded) {
//       localStorage.setItem("user", JSON.stringify(user));
//     }
//   }, [user, hasLoaded]);

//   //Update rewards on server when rewards change
//   useEffect(() => {
    
//     const update = async () => {
//       console.log("sending to backend",user.email,user.rewards);
//       try{
//         const response = await axios.post(
//           "http://localhost:8080/updateRewards",
//           { email: user.email, rewards: user.rewards },
//           { headers: { "Content-Type": "application/json" } }
//         );
//         console.log("Response Rewards updated:", response);
//       } catch (err) {
//         console.error("Error updating rewards:", err);
//       }
//     };

//     if (user?.email && user?.rewards != null) {
//       update();
//     }
  
//   },[user.rewards]);


//   return (
//     <Logged.Provider value={{ user, setUser }}>
//       {children}
//     </Logged.Provider>
//   );
// }

// export { Logged, LoggedUser };
import { createContext, useState, useEffect } from "react";
import axios from "axios";

const Logged = createContext();

export default function LoggedUser({ children }) {
  const [user, setUser] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);

  // Load user from localStorage once
  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      setUser(JSON.parse(stored));
    }
    setHasLoaded(true);
  }, []);

  // Save to localStorage whenever user changes (after initial load)
  useEffect(() => {
    if (hasLoaded) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user, hasLoaded]);

  // Update rewards on backend if rewards change
  useEffect(() => {
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

    if (user?.email && user?.rewards != null) {
      update();
    }
  }, [user.rewards]); // Only fires when rewards value changes

  return (
    <Logged.Provider value={{ user, setUser }}>
      {children}
    </Logged.Provider>
  );
}

export { Logged, LoggedUser };
