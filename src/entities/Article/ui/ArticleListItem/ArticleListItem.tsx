import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import EyeIcon from 'shared/assets/icons/eye.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import {
    Button,
    ButtonTheme,
} from 'shared/ui/Button/Button';
import { Card } from 'shared/ui/Card/Card';
import { Icon } from 'shared/ui/Icon/Icon';
import { Text } from 'shared/ui/Text/Text';

import {
    Article,
    ArticleBlockType, ArticleTextBlock,
    ArticleView,
} from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string;
    article?: Article;
    view: ArticleView;
}

export const ArticleListItem = React.memo((props: ArticleListItemProps) => {
    const {
        article,
        view,
        className,
    } = props;

    const { t } = useTranslation();

    const navigate = useNavigate();

    const onOpenArticle = React.useCallback(() => {
        navigate(`${RoutePath.article_details}${article?.id}`);
    }, [article?.id, navigate]);

    const types = <Text text={article?.type.join(', ')} className={cls.types} />;
    const views = (
        <>
            <Text text={String(article?.views)} className={cls.views} />
            <Icon Svg={EyeIcon} />
        </>
    );

    const textBlock = article?.blocks
        .find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

    if (view === ArticleView.BIG) {
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Avatar size={30} src={article?.user.avatar} />
                        <Text text={article?.user.username} className={cls.username} />
                        <Text text={article?.createdAt} className={cls.date} />
                    </div>
                    <Text title={article?.title} className={cls.title} />
                    {types}
                    <img src={article?.img} className={cls.img} alt={article?.title} />
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
                    )}

                    <div className={cls.footer}>
                        <Button
                            onClick={onOpenArticle}
                            theme={ButtonTheme.OUTLINE}
                            label={t('Читать далее..')}
                        />
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card onClick={onOpenArticle}>
                <div className={cls.imageWrapper}>
                    <img src={article?.img} alt={article?.title} className={cls.img} />
                    <Text text={article?.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}

                </div>
                <Text text={article?.title} className={cls.title} />
            </Card>
        </div>
    );
});

ArticleListItem.displayName = 'ArticleListItem';
