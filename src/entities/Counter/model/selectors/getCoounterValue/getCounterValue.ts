import { buildSelector } from '@/shared/lib/store';

/**
 * первый аргумент это существующий селектор.
 * второй аргумент, в котором counter это результат от getCounter и из него берём value;
 */
// export const getCounterValue = createSelector(
//     getCounter,
//     (counter) => counter.value,
// );

export const [useCounterValue, getCounterValue] = buildSelector((state) => state.counter.value);
