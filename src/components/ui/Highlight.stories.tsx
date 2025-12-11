import type { Meta, StoryObj } from '@storybook/react';
import Highlight from './Highlight';
import { Typography } from '@mui/material';

const meta: Meta<typeof Highlight> = {
    title: 'UI/Highlight',
    component: Highlight,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Component to highlight important text.',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Highlight>;

export const InSentence: Story = {
    render: () => (
        <Typography variant="body1">
            I build experiences around{' '}
            <Highlight>data, AI and storytelling</Highlight>
            {' '}to make tech more accessible.
        </Typography>
    ),
};

export const Standalone: Story = {
    render: () => <Highlight>FULL-STACK DEVELOPER</Highlight>,
};
