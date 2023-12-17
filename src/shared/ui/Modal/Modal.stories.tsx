
import type { Meta, StoryObj } from '@storybook/react';

import {Modal} from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
      children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi distinctio eligendi placeat provident quis recusandae sequi! Accusantium beatae deserunt et excepturi, laborum nulla, perferendis quidem recusandae rem rerum sint sit!",
      isOpen: true,
  },
};
