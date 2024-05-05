import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUserName';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { NotificationButton } from '@/features/notificationButton';
import { RoutePath } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    AppLink,
    AppLinkTheme,
} from '@/shared/ui/AppLink';
import {
    Button,
    ButtonTheme,
} from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import {
    Text,
    TextTheme,
} from '@/shared/ui/Text';

import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = React.memo(({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = React.useState(false);
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const onCloseModal = React.useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = React.useCallback(() => {
        setIsAuthModal(true);
    }, []);

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
                <HStack gap="16" className={cls.actions}>
                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>
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
