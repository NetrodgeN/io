import React from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { Card, CardTheme } from '../Card/Card';

import cls from './Tabs.module.scss';

export interface TabItem {
    value: string;
    content: React.ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
}

export const Tabs = React.memo((props: TabsProps) => {
    const {
        className,
        tabs,
        onTabClick,
        value,
    } = props;

    const onClickHandle = React.useCallback((tab: TabItem) => () => {
        onTabClick(tab);
    }, [onTabClick]);

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
                    key={tab.value}
                    className={cls.tab}
                    onClick={onClickHandle(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});

Tabs.displayName = 'Tabs';
