import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getArticleDetailsData } from '@/entities/Article';
import {
    getRouteArticleEdit,
    getRouteArticles,
} from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    Button,
    ButtonTheme,
} from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';

import { getCanEditArticle } from '../../model/selectors/article';

import cls from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = React.memo((props: ArticleDetailsPageHeaderProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('article-details');
    const navigate = useNavigate();
    const article = useSelector(getArticleDetailsData);
    const canEdit = useSelector(getCanEditArticle);

    const onBackToList = React.useCallback(() => {
        navigate(getRouteArticles());
    }, [navigate]);

    const onEditArticle = React.useCallback(() => {
        navigate(getRouteArticleEdit(article!.id));
        // eslint-disable-next-line
    }, [article?.id, navigate]);

    return (
        <HStack max justify="between" className={classNames('', {}, [className])}>
            <Button
                label={t('Назад к списку')}
                theme={ButtonTheme.OUTLINE}
                onClick={onBackToList}
            />
            {canEdit && (
                <Button
                    className={cls.editBtn}
                    label={t('Редактировать')}
                    theme={ButtonTheme.OUTLINE}
                    onClick={onEditArticle}
                />
            )}
        </HStack>
    );
});

ArticleDetailsPageHeader.displayName = 'ArticleDetailsPageHeader';
