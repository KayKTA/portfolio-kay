import { Meta, StoryObj } from "@storybook/react";
import AccordionTab from "./AccordionTab";
import { Project } from "@/lib/types";
import { Experience } from "@/lib/types";
import { EXPERIENCE_1, PROJECT_1 } from "@/lib/samples";

type AccordionTabStoryProps = Project | Experience;

function AccordionTabStory(props: AccordionTabStoryProps) {
    return <AccordionTab
        item={props}
        index={0}
        isActive={true}
        handleTabClick={() => {}}
    />;
}

const meta: Meta<typeof AccordionTabStory> = {
    title: "Navigation/AccordionTab",
    component: AccordionTabStory,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "Accordion tab component for displaying project or experience summaries.",
            },
        },
    },
    decorators: [
        (Story) => (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof AccordionTabStory>;

export const ProjectTab: Story = {
    args: PROJECT_1
};

export const ExperienceTab: Story = {
    args: EXPERIENCE_1
};
