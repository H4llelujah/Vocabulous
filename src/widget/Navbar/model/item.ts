import { RoutePaths } from 'shared/config/routeConfig/RouteConfig';

export interface NavbarItemType {
    path: string,
    text: string,
}

export const NavbarItemList: NavbarItemType[] = [
    {
        path: RoutePaths.main,
        text: 'Главная',
    },
    {
        path: RoutePaths.about,
        text: 'О нас',
    },
];
