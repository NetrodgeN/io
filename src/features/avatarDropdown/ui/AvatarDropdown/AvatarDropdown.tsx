import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Dropdown } from 'shared/ui/Popups';


interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = React.memo((props: AvatarDropdownProps) => {
    const {
        className,
    } = props;

    const dispatch = useDispatch();

    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const isAdminPanelAvailable = isAdmin || isManager;

    const onLogout = React.useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const { t } = useTranslation();
    if (!authData) {
        return null;
    }
    return (
        <Dropdown
            className={classNames('', {}, [className])}
            direction="bottom left"
            items={[
                ...(isAdminPanelAvailable ? [{
                    content: t('Админка'),
                    href: RoutePath.admin_panel,
                }] : []),
                {
                    content: t('Профиль'),
                    href: RoutePath.profile + authData.id,
                },
                {
                    content: t('Выйти'),
                    onClick: onLogout,
                },
            ]}
            trigger={<Avatar size={30} src={authData.avatar} />}
        />
    );
});

AvatarDropdown.displayName = 'AvatarDropdown';
