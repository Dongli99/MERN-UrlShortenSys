/**
 * FlexLine component for rendering a line of flex items.
 * @module FlexLine
 * @param {object} props - The properties passed to the component.
 * @param {JSX.Element} props.children - The child elements of the flex line.
 * @param {object} [props.props={}] - Additional properties for the flex line container.
 * @param {string} [props.props.className=""] - Additional classes for the flex line container.
 * @returns {JSX.Element} The JSX element representing the flex line.
 */

export const FlexLine = ({ children, props = {} }) => {
  return (
    <div
      className={`flex items-center justify-between ${props.className || ""}`}
    >
      {children}
    </div>
  );
};
