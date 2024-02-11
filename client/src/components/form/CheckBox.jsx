/**
 * Checkbox component for forms.
 * This component represents a checkbox input field used in forms.
 * @module Checkbox
 * @param {object} props - The properties passed to the component.
 * @param {string} props.id - The id of the checkbox.
 * @param {function} props.onChange - The function to handle change events.
 * @param {boolean} props.isChecked - The state indicating whether the checkbox is checked.
 * @param {ReactNode} props.children - The child elements to be rendered inside the checkbox label.
 * @returns {JSX.Element} The JSX element representing the checkbox.
 */

export const Checkbox = ({ children, ...props }) => {
  return (
    <div className="flex items-center mb-4">
      {/* Checkbox input */}
      <input
        id={props.id}
        onChange={props.onChange}
        type="checkbox"
        checked={props.isChecked}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded
         focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 
         focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      {/* Checkbox label */}
      <label
        htmlFor={props.id}
        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {children}
      </label>
    </div>
  );
};
