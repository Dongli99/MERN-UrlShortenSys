import { axiosInstance } from "../services/axios";

export const fetchProfile = async (setUser) => {
  try {
    const response = await axiosInstance.get("/profile");
    setUser(response.data);
  } catch (error) {
    console.error("Error fetching user profile:", error);
  }
};
