import React, {useCallback} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {Modal} from 'shared/ui/Modal/Modal';
import {useTranslation} from 'react-i18next';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = React.useState(false);
    const { t } = useTranslation();
    const onToggleModal = useCallback(() => {
        setIsAuthModal((prevState) => !prevState)
    }, [])
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                label={t('Войти')}
                onClick={onToggleModal}
            />
            <Modal
                isOpen={isAuthModal}
                onClose={onToggleModal}
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi distinctio eligendi placeat provident quis
                recusandae sequi! Accusantium beatae deserunt et excepturi, laborum nulla, perferendis quidem
                recusandae rem rerum sint sit!
            </Modal>
        </div>
    );
};

Navbar.displayName = 'Navbar';
