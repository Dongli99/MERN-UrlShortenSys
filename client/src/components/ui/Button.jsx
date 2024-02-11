/**
 * Button component for rendering a clickable button.
 * @module Button
 * @param {object} props - The properties passed to the component.
 * @param {JSX.Element} props.children - The child elements of the button.
 * @param {boolean} [props.fullWidth=true] - Whether the button should span the full width of its container.
 * @param {string} [props.className=""] - Additional classes for the button.
 * @returns {JSX.Element} The JSX element representing the button.
 */

export const Button = ({ children, fullWidth = true, ...props }) => {
  return (
    <button
      {...props}
      className={`group relative ${
        fullWidth ? "w-full" : ""
      } flex justify-center py-2 
            px-4 border border-transparent text-sm font-medium rounded-md
             text-white bg-primary hover:bg-secondary 
             focus:outline-none focus:ring-2 focus:ring-offset-2 
             focus:ring-secondary ${props.className}`}
    >
      {children}
    </button>
  );
};
