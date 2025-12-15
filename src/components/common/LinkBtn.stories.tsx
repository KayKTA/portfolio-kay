import type { Meta, StoryObj } from '@storybook/react';
import LinkBtn from './LinkBtn';

const meta: Meta<typeof LinkBtn> = {
    title: 'Primitives/LinkButton',
    component: LinkBtn,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Button component for external links with optional icon.',
            },
        },
    },
    argTypes: {
        label: {
            control: 'text',
            description: 'Text content of the button.',
        },
        href: {
            control: 'text',
            description: 'URL the button links to.',
        },
        variant: {
            control: 'select',
            options: ['outline', 'primary'],
            description: 'Button variant style.',
        },
        onClick: {
            action: 'clicked',
            description: 'Click event handler.',
        },
    },
};

export default meta;

type Story = StoryObj<typeof LinkBtn>;

export const Outline: Story = {
    args: {
        label: 'Visit OpenAI',
        href: 'https://www.openai.com',
        variant: 'outline',
    },
};

export const Primary: Story = {
    args: {
        label: 'GitHub',
        href: '#',
        variant: 'primary',
    },
};
