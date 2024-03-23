import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getArticleDetailsData } from 'entities/Article';
import { getUserAuthData } from 'entities/User';
import { getCanEditArticle } from 'pages/ArticleDetailsPage/model/selectors/article';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import cls from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = React.memo((props: ArticleDetailsPageHeaderProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();
    const navigate = useNavigate();
    const userData = useSelector(getUserAuthData);
    const article = useSelector(getArticleDetailsData);
    const canEdit = useSelector(getCanEditArticle);

    const onBackToList = React.useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onEditArticle = React.useCallback(() => {
        navigate(`${RoutePath.article_details}${article?.id}/edit`);
    }, [article?.id, navigate]);

    return (
        <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
            <Button
                label={t('Назад к списку')}
                theme={ButtonTheme.OUTLINE}
                onClick={onBackToList}
            />
            {
                canEdit && (
                    <Button
                        className={cls.editBtn}
                        label={t('Редактировать')}
                        theme={ButtonTheme.OUTLINE}
                        onClick={onEditArticle}
                    />
                )
            }

        </div>
    );
});

ArticleDetailsPageHeader.displayName = 'ArticleDetailsPageHeader';
