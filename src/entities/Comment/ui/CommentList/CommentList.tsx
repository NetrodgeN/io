import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Comment } from 'entities/Comment';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { CommentCard } from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = React.memo((props: CommentListProps) => {
    const { t } = useTranslation('');

    const {
        comments,
        className,
        isLoading,
    } = props;

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard
                        className={cls.comment}
                        comment={comment}
                        isLoading={isLoading}
                    />
                ))
                : <Text title={t('Комментарии отсутствуют')} />}
        </div>
    );
});

CommentList.displayName = 'CommentList';
