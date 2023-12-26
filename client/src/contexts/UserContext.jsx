import { createContext, useEffect, useState } from "react";
import { axiosInstance } from "../services/axios";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const fetchProfile = async () => {
    try {
      const response = await axiosInstance.get("/profile");
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };
  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
