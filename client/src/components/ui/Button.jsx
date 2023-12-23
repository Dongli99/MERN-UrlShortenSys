export const Button = ({ children, ...props }) => {
    return (
        <button 
            {...props}
            className={`group relative w-full flex justify-center py-2 
            px-4 border border-transparent text-sm font-medium rounded-md
             text-white bg-primary hover:bg-secondary 
             focus:outline-none focus:ring-2 focus:ring-offset-2 
             focus:ring-secondary ${props.className}`}
        >
            {children}
        </button>
    );
}