import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page/Page';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = React.memo((props: ArticleEditPageProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();
    const { id } = useParams<{id: string}>();
    const isEdit = Boolean(id);

    return (
        <Page className={classNames('', {}, [className])}>
            {isEdit ? `with id${id}` : 'without id'}
        </Page>
    );
});
export default ArticleEditPage;
