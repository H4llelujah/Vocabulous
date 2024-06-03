import { RouteProps } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { MainPage } from 'pages/MainPage';
import { ModulesPage } from 'pages/ModulesPage';
import { ModuleDetailPage } from 'pages/ModuleDetailPage';
import { TestCreationPage } from 'pages/TestCreationPage';
import { TopicsPage } from 'pages/TopicsPage';
import { TranslatorPage } from 'pages/TranslatorPage';

type AppRouterProps = RouteProps;

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    MODULES = 'modules',
    MODULE_DETAILS = 'module_details',
    TEST_CREATION = 'test_creation',
    TOPICS = 'topics',
    TRANSLATOR = 'translator',
    // last
    NOT_FOUND = 'not_found'
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.MODULES]: '/modules',
    [AppRoutes.MODULE_DETAILS]: '/modules/', // + id
    [AppRoutes.TEST_CREATION]: '/test',
    [AppRoutes.TOPICS]: '/topics',
    [AppRoutes.TRANSLATOR]: '/translator',
    // last
    [AppRoutes.NOT_FOUND]: '/*',
};

export const RouteConfig: Record<AppRoutes, AppRouterProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePaths.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePaths.about,
        element: <AboutPage />,
    },
    [AppRoutes.MODULES]: {
        path: RoutePaths.modules,
        element: <ModulesPage />,
    },
    [AppRoutes.MODULE_DETAILS]: {
        path: `${RoutePaths.module_details}:id`,
        element: <ModuleDetailPage />,
    },
    [AppRoutes.TEST_CREATION]: {
        path: RoutePaths.test_creation,
        element: <TestCreationPage />,
    },
    [AppRoutes.TOPICS]: {
        path: RoutePaths.topics,
        element: <TopicsPage />,
    },
    [AppRoutes.TRANSLATOR]: {
        path: RoutePaths.translator,
        element: <TranslatorPage />,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePaths.not_found,
        element: <NotFoundPage />,
    },
};
