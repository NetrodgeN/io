import React from 'react';

export enum Theme {
    LIGHT = 'app_light_theme',
    DARK = 'app_dark_theme',
    GARISH_BLUE = 'app_garish_blue_theme',
}

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = React.createContext<ThemeContextProps>({});
