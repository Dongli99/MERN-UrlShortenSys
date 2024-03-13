import axios from "axios";

/**
 * Checks if a URL is reachable.
 * @param {string} url - The URL to check.
 * @returns {Promise<boolean>} A promise that resolves to true if the URL is reachable, otherwise false.
 */
export const isUrlReachable = async (url) => {
  try {
    await axios.get(url);
    return true;
  } catch {
    return false;
  }
};
