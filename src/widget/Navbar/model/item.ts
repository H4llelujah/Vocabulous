import { RoutePaths } from 'shared/config/routeConfig/RouteConfig';

export interface NavbarItemType {
    path: string,
    text: string,
}

export const NavbarItemList: NavbarItemType[] = [
    {
        path: RoutePaths.modules,
        text: 'My modules',
    },
    {
        path: RoutePaths.topics,
        text: 'Topics',
    },
    {
        path: RoutePaths.test_creation,
        text: 'Create a test',
    },
    {
        path: RoutePaths.translator,
        text: 'Translator',
    },
];
