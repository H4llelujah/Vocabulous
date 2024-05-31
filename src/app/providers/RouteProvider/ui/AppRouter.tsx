import { Route, Routes } from 'react-router-dom';
import { RouteConfig } from 'shared/config/routeConfig/RouteConfig';

export const AppRouter = () => (
    <Routes>
        {Object.values(RouteConfig).map((route) => (
            <Route
                key={route.path}
                path={route.path}
                element={route.element}
            />
        ))}
    </Routes>
);
