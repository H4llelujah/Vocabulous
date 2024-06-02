import { useTranslation } from 'react-i18next';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { useMemo } from 'react';
import { NavbarItemList } from 'widget/Navbar/model/item';
import Logo from 'shared/assets/icons/logo.png';
import cls from './Navbar.module.scss';
import { NavbarItem } from '../NavbarItem/NavbarItem';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const NavbarLinkList = useMemo(() => NavbarItemList.map((item) => (
        <NavbarItem
            item={item}
            key={item.path}
        />
    )), []);

    const mods: Mods = {
        [cls.show]: true,
        not_show: false,
        shadows: false,
        red: true,
    };

    return (
        <div className={classNames(cls.Navbar, mods, [className])}>
            <img className={cls.logo} src={Logo} alt="" />
            <div className="links">
                {NavbarLinkList}
            </div>
            <div className="user_panel">
                {t('Panel')}
            </div>
        </div>
    );
};
