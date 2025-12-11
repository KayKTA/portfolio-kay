"use client";
import { Box, Stack, Chip, Typography, IconButton, Button } from "@mui/material";
import BaseRetroCard from "@/components/ui/BaseRetroCard";
import { useState } from "react";

export type Project = {
    title: string;
    tagline?: string;
    description?: React.ReactNode[];
    images: string[];              // visuels du projet
    stack?: string[];
    liveUrl?: string;              // lien vers la démo / site
    repoUrl?: string;              // lien vers le code
    storybookUrl?: string;         // lien vers Storybook
    featured?: boolean;
};

/* ===== Mini carousel d'images ===== */

function ProjectImagesCarousel({ images }: { images: string[] }) {
    const [index, setIndex] = useState(0);
    const hasMultiple = images.length > 1;

    const goPrev = () => setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    const goNext = () => setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

    return (
        <Box sx={{ position: "relative", mb: 2 }}>
            <Box
                component="img"
                src={images[index]}
                alt={`Capture du projet ${index + 1}`}
                sx={{
                    width: "100%",
                    borderRadius: 0,
                    border: "3px solid",
                    borderColor: "primary.main",
                    display: "block",
                    objectFit: "cover",
                    maxHeight: 260,
                }}
            />

            {hasMultiple && (
                <>
                    {/* Flèches */}
                    <IconButton
                        onClick={goPrev}
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: 8,
                            transform: "translateY(-50%)",
                            bgcolor: "background.default",
                            border: "2px solid",
                            borderColor: "primary.main",
                            borderRadius: 0,
                            "&:hover": { bgcolor: "primary.main", color: "background.default" },
                        }}
                    >
                        ‹
                    </IconButton>
                    <IconButton
                        onClick={goNext}
                        sx={{
                            position: "absolute",
                            top: "50%",
                            right: 8,
                            transform: "translateY(-50%)",
                            bgcolor: "background.default",
                            border: "2px solid",
                            borderColor: "primary.main",
                            borderRadius: 0,
                            "&:hover": { bgcolor: "primary.main", color: "background.default" },
                        }}
                    >
                        ›
                    </IconButton>

                    {/* Dots */}
                    <Stack
                        direction="row"
                        spacing={0.5}
                        sx={{
                            position: "absolute",
                            bottom: 8,
                            left: "50%",
                            transform: "translateX(-50%)",
                            bgcolor: "rgba(0,0,0,0.4)",
                            px: 1,
                            py: 0.25,
                            borderRadius: 999,
                        }}
                    >
                        {images.map((_, i) => (
                            <Box
                                key={i}
                                sx={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: "50%",
                                    bgcolor: i === index ? "primary.main" : "rgba(255,255,255,0.7)",
                                }}
                            />
                        ))}
                    </Stack>
                </>
            )}
        </Box>
    );
}
/* ===== Composant bouton de lien projet ===== */

type ProjectLinkButtonProps = {
    href?: string;
    children: React.ReactNode;
    variant?: "primary" | "outline";
};

function ProjectLinkButton({ href, children, variant = "outline" }: ProjectLinkButtonProps) {
    if (!href) return null;

    const isPrimary = variant === "primary";

    return (
        <Button
            component="a"
            href={href}
            target="_blank"
            rel="noreferrer"
            sx={{
                border: "3px solid",
                borderColor: "primary.main",
                borderRadius: 0,
                px: 2,
                py: 0.5,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: 0.5,
                fontSize: "0.75rem",
                bgcolor: isPrimary ? "primary.main" : "background.default",
                color: isPrimary ? "background.default" : "primary.main",
                "&:hover": {
                    bgcolor: isPrimary ? "background.default" : "primary.main",
                    color: isPrimary ? "primary.main" : "background.default",
                },
            }}
        >
            {children}
        </Button>
    );
}

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <BaseRetroCard
            header={{
                title: project.title,
                subtitle: project.tagline,
            }}
            bullets={project.description}
        >
            {/* Visuels */}
            {project.images?.length > 0 && (
                <ProjectImagesCarousel images={project.images} />
            )}

            {/* Stack techno */}
            {project.stack && project.stack.length > 0 && (
                <Stack
                    direction="row"
                    spacing={1}
                    flexWrap="wrap"
                    useFlexGap
                    sx={{ mb: 2 }}
                >
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
                                height: 24,
                                fontWeight: 700,
                                "& .MuiChip-label": { px: 1 },
                            }}
                        />
                    ))}
                </Stack>
            )}

            {/* Liens */}
            <Stack direction="row" spacing={1.5} flexWrap="wrap">
                {project.liveUrl && (
                    <ProjectLinkButton href={project.liveUrl} variant="primary">
                        Voir le projet
                    </ProjectLinkButton>
                )}
                {project.repoUrl && (
                    <ProjectLinkButton href={project.repoUrl} variant="outline">
                        Voir le code
                    </ProjectLinkButton>
                )}
                {project.storybookUrl && (
                    <ProjectLinkButton href={project.storybookUrl} variant="outline">
                        Storybook
                    </ProjectLinkButton>
                )}
            </Stack>
        </BaseRetroCard>
    );
}
