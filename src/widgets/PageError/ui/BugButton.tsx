import { Button } from 'shared/ui/Button/Button';
import React from 'react';
import { useTranslation } from 'react-i18next';

// Компонент для тестирования ErrorBoundary
export const BugButton = () => {
    const [error, setError] = React.useState(false);
    const { t } = useTranslation();
    const onThrow = () => {
        setError(true);
    };

    React.useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            onClick={onThrow}
        >
            {t('throw error')}
        </Button>
    );
};

BugButton.displayName = 'BugButton';
