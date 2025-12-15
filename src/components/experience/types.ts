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
