import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { AdditionalCls, Mods, classNames } from 'shared/lib/classNames/classNames';
import User from 'shared/assets/icons/user.svg';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div>
            <Link to="/">{t('Главная')}</Link>
            <Link to="/about">{t('О нас')}</Link>
            <User />
        </div>
    );
};
