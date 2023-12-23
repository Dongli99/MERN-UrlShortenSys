export const TextLink = (props) => {
    return (
        <a 
        href={props.to} 
        className='flex p-2 items-center text-base rounded gap-5 hover:bg-primary hover:text-white'
        >
            {props.children}
        </a>
    );
}