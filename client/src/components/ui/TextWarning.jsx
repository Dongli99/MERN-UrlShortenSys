/**
 * TextWarning component for rendering a warning message.
 * @module TextWarning
 * @param {object} props - The properties passed to the component.
 * @param {string} props.message - The warning message to be displayed.
 * @returns {JSX.Element} The JSX element representing the warning message.
 */

export const TextWarning = ({ message }) => {
  return <div className="text-red-500 text-sm mt-1">{message}</div>;
};
