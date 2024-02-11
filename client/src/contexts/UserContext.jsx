import { createContext, useEffect, useState } from "react";
import { fetchProfile } from "../utils/fetchProfile";

/**
 * Context for managing user data throughout the application.
 * @type {React.Context}
 */
export const UserContext = createContext({});

/**
 * Provider component for the UserContext.
 * Manages the user state and provides it to the context.
 * @param {object} children - The children components to be wrapped by the provider.
 * @returns {JSX.Element} Provider component with user context.
 */
export const UserContextProvider = ({ children }) => {
  /**
   * State variable to hold user data.
   * @type {object | null}
   */
  const [user, setUser] = useState(null);
  useEffect(() => {
    // Fetch user profile data when component mounts.
    fetchProfile(setUser);
  }, []);

  return (
    // Provide user data to the context.
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
