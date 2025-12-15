import { Meta, StoryObj} from "@storybook/react";
import ExperienceCard from "./ExperienceCard";
import { EXPERIENCE_1, EXPERIENCE_2 } from "@/lib/samples";
import { Experience } from "@/lib/types";

const baseExperience = EXPERIENCE_1;
type ExperienceCardStoryProps = Experience;

function ExperienceCardStory(props: ExperienceCardStoryProps) {
    return <ExperienceCard experience={props} />;
}

const meta: Meta<typeof ExperienceCardStory> = {
    title: "Domains/ExperienceCard",
    component: ExperienceCardStory,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "Card component to showcase professional experience with role, company, duration, description, and tech stack.",
            },
        },
    },
    args: {
        ...baseExperience,
    },
    argTypes: {
        role: {
            control: "text",
            description: "Job role or title",
        },
        company: {
            control: "text",
            description: "Company name",
        },
        period: {
            control: "text",
            description: "Duration of the role",
        },
        location: {
            control: "text",
            description: "Location of the role",
        },
        tagline: {
            control: "text",
            description: "Short tagline or summary of the role",
        },
        bullets: {
            control: "object",
            description: "List of bullet points describing the role",
        },
        stack: {
            control: "object",
            description: "List of technologies used in the role",
        },
        logo: {
            control: "text",
            description: "URL of the company logo",
        },
    },
};

export default meta;

type Story = StoryObj<typeof ExperienceCardStory>;

export const Default: Story = {};

export const ExperienceTwo: Story = {
    args: {
        ...EXPERIENCE_2,
    },
};
