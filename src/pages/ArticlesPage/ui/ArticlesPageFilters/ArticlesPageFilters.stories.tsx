import { ArticlesPageFilters } from './ArticlesPageFilters';
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ArticlesPageFilters>  = {
    title: 'pages/ArticlesPage/ArticlesPageFilters',
    component: ArticlesPageFilters,
}
export default meta;
type Story = StoryObj<typeof ArticlesPageFilters>;

export const Normal: Story = {
    args: {}
};
