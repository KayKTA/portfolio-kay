import { Meta, StoryObj} from "@storybook/react";
import { ProjectImagesCarousel } from "./ProjectImagesCarousel";

const meta: Meta<typeof ProjectImagesCarousel> = {
    title: "Domains/ProjectImagesCarousel",
    component: ProjectImagesCarousel,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "Carousel component to showcase project images with navigation.",
            },
        },
    },
    args: {
        images: [
            "/projects/travel1.png",
            "/projects/travel2.png",
            "/projects/travel3.png",
        ],
    },
};

export default meta;

type Story = StoryObj<typeof ProjectImagesCarousel>;

export const Default: Story = {};

export const SingleImage: Story = {
    args: {
        images: ["/projects/travel1.png"],
    },
};
