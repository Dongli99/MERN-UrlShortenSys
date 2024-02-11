/**
 * TextLineInput component for rendering a text input field with a label.
 * @module TextLineInput
 * @param {object} props - The properties passed to the component.
 * @param {object} props.lblProps - The properties for the label element.
 * @param {boolean} [props.fullWidth=true] - Whether the input should take full width.
 * @param {object} props.inpProps - The properties for the input element.
 * @returns {JSX.Element} The JSX element representing the text input field.
 */

export const TextLineInput = ({ lblProps, fullWidth = true, inpProps }) => {
  return (
    <div>
      {/* Label for the input */}
      <label {...lblProps} htmlFor={inpProps.id} className="sr-only">
        {lblProps.text}
      </label>
      {/* Input element */}
      <input
        {...inpProps}
        value={inpProps.value}
        className={`appearance-none rounded-none relative block ${
          fullWidth ? "w-full" : ""
        }  
        px-3 py-2 border border-gray-300 placeholder-gray-500 
        text-gray-900 rounded-b-md focus:outline-none
        focus:ring-secondary focus:border-secondary focus:z-10 
        sm:text-sm ${inpProps.className}`}
      />
    </div>
  );
};
