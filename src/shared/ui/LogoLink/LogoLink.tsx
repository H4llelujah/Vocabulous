import { useTranslation } from 'react-i18next';
import Logo from 'shared/assets/icons/logo.png';
import { RoutePaths } from 'shared/config/routeConfig/RouteConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from '../AppLink/AppLink';

interface LogoLinkProps {
    className?: string;
}

export const LogoLink = ({ className }: LogoLinkProps) => {
    const { t } = useTranslation();
    return (
        <AppLink className={classNames('', {}, [className])} to={RoutePaths.main}>
            <img src={Logo} alt="" />
        </AppLink>
    );
};
