import { Meta, StoryObj } from "@storybook/react";
import Accordion from "./Accordion";
import { Box } from "@mui/material";
import { SAMPLE_EXPERIENCES, SAMPLE_PROJECTS } from "@/lib/samples";


const meta: Meta<typeof Accordion> = {
    title: "Navigation/Accordion",
    component: Accordion,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
        docs: {
            description: {
                component:
                    "Accordion component to display experiences or projects with tabs.",
            },
        },
    },
    argTypes: {
        datas: {
            control: "object",
            description: "Array of experiences or projects to display in the accordion.",
        },
    },
    decorators: [
        (Story) => (
            <Box sx={{
                height: "100vh",
                // width: "100%",
            }}
            >
                <Story />
            </Box>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const ProjectAccordion: Story = {
    args: {
        datas: SAMPLE_PROJECTS,
    },
};

export const ExperienceAccordion: Story = {
    args: {
        datas: SAMPLE_EXPERIENCES,
    },
};
