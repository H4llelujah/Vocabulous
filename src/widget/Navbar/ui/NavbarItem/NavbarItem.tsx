import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { NavbarItemType } from 'widget/Navbar/model/item';

interface NavbarItemProps {
    className?: string;
    item: NavbarItemType;
}

export const NavbarItem = (props: NavbarItemProps) => {
    const { className, item } = props;
    const { t } = useTranslation();
    return (
        <AppLink
            className={classNames('', {}, [className])}
            to={item.path}
        >
            {t(item.text)}
        </AppLink>
    );
};
