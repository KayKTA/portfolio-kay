import type { Meta, StoryObj } from '@storybook/react';
import ProjectCard from './ProjectCard';
import { PROJECT_1, PROJECT_2 } from '@/lib/samples';
import { Project } from '@/lib/types';

const baseProject = PROJECT_1;
type ProjectCardStoryProps = Project;

function ProjectCardStory(props: ProjectCardStoryProps) {
    return <ProjectCard project={props} />;
}

const meta: Meta<typeof ProjectCardStory> = {
    title: 'Domains/ProjectCard',
    component: ProjectCardStory,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Project presentation card with images, description, stack and links.',
            },
        },
    },
    args: {
        ...baseProject,
    },
    argTypes: {
        title: {
            control: 'text',
            description: 'Project title',
        },
        tagline: {
            control: 'text',
            description: 'Tagline or short project description',
        },
        description: {
            control: 'object',
            description: 'List of bullet points describing the project',
        },
        stack: {
            control: 'object',
            description: 'List of technologies used',
        },
        featured: {
            control: 'boolean',
            description: 'Indicates if the project is featured',
        },
        liveUrl: {
            control: 'text',
            description: "URL of the live project",
        },
        repoUrl: {
            control: 'text',
            description: "URL of the project repository",
        },
        storybookUrl: {
            control: 'text',
            description: "URL of the project Storybook",
        },
        images: {
            control: 'object',
            description: 'List of project image URLs',
        },
    }


};

export default meta;

type Story = StoryObj<typeof ProjectCardStory>;

export const Default: Story = {};

export const WithMultipleLinks: Story = {
    args: PROJECT_2,
    parameters: {
        docs: {
            description: {
                story: 'Displays a card with multiple links (live, repo, storybook).',
            },
        },
    },
};
