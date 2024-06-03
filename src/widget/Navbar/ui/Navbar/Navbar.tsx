import { useTranslation } from 'react-i18next';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { useMemo } from 'react';
import { NavbarItemList } from 'widget/Navbar/model/item';
import ProfileIcon from 'shared/assets/icons/user.svg';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import { LogoLink } from 'shared/ui/LogoLink/LogoLink';
import { InteractionIcon } from 'shared/ui/InteractionIcon/InteractionIcon';
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
            <LogoLink className={cls.logo} />
            <div className={cls.links}>
                {NavbarLinkList}
            </div>
            <div className={cls.userPanel}>
                <InteractionIcon className={cls.notificationButton} Icon={NotificationIcon} />
                <InteractionIcon Icon={ProfileIcon} />
            </div>
        </div>
    );
};
