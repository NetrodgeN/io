import React from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = ({
    className,
    src,
    size,
    alt,
}: AvatarProps) => {
    const styles = React.useMemo<React.CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);

    return (
        <img
            alt={alt}
            src={src}
            className={classNames(cls.Avatar, {}, [className])}
            style={styles}
        />
    );
};

Avatar.displayName = 'Avatar';
