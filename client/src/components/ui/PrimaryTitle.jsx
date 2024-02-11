/**
 * PrimaryTitle component for rendering a primary title.
 * @module PrimaryTitle
 * @param {object} props - The properties passed to the component.
 * @param {string} props.title - The title text to be displayed.
 * @param {object} [props.props] - Additional properties for the title element.
 * @param {string} [props.props.className] - Additional classes for the title element.
 * @returns {JSX.Element} The JSX element representing the primary title.
 */

export const PrimaryTitle = ({ title, props }) => {
  return (
    <h2
      {...props}
      className={`text-center text-2xl font-extrabold ${props?.className}`}
    >
      {title}
    </h2>
  );
};
