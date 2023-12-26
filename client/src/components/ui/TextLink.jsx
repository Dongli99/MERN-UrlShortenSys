import { Link } from "react-router-dom";

export const TextLink = ({ children, ...props }) => {
  return (
    <Link
      {...props}
      className="flex p-2 items-center text rounded gap-5 hover:bg-primary hover:text-white"
    >
      {children}
    </Link>
  );
};
