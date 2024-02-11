/**
 * InputGroup component for forms.
 * This component represents a group container for form input elements.
 * @module InputGroup
 * @param {object} props - The properties passed to the component.
 * @param {JSX.Element[]} props.children - The input elements to be grouped together.
 * @returns {JSX.Element} The JSX element representing the input group container.
 */

export const InputGroup = ({ children }) => {
  return <div className="rounded-md shadow-sm -space-y-px">{children}</div>;
};
