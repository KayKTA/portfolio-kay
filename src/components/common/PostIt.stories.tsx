import type { Meta, StoryObj } from '@storybook/react';
import { PostIt } from './PostIt';

const meta: Meta<typeof PostIt> = {
    title: 'Surfaces/PostIt',
    component: PostIt,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A sticky note style component for highlighting information.',
            },
        },
    },
    argTypes: {
        children: {
            control: 'text',
            description: 'Content of the Post-It note.',
        },
        color: {
            control: 'select',
            options: ['yellow', 'pink', 'lightblue', 'lightgreen'],
            description: 'Color of the Post-It note.',
        },
    },
};

export default meta;

type Story = StoryObj<typeof PostIt>;
export const Default: Story = {
    args: {
        children: 'This is a Post-It note!',
    },
};
export const PinkNote: Story = {
    args: {
        children: 'Remember to check your email.',
        color: 'pink',
    },
};
export const NoteRotate10: Story = {
    args: {
        children: 'Meeting at 3 PM',
        rotate: 10,
        color: 'lightblue',
    },
};
