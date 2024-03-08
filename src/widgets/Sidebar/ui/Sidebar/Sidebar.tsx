import React from 'react';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import {
    Button,
    ButtonSize,
    ButtonTheme,
} from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import { getSidebarItems } from '../../model/selector/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = React.memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = React.useState(false);

    const sidebarItemsList = useSelector(getSidebarItems);

    const onToggle = () => {
        setCollapsed((prevState) => !prevState);
    };

    const itemList = React.useMemo(() => (
        sidebarItemsList.map((item) => (
            <SidebarItem
                item={item}
                collapsed={collapsed}
                key={item.path}
            />
        ))
    ), [collapsed, sidebarItemsList]);

    return (
        <menu
            data-testid="sidebar"
            className={classNames(
                cls.Sidebar,
                { [cls.collapsed]: collapsed },
                [className],
            )}
        >
            <Button
                className={cls.collapseBtn}
                data-testid="sidebar-toggle"
                type="button"
                onClick={onToggle}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                label={collapsed ? '>' : '<'}
                size={ButtonSize.L}
                square
            />
            <div className={cls.items}>
                {itemList}
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </menu>
    );
});

Sidebar.displayName = 'Sidebar';
