"use client";

import { Box, Stack, Typography } from "@mui/material";
import SlideLayout from "@/components/layout/SlideLayout";
import { LangItem } from "@/components/ui/LanguageRow";
import RetroCard from "@/components/ui/RetroCard";

const LANGAGES: LangItem[] = [
    { label: "Nest.js", value: 70, logo: "/logos/nestjs.png" },
    { label: "Express.js", value: 70, logo: "/logos/express.png" },
    { label: "Python", value: 65, logo: "/logos/python.png" },
    { label: "Go", value: 70, logo: "/logos/go.png" },
    { label: "SQL", value: 80, logo: "/logos/sql.png" },
    { label: "PostgreSQL", value: 70, logo: "/logos/postgresql.png" },
];

const CORE_STACK = [
    {
        label: "React",
        logo: "/logos/react.png",
        experience: "Certifiée Meta React Advanced",
        skills: [
            "Composants réutilisables & architecture scalable",
            "Custom Hooks & patterns de composition",
            "Optimisation des performances & tests (Jest, Vitest)",
        ],
    },
    {
        label: "Next.js",
        logo: "/logos/nextjs.svg",
        experience: "Next.js moderne • App Router",
        skills: [
            "Routing avancé & App Router",
            "Server Components, ISR & SSG",
            "APIs fullstack (API Routes, middleware, auth)",
        ],
    },
    {
        label: "Node.js",
        logo: "/logos/nodejs.png",
        experience: "Back-end robuste • Architectures scalables",
        skills: [
            "APIs REST & GraphQL",
            "Architecture event-driven & microservices",
            "Gestion de la performance & montée en charge",
        ],
    },
];

const DATA_IA: LangItem[] = [
    { label: "Numpy", logo: "/logos/numpy.png", value: 60 },
    { label: "Pandas", logo: "/logos/pandas.svg", value: 70 },
    { label: "Scikit-learn", logo: "/logos/sklearn.png", value: 60 },
];

const DEVOPS_CLOUD: LangItem[] = [
    { label: "Docker", logo: "/logos/docker.png", value: 70 },
    { label: "Git", logo: "/logos/git.png", value: 85 },
    { label: "GCP", logo: "/logos/gcp.svg", value: 60 },
];

