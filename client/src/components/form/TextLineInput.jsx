export const TextLineInput = ({ lblProps, inpProps }) => {
  return (
    <div>
      <label {...lblProps} htmlFor={inpProps.id} className="sr-only">
        {" "}
        {lblProps.text}
      </label>
      <input
        {...inpProps}
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
      />
    </div>
  );
};
