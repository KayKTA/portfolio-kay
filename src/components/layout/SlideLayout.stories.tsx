import type { Meta, StoryObj } from '@storybook/react';
import SlideLayout from './SlideLayout';
import BaseRetroCard from '../ui/BaseRetroCard';

const meta: Meta<typeof SlideLayout> = {
    title: 'Layout/SlideLayout',
    component: SlideLayout,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Layout component for slide-style sections with title and content area.',
            },
        },
    },
    args: {
        title: 'Slide Title',
    },
};

export default meta;

type Story = StoryObj<typeof SlideLayout>;

export const Default: Story = {};

export const WithSubtitle: Story = {
    args: {
        title: 'Slide Title',
        subtitle: 'This is a subtitle for additional context.',
        children: (
            <BaseRetroCard>
                This slide contains a subtitle to provide more context about the content presented.
            </BaseRetroCard>
        ),
    },
};

export const WithIntro: Story = {
    args: {
        title: 'Slide Title',
        intro: 'This slide provides an introduction to the topic discussed within.',
        children: (
            <BaseRetroCard>
                This slide contains an introductory paragraph to set the stage for the content that follows.
            </BaseRetroCard>
        ),
    },
};

export const WithIntroAndSubtitle: Story = {
    args: {
        title: 'Slide Title',
        subtitle: 'Subtitle for additional context.',
        intro: 'This slide provides an introduction to the topic discussed within.',
        children: (
            <BaseRetroCard>
                This slide contains both a subtitle and an introductory paragraph to give comprehensive context about the content presented.
            </BaseRetroCard>
        ),
    },
};
