import React from 'react';
import './styles/index.scss';
import {
    Link,
    Route,
    Routes
} from 'react-router-dom';

import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {UseTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

const App = () => {
    const {theme, toggleTheme} = UseTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>
                Главная
            </Link>
            <Link to={'/about'}>
                О сайте
            </Link>
            <React.Suspense fallback={<div>Loading...</div>}>
                <Routes>
                        <Route
                            path={'/about'}
                            element={<AboutPageAsync />}
                        />
                        <Route
                            path={'/'}
                            element={<MainPageAsync />}
                        />
                </Routes>
            </React.Suspense>

        </div>
    );
};

export default App;
