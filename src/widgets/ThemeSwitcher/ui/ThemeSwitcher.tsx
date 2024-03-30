import React from 'react';

import { useTheme } from 'app/providers/ThemePropvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
// TODO: need refactoring
export const ThemeSwitcher = React.memo(() => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.OUTLINE_RED}
            size={ButtonSize.M}
            square
            className={classNames('', {}, [])}
            onClick={toggleTheme}
            label="*"
        />
    );
});

ThemeSwitcher.displayName = 'ThemeSwitcher';
