import { Meta, StoryObj} from "@storybook/react";
import WindowCard from "./WindowCard";
import { Box, Typography } from "@mui/material";

const meta: Meta<typeof WindowCard> = {
    title: "UI/WindowCard",
    component: WindowCard,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "Card component with window-like styling.",
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof WindowCard>;

export const Default: Story = {
    render: () => (
        <WindowCard>
            <Box sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                    Window Card Title
                </Typography>
                <Typography variant="body1">
                    This is an example of content inside the WindowCard component. You can place any React nodes here.
                </Typography>
            </Box>
        </WindowCard>
    ),
};
