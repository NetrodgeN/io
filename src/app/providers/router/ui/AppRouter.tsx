import React from 'react';
import {
    Route,
    Routes,
} from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter = () => (
    <React.Suspense fallback={<PageLoader />}>
        <Routes>
            {Object
                .values(routeConfig)
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

AppRouter.displayName = 'AppRouter';
