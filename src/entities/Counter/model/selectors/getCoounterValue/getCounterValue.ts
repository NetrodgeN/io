import { createSelector } from '@reduxjs/toolkit';

import { getCounter } from '../getCounter/getCounter';

/**
 * первый аргумент это существующий селектор.
 * второй аргумент, в котором counter это результат от getCounter и из него берём value;
 */
export const getCounterValue = createSelector(
    getCounter,
    (counter) => counter.value,
);
