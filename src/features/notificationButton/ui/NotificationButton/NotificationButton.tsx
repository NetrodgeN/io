import React from 'react';
import {
    BrowserView, MobileView, isBrowser, isMobile,
} from 'react-device-detect';

import { NotificationList } from '@/entities/Notification';
import NotificationIcon from '@/shared/assets/icons/bell.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AnimationProvider } from '@/shared/lib/components/AnimationProvider';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Popover } from '@/shared/ui/Popups';

import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = React.memo((props: NotificationButtonProps) => {
    const {
        className,
    } = props;
    const [isOpen, setIsOpen] = React.useState(false);

    const onOpenDrawer = React.useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = React.useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <Button
            onClick={onOpenDrawer}
            theme={ButtonTheme.CLEAR}
            label={(
                <Icon
                    Svg={NotificationIcon}
                    inverted
                />
            )}
        />
    );

    return (
        <div>
            <BrowserView>
                <Popover
                    className={classNames(cls.NotificationButton, {}, [className])}
                    direction="bottom left"
                    trigger={trigger}
                >
                    <NotificationList className={cls.notifications} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <AnimationProvider>
                    <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                        <NotificationList />
                    </Drawer>
                </AnimationProvider>
            </MobileView>
        </div>
    );
});

NotificationButton.displayName = 'NotificationButton';
