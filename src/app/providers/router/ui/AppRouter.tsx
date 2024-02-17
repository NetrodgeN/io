import React from 'react';
import {
    Route,
    Routes,
} from 'react-router-dom';
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from './RequireAuth';

export const AppRouter = React.memo(() => {
    const renderWithWrapper = React.useCallback((route: AppRoutesProps) => {
        const element = (
            <div className="page-wrapper">
                {route.element}
            </div>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
        );
    }, []);

    return (
        <React.Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routeConfig).map(renderWithWrapper)}
                {/* .map(({ element, path }) => ( */}
                {/*    <Route */}
                {/*        key={path} */}
                {/*        element={( */}
                {/*            <div className="page-wrapper"> */}
                {/*                {element} */}
                {/*            </div> */}
                {/*        )} */}
                {/*        path={path} */}
                {/*    /> */}
                {/* ))} */}
            </Routes>
        </React.Suspense>
    );
});

AppRouter.displayName = 'AppRouter';
