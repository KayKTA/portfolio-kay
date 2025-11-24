"use client";

import { Box, Stack, Typography } from "@mui/material";
import SlideLayout from "@/components/layout/SlideLayout";
import { LanguageRow, LangItem } from "@/components/ui/LanguageRow";
import RetroCard from "@/components/ui/RetroCard";

const LANGAGES: LangItem[] = [
    // { label: "JavaScript", value: 90, logo: "/logos/js.png" },
    // { label: "TypeScript", value: 85, logo: "/logos/ts.png" },
    { label: "Nest.js", value: 70, logo: "/logos/nestjs.png" },
    { label: "Express.js", value: 70, logo: "/logos/express.png" },
    { label: "Python", value: 65, logo: "/logos/python.png" },
    { label: "Go", value: 70, logo: "/logos/go.png" },
    { label: "SQL", value: 80, logo: "/logos/sql.png" },
    { label: "PostgreSQL", value: 70, logo: "/logos/postgresql.png" },
    // { label: "Supabase", value: 70, logo: "/logos/supabase.png" },
    // { label: "Couchbase", value: 70, logo: "/logos/couchbase.png" },
];
// Autres technologies fullstack
// const OTHER_STACK = [
//     { label: "Nest.js", logo: "/logos/nestjs.png" },
//     { label: "Express.js", logo: "/logos/express.png" },
// ];
// Bases de données
// const DATABASES = [
//     { label: "PostgreSQL", logo: "/logos/postgresql.png" },
//     { label: "Supabase", logo: "/logos/supabase.png" },
//     { label: "Couchbase", logo: "/logos/couchbase.png" },
// ];
// Stack principale avec détails avancés
const CORE_STACK = [
    {
        label: "React",
        logo: "/logos/react.png",
        experience: "7 ans • Certification Meta Advanced",
        skills: [
            "Custom Hooks & Composition",
            "Context API & State Management",
            "Performance (memo, useMemo, lazy)",
            "Testing Library & Jest",
        ]
    },
    {
        label: "Next.js",
        logo: "/logos/nextjs.svg",
        experience: "Expert • Formation officielle",
        skills: [
            "App Router & Server Components",
            "ISR, SSG & Streaming SSR",
            "API Routes & Middleware",
            "Image & Font Optimization",
        ]
    },
    {
        label: "Node.js",
        logo: "/logos/nodejs.png",
        experience: "7 ans • Architecture scalable",
        skills: [
            "REST & GraphQL APIs",
            "Microservices & Event-driven",
            "Performance & Clustering",
            "Streams & Workers",
        ]
    },
];

const DATA_IA = [
    { label: "Numpy", logo: "/logos/numpy.png" },
    { label: "Pandas", logo: "/logos/pandas.svg" },
    // { label: "Seaborn", logo: "/logos/seaborn.svg" },
    { label: "Scikit-learn", logo: "/logos/sklearn.png" },
    // { label: "TensorFlow", logo: "/logos/tensorflow.png" },
    // { label: "Keras", logo: "/logos/keras.png" },
    // { label: "Jupyter", logo: "/logos/jupyter.png" },
    // { label: "Google Colab", logo: "/logos/colab.png" },
];

const DEVOPS_CLOUD = [
    { label: "Docker", logo: "/logos/docker.png" },
    { label: "Git", logo: "/logos/git.png" },
    // { label: "Prefect", logo: "/logos/prefect.png" },
    { label: "Google Cloud Platform", logo: "/logos/gcp.svg" },
];

export default function Skills() {
    return (
        <SlideLayout
            title="Skills"
            subtitle="Fullstack JS/TS • Data & IA • DevOps"
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
                {/* Core Stack - Section détaillée */}
                <Box
                    sx={{
                        border: "5px solid",
                        borderColor: "primary.main",
                        bgcolor: "primary.main",
                        borderRadius: 1,
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
                            background: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.03) 10px, rgba(0,0,0,0.03) 20px)",
                            pointerEvents: "none",
                        }
                    }}
                >
                    <Stack spacing={2.5} sx={{ position: "relative", zIndex: 1 }}>
                        {/* Header avec badge */}
                        <Stack direction="row" alignItems="center" spacing={2} flexWrap="wrap">
                            <Stack direction="row" spacing={1.5} alignItems="center">
                                <span style={{ fontSize: 28 }}>⚡</span>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontWeight: 900,
                                        textTransform: "uppercase",
                                        color: "background.default",
                                        lineHeight: 1.1
                                    }}
                                >
                                    Core Stack
                                </Typography>
                            </Stack>
                            <Box
                                sx={{
                                    px: 2,
                                    py: 0.5,
                                    bgcolor: "background.default",
                                    border: "3px solid",
                                    borderColor: "background.default",
                                    borderRadius: 0.5,
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

                        {/* Technologies avec détails - 3 colonnes */}
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: {
                                    xs: "1fr",
                                    md: "repeat(3, 1fr)"
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
                                        p: { xs: 2, md: 2 },
                                        bgcolor: "background.default",
                                        border: "3px solid",
                                        borderColor: "background.default",
                                        borderRadius: 1,
                                        transition: "all 0.2s",
                                        "&:hover": {
                                            transform: "translateY(-4px)",
                                            boxShadow: "0px 6px 0px rgba(0,0,0,0.1)",
                                        }
                                    }}
                                >
                                    {/* Logo + Titre */}
                                    <Stack spacing={1.5} alignItems="center" textAlign="center">
                                        <Box
                                            component="img"
                                            src={tech.logo}
                                            alt={tech.label}
                                            sx={{
                                                width: { xs: 56, md: 72 },
                                                height: { xs: 56, md: 72 },
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
                        gridTemplateColumns: { xs: "1fr", md: "1.2fr 0.8fr" },
                        // gridTemplateColumns: { xs: "1fr", md: "1.3fr 0.7fr" },
                        gap: { xs: 2, md: 3 },
                        alignItems: "start",
                    }}
                >
                    <Stack spacing={{ xs: 2, md: 3 }}>
                        <RetroCard
                            title="Autres Langages & Frameworks"
                            icon={<span style={{ fontSize: 24 }}>💻</span>}
                            items={LANGAGES}
                        >
                            {/* <Stack spacing={1.25}>
                                {LANGAGES.map((lg) => (
                                    <LanguageRow key={lg.label} {...lg} />
                                ))}
                            </Stack> */}
                        </RetroCard>
                    </Stack>

                    <Stack spacing={{ xs: 2, md: 3 }}>

                        {/* <RetroCard
                            title="Data & IA"
                            items={DATA_IA}
                            icon={<span style={{ fontSize: 24 }}>📊</span>}
                        /> */}

                        <RetroCard
                            title="DevOps & Cloud"
                            items={DEVOPS_CLOUD}
                            icon={<span style={{ fontSize: 24 }}>🛠️</span>}
                        />

                    </Stack>
                </Box>
            </Box>
        </SlideLayout>
    );
}
