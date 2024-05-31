import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { AdditionalCls, Mods, classNames } from 'shared/lib/classNames/ClassNames';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const mods: Mods = {
        [cls.show]: true,
        [cls.notShow]: false,
    };

    const AdditionalClasses: AdditionalCls = [
        cls.add,
        cls.addColor,
    ];

    return (
        <div className={classNames('test', mods, AdditionalClasses)}>
            <Link to="/">{t('Главная')}</Link>
            <Link to="/about">{t('О нас')}</Link>
        </div>
    );
};
