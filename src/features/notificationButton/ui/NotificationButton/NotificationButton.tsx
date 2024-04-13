import React from 'react';

import { NotificationList } from 'entities/Notification';
import NotificationIcon from 'shared/assets/icons/bell.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { Popover } from 'shared/ui/Popups';

import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = React.memo((props: NotificationButtonProps) => {
    const {
        className,
    } = props;

    return (
        <Popover
            className={classNames(cls.NotificationButton, {}, [className])}
            direction="bottom left"
            trigger={(
                <Button
                    theme={ButtonTheme.CLEAR}
                    label={(
                        <Icon
                            Svg={NotificationIcon}
                            inverted
                        />
                    )}
                />
            )}
        >
            <NotificationList className={cls.notifications} />
        </Popover>
    );
});

NotificationButton.displayName = 'NotificationButton';
