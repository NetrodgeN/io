import React from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './RatingCard.module.scss';

interface RatingCardProps {
    className?: string;
}

export const RatingCard = React.memo((props: RatingCardProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.RatingCard, {}, [className])} />
    );
});

RatingCard.displayName = 'RatingCard';
