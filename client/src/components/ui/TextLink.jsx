import { Link } from "react-router-dom";

/**
 * TextLink component for rendering a text link.
 * @module TextLink
 * @param {object} props - The properties passed to the component.
 * @param {ReactNode} props.children - The content of the link.
 * @param {object} [props.props] - Additional properties for the Link component.
 * @param {string} [props.props.className] - Additional classes for the Link component.
 * @returns {JSX.Element} The JSX element representing the text link.
 */
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
