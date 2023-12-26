import { axiosInstance } from "../services/axios";

// A additional utils function can be explicitly called from pages
// to ensure the userContext being called immediately.

export const fetchProfile = async (setUser) => {
  try {
    const response = await axiosInstance.get("/profile");
    setUser(response.data);
  } catch (error) {
    console.error("Error fetching user profile:", error);
  }
};
