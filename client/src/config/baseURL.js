/**
 * Base URL configuration for the client-side API requests.
 * Determines the base URL based on the environment.
 * @type {string}
 */

export const BaseURL =
  import.meta.env.VITE_USER_NODE_ENV === "development"
    ? import.meta.env.VITE_BASE_URL
    : import.meta.env.VITE_REACT_API_URL;
