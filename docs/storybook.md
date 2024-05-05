## Storybook

В проекте для каждого компонента описываются стори-кейсы.
Запросы на сервер мокаются с помощью storybook-addon-mock.

Файл со сторикейсами создает рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:
- `npm run storybook`

Документация [Storybook](https://storybook.js.org/)

Пример:

```typescript jsx
import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonSize, ButtonTheme } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        label: 'Primary',
    },
};

export const Clear: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        label: 'Clear',
    },
};
```
