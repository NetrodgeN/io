import React from 'react';
import { useTranslation } from 'react-i18next';

import { Counter } from '@/entities/Counter';
import { Page } from '@/widgets/Page';
import { BugButton } from '@/widgets/PageError';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <Page>
            <Counter />
            <BugButton />
            {t('Главная страница')}
        </Page>
    );
};

export default MainPage;

MainPage.displayName = 'MainPage';
