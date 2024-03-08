import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUserName';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

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
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={cls.links}
                    label={t('Выйти')}
                    onClick={onLogout}
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
