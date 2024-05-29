import { Route, Routes } from 'react-router-dom';
import { RouteConfig } from 'shared/config/routeConfig/RouteConfig';



export const AppRouter = () => {

    return (
        <Routes>
            {Object.values(RouteConfig).map(route => (
                <Route
                    path={route.path}
                    element={route.element}
                />
            ))}
        </Routes>
    );
};
