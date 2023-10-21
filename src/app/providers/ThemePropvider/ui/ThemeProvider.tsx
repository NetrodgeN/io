import React from "react";
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext
} from "../lib/ThemeContext";
//Из-за того что лс это строка, приводим его через as
const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

export const ThemeProvider: React.FC = ({children}) => {
    const [theme, setTheme] = React.useState<Theme>(defaultTheme);



    const defaultProps = React.useMemo(() => ({
        theme: theme,
        setTheme: setTheme,
    }),[theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
