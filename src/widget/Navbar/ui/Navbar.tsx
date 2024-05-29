import { Link } from 'react-router-dom';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {

    return (
        <div>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>About</Link>
        </div>
    );
};
