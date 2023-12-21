import { Link } from 'react-router-dom';
import Logo from '../assets/logo_titled.png';
import { TextLink } from './TextLink';

export const Navbar = () => {
    return (
        <nav className='flex px-6 py-4 justify-between'>
            <Link to={'/'} className='flex items-center'>
                <img src={Logo} alt="URL Shorten System" className='h-10'/>
            </Link>
            <div className='flex items-center text-1.5xl gap-5 tracking-widest'>
                <div>-</div>
                <TextLink to={'/'}>SHORTEN</TextLink>
                <div>-</div>
                <Link to={'/myurl'}>MY URL</Link>
                <div>-</div>
                <Link to={'/about'}>ABOUT</Link>
                <div>-</div>
            </div>
            <div className='flex items-center text-xl gap-3 font-light'>
                <Link to={'/signup'}>Sign Up</Link>
                <div>/</div>
                <Link to={'/login'}>Log In</Link>
            </div>
        </nav>
    )
}