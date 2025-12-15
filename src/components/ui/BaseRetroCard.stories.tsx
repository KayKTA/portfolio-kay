import type { Meta, StoryObj } from '@storybook/react';
import BaseRetroCard from './BaseRetroCard';
import { Typography } from '@mui/material';

const meta: Meta<typeof BaseRetroCard> = {
    title: 'Surfaces/RetroCard',
    component: BaseRetroCard,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    'Versatile retro card with header, intro, bullets and badge.',
            },
        },
    },
    args: {
        header: {
            title: 'Full-stack developer',
            subtitle: "6+ years in startup & side projects",
            meta: '2025',
        },
        intro:
            "I design fun yet clean interfaces, with a real attention to detail and DX.",
        bullets: [
            "Front: React, Next.js, TypeScript, MUI",
            "Back: Node.js, NestJS, PostgreSQL, Supabase",
            "Bonus: data, AI, dashboards & storytelling",
        ],

    },
};

export default meta;

type Story = StoryObj<typeof BaseRetroCard>;

export const Default: Story = {};

export const WithBadge: Story = {
    args: {
        badge: {
            text: 'NEW',
        },
    },
};

export const WithCustomFooter: Story = {
    args: {
        footer: (
            <Typography variant="caption" sx={{ fontWeight: 700, mt: 1 }}>
                ✨ Available for permanent position / freelance projects.
            </Typography>
        ),
    },
};

export const WithLogo: Story = {
    args: {
        header: {
            title: 'Full-stack developer',
            subtitle: "6+ years in startup & side projects",
            meta: '2025',
            logo: "/logos/freelance.png"
        },
    },
};
export const WithoutHeader: Story = {
    args: {
        header: undefined,
        intro: "Minimalist version with only bullets.",
    },
};
