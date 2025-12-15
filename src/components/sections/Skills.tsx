"use client";

import { Box, Stack, Typography } from "@mui/material";
import SlideLayout from "@/components/layout/SlideLayout";
import { LangItem } from "@/components/ui/LanguageRow";
import RetroCard from "@/components/ui/RetroCard";
import { MainStackCard } from "../ui/MainStackCard";

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
                    maxWidth: 1200,
                    display: "flex",
                    flexDirection: "column",
                    gap: { xs: 2, md: 3 },
                }}
            >
                {/* Main Stack */}
                <MainStackCard
                    intro=""
                    // intro="Je conçois des applications web modernes de bout en bout : interfaces React, apps Next.js en production et APIs Node.js robustes. J'ai également de l'expérience avec des outils Data (Pandas, Numpy, Scikit-learn) pour l'exploration et la visualisation et l’intégration de fonctionnalités intelligentes dans des produits web."
                    mainStack={CORE_STACK}
                />
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
