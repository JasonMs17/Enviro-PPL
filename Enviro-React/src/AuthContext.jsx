import { createContext, useEffect, useState } from "react";
import { http } from "/src/utils/fetch"; // import http function

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setLoading(false);
    } else {
      fetchUserFromSession();
    }
  }, []);

  const fetchUserFromSession = async () => {
    try {
      const response = await http("/api/user", {
        method: "GET",
      });

      if (!response.ok) {1
        throw new Error("Failed to fetch user data");
      }

      const data = await response.json();
      setUser(data);
      localStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      console.error("Error fetching user from session:", error);
      setUser(null);
      localStorage.removeItem("user");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, setUser, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
