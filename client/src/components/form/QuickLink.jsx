export const QuickLink = ({href, text}) => {
    // Provide a quick link to help user to redirect to another page.
    return(
        <div className="text-sm">
            <a href={href} 
            className="font-medium text-indigo-600 hover:text-indigo-500"
            >
                {text}
            </a>
        </div>
    );
}