import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { ArticleViewSelector } from 'entities/Article';
import { getArticlesPageView } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { articlesPageActions } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { Select } from 'shared/ui/Select/Select';

import cls from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = (props: ArticlesPageFiltersProps) => {
    const { t } = useTranslation();

    const {
        className,
    } = props;
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);

    const onChangeView = React.useCallback((view) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    return (
        <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <Select label={t('Сортировать по')} />
                <ArticleViewSelector
                    view={view}
                    onViewClick={onChangeView}
                />
            </div>
            <Card className={cls.search}>
                <Input placeholder={t('Поиск')} />
            </Card>
        </div>
    );
};

ArticlesPageFilters.displayName = 'ArticlesPageFilters';
