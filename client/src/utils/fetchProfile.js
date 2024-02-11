import { axiosInstance } from "../services/axios";

/**
 * Fetches the user profile from the server.
 * @param {function} setUser - A function to update the user state with fetched data.
 * @returns {Promise<void>} A promise that resolves when the profile is fetched and updated.
 */
export const fetchProfile = async (setUser) => {
  try {
    const response = await axiosInstance.get("/api/user/profile");
    setUser(response.data);
  } catch (error) {
    console.error("Error fetching user profile:", error);
  }
};
