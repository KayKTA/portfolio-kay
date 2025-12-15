import type { Meta, StoryObj } from '@storybook/react';
import SocialIconButton from './SocialIconButton';

const meta: Meta<typeof SocialIconButton> = {
    title: 'Primitives/IconButton',
    component: SocialIconButton,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Button component for social media icons with link functionality.',
            },
        },
    },
    argTypes: {
        href: {
            control: 'text',
            description: 'URL the button links to.',
        },
        src: {
            control: 'text',
            description: 'Image source URL for the icon.',
        },
        alt: {
            control: 'text',
            description: 'Alt text for the icon image.',
        },
    },
};

export default meta;

type Story = StoryObj<typeof SocialIconButton>;

export const Default: Story = {
    args: {
        href: 'https://www.example.com',
        src: '/socials/github.svg',
        alt: 'GitHub Icon',
    },
};
