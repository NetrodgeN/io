import React from 'react';
import { useTranslation } from 'react-i18next';

import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Page } from '@/widgets/Page/Page';
import { BugButton } from '@/widgets/PageError';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <Page>
            <BugButton />
            {t('Главная страница')}
            <StarRating size={50} />
        </Page>
    );
};

export default MainPage;

MainPage.displayName = 'MainPage';
