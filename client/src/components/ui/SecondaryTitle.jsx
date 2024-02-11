/**
 * SecondaryTitle component for rendering a secondary title.
 * @module SecondaryTitle
 * @param {object} props - The properties passed to the component.
 * @param {string} props.title - The title text to be displayed.
 * @param {object} [props.props] - Additional properties for the title element.
 * @param {string} [props.props.className] - Additional classes for the title element.
 * @returns {JSX.Element} The JSX element representing the secondary title.
 */

export const SecondaryTitle = ({ title, props }) => {
  return (
    <h3
      {...props}
      className={`text-center text-xl font-extrabold ${props?.className}`}
    >
      {title}
    </h3>
  );
};
