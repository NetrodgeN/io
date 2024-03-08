import React, { MutableRefObject } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';

import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children: React.ReactNode;
    onScrollEnd?: () => void;
}

export const Page = React.memo((props: PageProps) => {
    const {
        className,
        children,
        onScrollEnd,
    } = props;

    const wrapperRef = React.useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = React.useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    return (
        <section
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
        >
            {children}
            <div ref={triggerRef} />
        </section>
    );
});

Page.displayName = 'Page';
