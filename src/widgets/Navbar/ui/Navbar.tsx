import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUserName';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = React.memo(({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = React.useState(false);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);
    const onCloseModal = React.useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = React.useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = React.useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text
                    theme={TextTheme.INVERTED}
                    className={cls.appName}
                    title={t('Netrodgen App')}
                />
                <AppLink
                    to={RoutePath.article_create}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.createLink}
                >
                    {t('Создать статью')}
                </AppLink>
                <Dropdown
                    direction="bottom left"
                    className={cls.dropdown}
                    items={[
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
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                label={t('Войти')}
                onClick={onShowModal}
            />
            {
                isAuthModal && (
                    <LoginModal
                        onClose={onCloseModal}
                        isOpen={isAuthModal}
                    />
                )
            }

        </header>
    );
});

Navbar.displayName = 'Navbar';
