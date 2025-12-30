import { createContext, useEffect, useState } from "react";
import apiRequest from "../lib/apiRequest";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔑 SINGLE SOURCE OF TRUTH = BACKEND
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await apiRequest.get("/users/me");
        setCurrentUser(res.data);
      } catch (err) {
        // token invalid / expired / belongs to another project
        setCurrentUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const updateUser = (user) => {
    setCurrentUser(user);
  };

  if (loading) {
    return null; // or a loader
  }

  return (
    <AuthContext.Provider value={{ currentUser, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
