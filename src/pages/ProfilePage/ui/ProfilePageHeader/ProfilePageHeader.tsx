import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
    getProfileData,
    getProfileReadonly,
    profileActions,
    updateProfileData,
} from 'entities/Profile';
import { getUserAuthData } from 'entities/User';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    Button,
    ButtonTheme,
} from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;
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
        <HStack max justify="between" className={classNames('', {}, [className])}>
            <Text title={t('Профиль')} />
            {canEdit && (
                <div>
                    { isReadonly ? (
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            label={t('Редактировать')}
                            onClick={onEdit}
                        />
                    ) : (
                        <HStack gap="8">
                            <Button
                                theme={ButtonTheme.OUTLINE_RED}
                                label={t('Отменить')}
                                onClick={onCancelEdit}
                            />

                            <Button
                                theme={ButtonTheme.OUTLINE}
                                label={t('Сохранить')}
                                onClick={onSave}
                            />
                        </HStack>
                    )}
                </div>
            )}
        </HStack>
    );
};

ProfilePageHeader.displayName = 'ProfilePageHeader';
