import { classNames } from 'shared/lib/classNames/classNames';
import {
    ButtonHTMLAttributes,
} from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    label?: string;
    theme?: ThemeButton;
}

export const Button = (props: ButtonProps) => {
    const {
        className,
        theme,
        label,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {label}
        </button>
    );
};

Button.displayName = 'Button';
