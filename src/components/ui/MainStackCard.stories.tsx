import type { Meta, StoryObj } from '@storybook/react';
import { MainStackCard } from './MainStackCard';

const meta: Meta<typeof MainStackCard> = {
    title: 'UI/MainStackCard',
    component: MainStackCard,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Card showcasing main technology stack with logos and skills.',
            },
        },
    },
    args: {
        mainStack: [
            {
                label: 'Frontend',
                logo: '/logos/react.png',
                skills: ['React', 'Next.js', 'TypeScript', 'MUI'],
                experience: '5+ years',
            },
            {
                label: 'Backend',
                logo: '/logos/nodejs.png',
                skills: ['Node.js', 'NestJS', 'PostgreSQL', 'Supabase'],
                experience: '4+ years',
            },
            {
                label: 'Data & AI',
                logo: '/logos/python.png',
                skills: ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow'],
                experience: '3+ years',
            },
        ],
        intro:
            'I build modern end-to-end web applications: React interfaces, production Next.js apps, and robust Node.js APIs. I also have experience with Data tools (Pandas, NumPy, Scikit-learn) for exploration and visualization.',
    },
};

export default meta;

type Story = StoryObj<typeof MainStackCard>;

export const Default: Story = {};
