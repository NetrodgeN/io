import React from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import {
    Navigate,
    useLocation,
} from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export function RequireAuth({ children }: { children: JSX.Element }) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();

    if (!auth) {
        // Перенаправляем их на страницу /login, но сохраняем текущее местоположение, где они находились
        // пытаемся перейти туда, где они были перенаправлены. Это позволяет нам отправлять их
        // переходом на эту страницу после входа в систему, что более удобно для пользователя
        // чем размещать их на главной странице.
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    return children;
}
