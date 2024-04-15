import React from 'react';

import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from '../lib/ThemeContext';
// Из-за того что лс это строка, приводим его через as
const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
    initialTheme?: Theme;
    children: React.ReactNode;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
    const {
        initialTheme,
        children,
    } = props;
    const [theme, setTheme] = React.useState<Theme>(initialTheme || defaultTheme);

    const defaultProps = React.useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    React.useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
