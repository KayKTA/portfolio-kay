"use client";

import { useState } from "react";
import { Box, Stack, Chip, Typography, IconButton, Button, Container } from "@mui/material";
import SlideLayout from "@/components/layout/SlideLayout";
import BaseRetroCard from "@/components/ui/BaseRetroCard";
import Highlight from "@/components/ui/Highlight";
import ProjectCard, { Project } from "../ui/ProjectCard";


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
            {/* <Container> */}
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
            {/* </Container> */}
        </SlideLayout>
    );
}
