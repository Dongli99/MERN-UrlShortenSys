export const TextLink = (props) => {
    return (
        <a href={props.href} className='flex items-center text-1.5xl gap-5 tracking-widest hover:bg-primary'>
            {props.children}
        </a>
    );
}