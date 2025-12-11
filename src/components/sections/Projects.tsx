"use client";

import { useState } from "react";
import { Box, Stack, Chip, Typography, IconButton, Button, Container } from "@mui/material";
import SlideLayout from "@/components/layout/SlideLayout";
import BaseRetroCard from "@/components/ui/BaseRetroCard";
import Highlight from "@/components/ui/Highlight";

type Project = {
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

/* ===== Données projets ===== */

const PROJECTS: Project[] = [
    {
        title: "Travel Story Maker",
        tagline: "Assistant de journal de voyage • Web & IA",
        featured: true,
        description: [
            <>Application qui centralise un voyage : photos, vidéos, texte et audio pour construire un <Highlight>journal de bord</Highlight> exploitable.</>,
            <>Extraction des métadonnées <Highlight>EXIF</Highlight> pour afficher les médias sur une <Highlight>carte interactive</Highlight>.</>,
            <>Option de dictée vocale + résumé généré avec <Highlight>IA / LLM</Highlight> pour raconter la journée.</>,
        ],
        images: [
            "/projects/travel1.png",
            "/projects/travel2.png",
            "/projects/travel3.png",
            "/projects/travel4.png",
        ],
        stack: ["Next.js", "React", "TypeScript", "Supabase", "OpenAI", "Map"],
        liveUrl: "https://travel-story-maker.vercel.app/",
        repoUrl: "https://github.com/KayKTA/travel-story-maker",
    },
    {
        title: "AI Agent Customizer",
        tagline: "Configuration d'agents IA • Web & outils internes",
        featured: false,
        description: [
            <>Outil interne pour définir l'<Highlight>identité</Highlight>, le <Highlight>style</Highlight> et les <Highlight>domaines</Highlight> d'un agent conversationnel (nom, rôle, ton, niveau, règles).</>,
            <>Génération automatique d'un <Highlight>system prompt</Highlight> + résumé lisible, prêts à être copiés dans une autre application (bot, outil interne, assistant produit…).</>,
            <>Playground de chat et interface <Highlight>documentée dans Storybook</Highlight>.</>,
        ],
        images: [
            "/projects/ai-agent-hero.png",          // hero / layout global
            "/projects/ai-agent-prompt.png",   // form en 3 colonnes
            "/projects/ai-agent-insight.png",      // carte prompt + résumé
            "/projects/ai-agent-playground.png",    // chat / playground
        ],
        stack: [
            "Next.js",
            // "React",
            "TypeScript",
            // "MUI",
            "Zustand",
            // "Zod",
            "Storybook",
            "Vitest",
            "OpenAI",
        ],
        liveUrl: "https://ai-agent-customizer.vercel.app",
        repoUrl: "https://github.com/KayKTA/ai-agent-customizer",
        storybookUrl: "https://ai-agent-customizer-storybook.vercel.app",
    }

    // {
    //     title: "Dashboard Data",
    //     tagline: "Data storytelling & visualisation",
    //     description: [
    //         <>
    //             Projet d'exploration de données présenté sous forme de{" "}
    //             <Highlight>dashboard interactif</Highlight>.
    //         </>,
    //         <>
    //             Analyse de jeux de données (films, sport, etc.) avec{" "}
    //             <Highlight>Pandas</Highlight> et visualisation via des graphes
    //             dynamiques.
    //         </>,
    //     ],
    //     images: [
    //         "/projects/dashboard-1.png",
    //         "/projects/dashboard-2.png",
    //     ],
    //     stack: ["Python", "Pandas", "Jupyter", "Next.js", "Charts"],
    //     repoUrl: "https://github.com/ton-user/dashboard-data",
    // },
];

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

/* ===== Carte projet ===== */

function ProjectCard({ project }: { project: Project }) {
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

/* ===== Slide ===== */

export default function ProjectsSlide() {
    const featured = PROJECTS.find((p) => p.featured) ?? PROJECTS[0];
    const others = PROJECTS.filter((p) => p !== featured);

    return (
        <SlideLayout
            title="Projets"
            subtitle="Apps • Data • IA"
            intro="Une sélection de projets persos où je teste des idées, des stacks et des concepts IA autour du produit."
        >
            <Container>
                <Box
                    sx={{
                        width: "100%",
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr 1fr" },
                        gap: { xs: 2, md: 3 },
                        alignItems: "stretch",
                    }}
                >
                    <ProjectCard project={featured} />
                    <Stack spacing={{ xs: 2, md: 3 }}>
                        {others.map((p) => (
                            <ProjectCard key={p.title} project={p} />
                        ))}
                    </Stack>
                </Box>
            </Container>
        </SlideLayout>
    );
}
