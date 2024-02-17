import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import {
    Button,
    ButtonTheme,
} from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import {
    getProfileReadonly,
    profileActions,
    updateProfileData,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation();
    const isReadonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = React.useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = React.useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = React.useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль')} />
            { isReadonly ? (
                <Button
                    className={cls.editBtn}
                    theme={ButtonTheme.OUTLINE}
                    label={t('Редактировать')}
                    onClick={onEdit}
                />
            ) : (
                <>
                    <Button
                        className={cls.editBtn}
                        theme={ButtonTheme.OUTLINE_RED}
                        label={t('Отменить')}
                        onClick={onCancelEdit}
                    />

                    <Button
                        className={cls.saveBtn}
                        theme={ButtonTheme.OUTLINE}
                        label={t('Сохранить')}
                        onClick={onSave}
                    />
                </>
            )}
        </div>
    );
};

ProfilePageHeader.displayName = 'ProfilePageHeader';