export default function Skills() {
    return (
        <SlideLayout
            title="Skills"
            subtitle="Stack principale & outils du quotidien"
        >
            <Box
                sx={{
                    width: "100%",
                    // maxWidth: 1200,
                    display: "flex",
                    flexDirection: "column",
                    gap: { xs: 2, md: 3 },
                }}
            >
                {/* Main Stack */}
                <Box
                    sx={{
                        border: "5px solid",
                        borderColor: "primary.main",
                        bgcolor: "primary.main",
                        borderRadius: 0,
                        p: { xs: 2.5, md: 3.5 },
                        position: "relative",
                        overflow: "hidden",
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background:
                                "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.03) 10px, rgba(0,0,0,0.03) 20px)",
                            pointerEvents: "none",
                        },
                    }}
                >
                    <Stack spacing={2.5} sx={{ position: "relative", zIndex: 1 }}>
                        {/* Header avec badge */}
                        <Stack
                            direction="row"
                            alignItems="center"
                            spacing={2}
                            flexWrap="wrap"
                        >
                            {/* <Stack direction="row" spacing={1.5} alignItems="center">
                                <span style={{ fontSize: 28 }}>⚡</span>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontWeight: 900,
                                        textTransform: "uppercase",
                                        color: "background.default",
                                        lineHeight: 1.1,
                                    }}
                                >
                                    Main Stack
                                </Typography>
                            </Stack> */}
                            <Box
                                sx={{
                                    px: 2,
                                    py: 0.5,
                                    bgcolor: "background.default",
                                    border: "3px solid",
                                    borderColor: "background.default",
                                    borderRadius: 0,
                                }}
                            >
                                <Typography
                                    variant="caption"
                                    sx={{
                                        fontWeight: 900,
                                        textTransform: "uppercase",
                                        color: "primary.main",
                                        letterSpacing: 1,
                                    }}
                                >
                                    ★ Expertise ★
                                </Typography>
                            </Box>
                        </Stack>

                        {/* Petit texte d'intro */}
                        <Typography
                            variant="body1"
                            sx={{
                                color: "background.default",
                                fontWeight: 600,
                            }}
                        >
                            Je conçois des applications web modernes de bout en bout&nbsp;:
                            interfaces React, apps Next.js en production et APIs Node.js
                            robustes. J'ai également de l'expérience avec des outils
                            Data (Pandas, Numpy, Scikit-learn) pour l'exploration et la
                            visualisation.
                        </Typography>

                        {/* Technologies avec détails - 3 colonnes */}
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: {
                                    xs: "1fr",
                                    md: "repeat(3, 1fr)",
                                },
                                gap: 2,
                            }}
                        >
                            {CORE_STACK.map((tech) => (
                                <Box
                                    key={tech.label}
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 1.5,
                                        p: { xs: 2, md: 1.5 },
                                        bgcolor: "background.default",
                                        border: "3px solid",
                                        borderColor: "background.default",
                                        borderRadius: 0,
                                        // transition: "all 0.2s",
                                        // "&:hover": {
                                        //     transform: "translateY(-4px)",
                                        //     boxShadow: "0px 6px 0px rgba(0,0,0,0.1)",
                                        // },
                                    }}
                                >
                                    {/* Logo + Titre */}
                                    <Stack
                                        spacing={1.5}
                                        alignItems="center"
                                        textAlign="center"
                                    >
                                        <Box
                                            component="img"
                                            src={tech.logo}
                                            alt={tech.label}
                                            sx={{
                                                width: { xs: 56, md: 60 },
                                                height: { xs: 56, md: 60 },
                                                objectFit: "contain",
                                            }}
                                        />
                                        <Box>
                                            <Typography
                                                sx={{
                                                    fontWeight: 900,
                                                    fontSize: { xs: "1.1rem", md: "1.2rem" },
                                                    color: "primary.main",
                                                    lineHeight: 1.2,
                                                }}
                                            >
                                                {tech.label}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    fontWeight: 700,
                                                    color: "text.secondary",
                                                    mt: 0.5,
                                                    fontSize: "0.85rem",
                                                }}
                                            >
                                                {tech.experience}
                                            </Typography>
                                        </Box>
                                    </Stack>

                                    {/* Compétences */}
                                    <Stack spacing={0.75} sx={{ mt: 0.5 }}>
                                        {tech.skills.map((skill) => (
                                            <Box
                                                key={skill}
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "flex-start",
                                                    gap: 0.75,
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        width: 6,
                                                        height: 6,
                                                        bgcolor: "primary.main",
                                                        borderRadius: "50%",
                                                        mt: 0.75,
                                                        flexShrink: 0,
                                                    }}
                                                />
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        fontWeight: 600,
                                                        fontSize: "0.85rem",
                                                        color: "text.primary",
                                                        lineHeight: 1.4,
                                                    }}
                                                >
                                                        {skill}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Stack>
                                </Box>
                            ))}
                        </Box>
                    </Stack>
                </Box>

                {/* Grille à 2 colonnes */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                        gap: { xs: 2, md: 3 },
                        alignItems: "start",
                    }}
                >
                    <Stack spacing={{ xs: 2, md: 3 }}>
                        <RetroCard
                            title="Autres Langages & Frameworks"
                            icon={<span style={{ fontSize: 24 }}>💻</span>}
                            items={LANGAGES}
                        />
                    </Stack>

                    <Stack spacing={{ xs: 2, md: 3 }}>
                        <RetroCard
                            title="DevOps, Cloud & Data"
                            items={[...DEVOPS_CLOUD, ...DATA_IA]}
                            icon={<span style={{ fontSize: 24 }}>🛠️</span>}
                        />
                    </Stack>
                </Box>
            </Box>
        </SlideLayout>
    );
}
