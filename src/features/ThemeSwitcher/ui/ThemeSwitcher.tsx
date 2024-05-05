import React from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';
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
