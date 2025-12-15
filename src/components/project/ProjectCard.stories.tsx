import type { Meta, StoryObj } from '@storybook/react';
import ProjectCard, { Project } from './ProjectCard';

const baseProject: Project = {
    title: 'Travel Story Maker',
    tagline: 'Automate my travel stories',
    description: [
        "Import travel steps (Polarsteps, etc.)",
        "Generate interactive timeline + map",
        "Prepare scripts for Reels / TikTok",
    ],
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Mapbox', 'OpenAI'],
    featured: true,
    liveUrl: 'https://kay-kta.vercel.app',
    images: ['/projects/travel1.png', '/projects/travel2.png'],
};
type ProjectCardStoryProps = Project;

function ProjectCardStory(props: ProjectCardStoryProps) {
    return <ProjectCard project={props} />;
}

const meta: Meta<typeof ProjectCardStory> = {
    title: 'Project/ProjectCard',
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

// export const WithoutStack: Story = {
//     args: {
//         ...baseProject,
//         stack: undefined,
//         tagline: "Data-viz prototype under construction",

//     },
//     parameters: {
//         docs: {
//             description: {
//                 story: 'Displays a card without the technology stack.',
//             },
//         },
//     },
// };

export const WithMultipleLinks: Story = {
    args: {
        ...baseProject,
        title: 'Mood Recipes',
        tagline: 'Recipes based on your mood',
        description: [
            "Choose your mood and I suggest a recipe",
            "Design system with Storybook on the frontend",
            "NestJS backend with Swagger & validation",
        ],
        stack: ['React', 'NestJS', 'Storybook'],
        featured: false,
        liveUrl: 'https://mood-recipes.vercel.app',
        repoUrl: 'https://mood-recipes.vercel.app',
        storybookUrl: 'https://mood-recipes.vercel.app',
        images: ['/projects/mood-recipes1.jpg', '/projects/mood-recipes2.png'],
    },
    parameters: {
        docs: {
            description: {
                story: 'Displays a card with multiple links (live, repo, storybook).',
            },
        },
    },
};
