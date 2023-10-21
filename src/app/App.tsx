import React from 'react';
import './styles/index.scss';
import {Link} from 'react-router-dom';


import {UseTheme} from "app/providers/ThemePropvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";

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
            <AppRouter />

        </div>
    );
};

export default App;
