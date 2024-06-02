import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui/Button';

import { useCounterValue } from '../model/selectors/getCoounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const counterValue = useCounterValue();
    const { increment, decrement, add } = useCounterActions();

    const { t } = useTranslation();

    const handleInc = () => {
        increment();
    };

    const handleDec = () => {
        decrement();
    };
    const handleAddFive = () => {
        add(5);
    };

    return (
        <div>
            <h1 data-testid="value-title">
                {counterValue}
            </h1>
            <Button label={t('increment')} onClick={handleInc} />
            <Button label={t('decrement')} onClick={handleDec} />
            <Button label={t('add5')} onClick={handleAddFive} />
        </div>
    );
};

Counter.displayName = 'Counter';
