export const TextLineInput = ({ lblProps, fullWidth = true, inpProps }) => {
  return (
    <div>
      <label {...lblProps} htmlFor={inpProps.id} className="sr-only">
        {lblProps.text}
      </label>
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
