import { Meta, StoryObj } from "@storybook/react";
import ProjectTab from "./ProjectTab";

const TabWrapper = (args: any) => (
    <div style={{ height: "500px", padding: '20px' }}>
        <ProjectTab {...args} />
    </div>
);

const meta: Meta<typeof ProjectTab> = {
    title: "Project/ProjectTab",
    component: ProjectTab,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "Tab component representing a project with title and link.",
            },
        },
    },
    args: {
        title: "Travel Blog Platform",
        index: 0,
        TAB_WIDTH: 150,
    },
};

export default meta;

type Story = StoryObj<typeof ProjectTab>;

export const Default: Story = {
    render: (args) => <TabWrapper {...args} />,
};

export const LongerTitle: Story = {
    render: (args) => <TabWrapper {...args} />,
    args: {
        title: "Travel Blog Platform with User-Generated Content and Interactive Maps",
    },
};
export const MultipleTabs: Story = {
    render: (args) => (
        <div style={{ display: 'flex', height: "500px", padding: '20px' }}>
            <ProjectTab {...args} index={0} title="Travel Blog" />
            <ProjectTab {...args} index={1} title="E-commerce Site (Active)" isActive={true} />
            <ProjectTab {...args} index={2} title="Portfolio Website" />
        </div>
    ),
};
