"use client";
import { Box, Stack, Chip, Typography } from "@mui/material";
import BaseRetroCard from "@/components/ui/BaseRetroCard";
import Highlight from "@/components/ui/Highlight";

export type Project = {
    title: string;
    tagline?: string;
    description?: React.ReactNode[];
    stack?: string[];
    featured?: boolean;
    link?: string;
    image?: string; // facultatif si tu veux ajouter des visuels plus tard
};

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <BaseRetroCard
            header={{
                title: project.title,
                subtitle: project.tagline,
            }}
            bullets={project.description}
            footer={
                project.stack && (
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                        {project.stack.map((t) => (
                            <Chip
                                key={t}
                                label={t}
                                size="small"
                                variant="outlined"
                                sx={{
                                    border: "2px solid",
                                    borderColor: "primary.main",
                                    borderRadius: 1,
                                    bgcolor: "background.paper",
                                    fontWeight: 700,
                                }}
                            />
                        ))}
                    </Stack>
                )
            }
        />
    );
}
