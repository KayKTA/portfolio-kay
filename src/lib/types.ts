import React, { ReactNode } from "react";

export type Experience = {
    company: string;
    role: string;
    period: string;
    location?: string;
    tagline?: ReactNode;
    bullets?: ReactNode[];
    stack?: string[];
    logo?: string;
    featured?: boolean;
};

export type Project = {
    title: string;
    tagline?: string;
    description?: React.ReactNode[];
    images: string[];
    stack?: string[];
    liveUrl?: string;
    repoUrl?: string;
    storybookUrl?: string;
    featured?: boolean;
    icon?: React.ReactNode;
};

export type AccordionData = Experience | Project;

export type AccordionType = "experience" | "project";
