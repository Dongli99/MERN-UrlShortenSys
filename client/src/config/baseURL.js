export const BaseURL =
  import.meta.env.VITE_USER_NODE_ENV === "development"
    ? import.meta.env.VITE_BASE_URL
    : import.meta.env.VITE_REACT_API_URL;
