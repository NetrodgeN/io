import React from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';

import { Comment } from '../../model/types/comment';
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
    if (isLoading) {
        return (
            <div className={classNames(cls.CommentList, {}, [className])}>
                <CommentCard
                    className={cls.comment}
                    isLoading
                />
                <CommentCard
                    className={cls.comment}
                    isLoading
                />
                <CommentCard
                    className={cls.comment}
                    isLoading
                />
            </div>
        );
    }
    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard
                        key={comment.id}
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
