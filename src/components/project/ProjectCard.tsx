"use client";

import { Box, Stack, IconButton, Typography, Tooltip } from "@mui/material";
import { useState } from "react";
import WindowCard from "../ui/WindowCard";
import { SimpleChip } from "../ui/RetroChip";
import { ProjectImagesCarousel } from "./ProjectImagesCarousel";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CodeIcon from "@mui/icons-material/Code";
import MenuBookIcon from "@mui/icons-material/MenuBook";

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

/* ===== Icon Button Component ===== */
type ProjectIconButtonProps = {
    href?: string;
    icon: React.ReactNode;
    label: string;
};

function ProjectIconButton({ href, icon, label }: ProjectIconButtonProps) {
    if (!href) return null;

    return (
        <Tooltip title={label} arrow>
            <IconButton
                component="a"
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                sx={{
                    width: 44,
                    height: 44,
                    borderRadius: 0,
                    border: "3px solid",
                    borderColor: "primary.main",
                    bgcolor: "background.default",
                    color: "primary.main",
                    boxShadow: "3px 3px 0 rgba(0,0,0,0.2)",
                    transition: "all .15s ease",
                    "&:hover": {
                        bgcolor: "primary.main",
                        color: "background.default",
                        transform: "translate(-2px, -2px)",
                        boxShadow: "5px 5px 0 rgba(0,0,0,0.25)",
                    },
                }}
            >
                {icon}
            </IconButton>
        </Tooltip>
    );
}

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <WindowCard
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
            }}
        >
            {/* Header avec titre + boutons */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 2,
                    borderBottom: "4px solid",
                    borderColor: "primary.main",
                    pb: 2,
                    mb: 2,
                    flexShrink: 0,
                }}
            >
                {/* Titre */}
                <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 900,
                            fontSize: { xs: "1.2rem", md: "1.5rem" },
                            letterSpacing: -0.5,
                            lineHeight: 1.2,
                        }}
                    >
                        {project.title}
                    </Typography>
                    {project.tagline && (
                        <Typography
                            variant="body2"
                            sx={{
                                color: "primary.main",
                                fontWeight: 600,
                                mt: 0.5,
                                fontSize: "0.85rem",
                            }}
                        >
                            {project.tagline}
                        </Typography>
                    )}
                </Box>

                {/* Icon Buttons */}
                <Stack direction="row" spacing={1} sx={{ flexShrink: 0 }}>
                    <ProjectIconButton
                        href={project.liveUrl}
                        icon={<OpenInNewIcon fontSize="small" />}
                        label="Voir le projet"
                    />
                    <ProjectIconButton
                        href={project.repoUrl}
                        icon={<CodeIcon fontSize="small" />}
                        label="Voir le code"
                    />
                    <ProjectIconButton
                        href={project.storybookUrl}
                        icon={<MenuBookIcon fontSize="small" />}
                        label="Voir Storybook"
                    />
                </Stack>
            </Box>

            {/* Content en 2 colonnes */}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", lg: "0.9fr 1.1fr" },
                    gap: 3,
                    flex: 1,
                    minHeight: 0,
                    overflow: "auto",
                }}
            >
                {/* LEFT COLUMN : images + stack */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <ProjectImagesCarousel images={project.images} />

                    {/* Stack déplacé sous le carousel */}
                    {project.stack && project.stack.length > 0 && (
                        <Box>
                            <Typography
                                variant="overline"
                                sx={{
                                    fontWeight: 700,
                                    fontSize: "0.7rem",
                                    color: "text.secondary",
                                    mb: 1,
                                    display: "block",
                                }}
                            >
                                Technos
                            </Typography>
                            <Stack
                                direction="row"
                                spacing={0.75}
                                flexWrap="wrap"
                                useFlexGap
                            >
                                {project.stack.map((tech) => (
                                    <SimpleChip key={tech} item={tech} />
                                ))}
                            </Stack>
                        </Box>
                    )}
                </Box>

                {/* RIGHT COLUMN : description uniquement */}
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    {project.description && project.description.length > 0 && (
                        <Stack spacing={1}>
                            {project.description.map((line, idx) => (
                                <Box
                                    key={idx}
                                    sx={{
                                        display: "flex",
                                        gap: 1.5,
                                        alignItems: "flex-start",
                                    }}
                                >
                                    <Box
                                        component="span"
                                        sx={{
                                            color: "primary.main",
                                            fontSize: "1.1rem",
                                            fontWeight: 900,
                                            flexShrink: 0,
                                        }}
                                    >
                                        ★
                                    </Box>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            lineHeight: 1.5,
                                            fontSize: "0.9rem",
                                        }}
                                    >
                                        {line}
                                    </Typography>
                                </Box>
                            ))}
                        </Stack>
                    )}
                </Box>
            </Box>
        </WindowCard>
    );
}
