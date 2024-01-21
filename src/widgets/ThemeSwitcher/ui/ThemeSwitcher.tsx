import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { useTheme } from 'app/providers/ThemePropvider';
import cls from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = React.memo(() => {
    const { toggleTheme } = useTheme();

    return (
        <div className={classNames(cls.wrapper)}>
            <input
                type="checkbox"
                id="hideCheckbox"
                className={classNames(cls.hideCheckbox)}
            />
            <label
                onClick={toggleTheme}
                htmlFor="hideCheckbox"
                className={classNames(cls.toggle)}
            >
                <span className={classNames(cls.toggleButton)}>
                    <span className={classNames(cls.crater, {}, [cls.crater1])} />
                    <span className={classNames(cls.crater, {}, [cls.crater2])} />
                    <span className={classNames(cls.crater, {}, [cls.crater3])} />
                    <span className={classNames(cls.crater, {}, [cls.crater4])} />
                    <span className={classNames(cls.crater, {}, [cls.crater5])} />
                    <span className={classNames(cls.crater, {}, [cls.crater6])} />
                    <span className={classNames(cls.crater, {}, [cls.crater7])} />
                </span>
                <span className={classNames(cls.star, {}, [cls.star1])} />
                <span className={classNames(cls.star, {}, [cls.star2])} />
                <span className={classNames(cls.star, {}, [cls.star3])} />
                <span className={classNames(cls.star, {}, [cls.star4])} />
                <span className={classNames(cls.star, {}, [cls.star5])} />
                <span className={classNames(cls.star, {}, [cls.star6])} />
                <span className={classNames(cls.star, {}, [cls.star7])} />
                <span className={classNames(cls.star, {}, [cls.star8])} />
            </label>
        </div>
    );
});

ThemeSwitcher.displayName = 'ThemeSwitcher';
