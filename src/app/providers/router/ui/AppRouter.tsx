import React from 'react';
import {
    Route,
    Routes,
} from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

export const AppRouter = React.memo(() => {
    const isAuth = useSelector(getUserAuthData);

    const routes = React.useMemo(() => Object.values(routeConfig).filter((route) => {
        if (route.authOnly && !isAuth) {
            return false;
        }
        return true;
    }), [isAuth]);

    return (
        <React.Suspense fallback={<PageLoader />}>
            <Routes>
                {routes
                    .map(({ element, path }) => (
                        <Route
                            key={path}
                            element={(
                                <div className="page-wrapper">
                                    {element}
                                </div>
                            )}
                            path={path}
                        />
                    ))}
            </Routes>
        </React.Suspense>
    );
});

AppRouter.displayName = 'AppRouter';
