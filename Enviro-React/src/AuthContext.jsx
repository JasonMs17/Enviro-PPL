import { createContext, useEffect, useState } from "react";
import { http } from "/src/utils/fetch"; // import http function

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const clearUserData = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    // console.log("Stored user:", storedUser);

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      // Verify session validity immediately after setting user from localStorage
      verifySession();
    } else {
      fetchUserFromSession();
    }
  }, []);

  const verifySession = async () => {
    try {
      const response = await http("/api/user", {
        method: "GET",
      });

      // console.log("Response received:", response);

      if (!response.ok) {
        throw new Error("Session invalid");
      }

      const text = await response.text(); // Get the raw response text
      console.log("Raw response text:", text);

      if (text) {
        const data = JSON.parse(text); // Parse the response as JSON
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
      } else {
        throw new Error("Empty response body");
      }
    } catch (error) {
      console.error("Session verification failed:", error);
      clearUserData();
    } finally {
      setLoading(false);
    }
  };

  const fetchUserFromSession = async () => {
    try {
      const response = await http("/api/user", {
        method: "GET",
      });

      // console.log("Response received:", response);

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const text = await response.text(); // Get the raw response text
      console.log("Raw response text:", text);

      if (text) {
        const data = JSON.parse(text); // Parse the response as JSON
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
      } else {
        throw new Error("Empty response body");
      }
    } catch (error) {
      console.error("Error fetching user from session:", error);
      clearUserData();
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    clearUserData();
    setLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, loading, logout, verifySession }}
    >
      {children}
    </AuthContext.Provider>
  );
};
