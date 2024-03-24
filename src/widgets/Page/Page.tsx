import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { StateSchema } from 'app/providers/StoreProvider';
import {
    getScrollByPath,
    scrollSaveActions,
} from 'features/ScrollSave';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';

import cls from './Page.module.scss';

export const PAGE_ID = 'PAGE_ID';

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

    const wrapperRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;
    const triggerRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;

    const dispatch = useAppDispatch();
    const { pathname } = useLocation();

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    const scrollPosition = useSelector((state: StateSchema) => getScrollByPath(state, pathname));

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const onScroll = useThrottle((e: React.UIEvent<HTMLDivElement>) => {
        dispatch(scrollSaveActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname,
        }));
    }, 2000);

    return (
        <section
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
            onScroll={onScroll}
            id={PAGE_ID}
        >
            {children}
            {onScrollEnd && (
                <div
                    className={cls.trigger}
                    ref={triggerRef}
                />
            )}
        </section>
    );
});

Page.displayName = 'Page';
