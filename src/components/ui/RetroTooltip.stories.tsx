import { Meta, StoryObj} from "@storybook/react";
import RetroTooltip from "./RetroTooltip";
import { Button, Stack } from "@mui/material";

const meta: Meta<typeof RetroTooltip> = {
    title: "UI/RetroTooltip",
    component: RetroTooltip,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "Retro-styled tooltip component with customizable content and placement.",
            },
        },
    },
    argTypes: {
        title: {
            control: "text",
            description: "The text to display inside the tooltip.",
        },
        placement: {
            control: "select",
            options: [
                "top",
                "bottom",
                "left",
                "right",
                "top-start",
                "top-end",
                "bottom-start",
                "bottom-end",
                "left-start",
                "left-end",
                "right-start",
                "right-end",
            ],
            description: "The placement of the tooltip relative to the child element.",
        },
    },
};

export default meta;

type Story = StoryObj<typeof RetroTooltip>;

export const Default: Story = {
    args: {
        title: "This is a retro tooltip!",
        placement: "top",
    },
    render: (args) => (
        <RetroTooltip {...args}>
            <Button variant="outlined">Hover me</Button>
        </RetroTooltip>
    ),
};
export const WithArrow: Story = {
    args: {
        title: "This is a retro tooltip with an arrow!",
        placement: "top",
    },
    render: (args) => (
        <RetroTooltip {...args} arrow>
            <Button variant="outlined">Hover me</Button>
        </RetroTooltip>
    ),
};
export const AllPlacements: Story = {
    render: () => {
        const placements = [
            "top",
            "bottom",
            "left",
            "right",
        ] as const;

        return (
            <Stack spacing={4} direction={"row"} alignItems="center">
                {placements.map((placement) => (
                    <RetroTooltip
                        key={placement}
                        title={`Tooltip on ${placement}`}
                        placement={placement}
                        arrow
                    >
                        <Button variant="outlined">{placement}</Button>
                    </RetroTooltip>
                ))}
            </Stack>
        );
    },
};
