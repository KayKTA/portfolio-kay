import type { Meta, StoryObj } from '@storybook/react';
import RetroChip, { SimpleChip, chip } from './RetroChip';
import { Stack } from '@mui/material';

type RetroChipStoryProps = chip;

function RetroChipStory(props: RetroChipStoryProps) {
    return <RetroChip item={props} />;
}

const meta: Meta<typeof RetroChipStory> = {
    title: 'Primitives/RetroChip',
    component: RetroChipStory,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Customizable retro chip with optional logo.',
            },
        },
    },
    argTypes: {
        label: {
            control: 'text',
            description: 'Text content of the chip.',
            table: { category: 'Chip fields' },
        },
        logo: {
            control: 'text',
            description: 'Optional image URL displayed before the label.',
            table: { category: 'Chip fields' },
        },
    },
};

export default meta;

type Story = StoryObj<typeof RetroChipStory>;

export const SingleRetroChip: Story = {
    args: {
        label: 'React'
    },
};

export const WithLogo: Story = {
    args: {
        label: 'TypeScript',
        logo: '/logos/ts.png',
    },
};

export const ListOfChips: Story = {
    render: () => {
        const items: chip[] = [
            { label: "Nest.js", logo: "/logos/nestjs.png" },
            { label: "Express.js", logo: "/logos/express.png" },
            { label: "Python", logo: "/logos/python.png" },
            { label: "Go", logo: "/logos/go.png" },

        ];
        return (
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {items.map((item) => (
                    <RetroChip key={item.label} item={item} />
                ))}
            </Stack>
        );
    },
};
