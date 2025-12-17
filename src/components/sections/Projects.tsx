"use client";

import SlideLayout from "@/components/layout/SlideLayout";
import type { Project } from "@/lib/types";
import Highlight from "../ui/Highlight";
import { Box } from "@mui/material";
import { AirplanemodeActive, SmartToyRounded, DashboardCustomize, SmartToyOutlined } from "@mui/icons-material";
import Accordion from "@/components/ui/Accordion";

/* ===== Projects Data ===== */
const PROJECTS: Project[] = [
    {
        title: "Travel Story Maker",
        icon: <AirplanemodeActive sx={{ fontSize: 20, color: "rgb(255, 255, 255, 0.8)" }} />,
        tagline: "Journal de voyage augmenté • Médias, carte & IA",
        featured: true,
        description: [
            <>Application qui transforme photos, vidéos, texte et audio en <Highlight>journal de voyage structuré</Highlight> et exploitable.</>,
            <>Centralisation des contenus autour d'une <Highlight>timeline</Highlight> et d'une <Highlight>carte interactive</Highlight> pour suivre un parcours.</>,
            <>Extraction automatique des métadonnées <Highlight>EXIF</Highlight> pour géolocaliser les médias sans saisie manuelle.</>,
            <>Ajout rapide de contenu via <Highlight>dictée vocale</Highlight> avec transcription et <Highlight>résumé généré par IA</Highlight>.</>,
            <>Première brique vers un système de <Highlight>data storytelling</Highlight> (images + texte + contexte).</>,
            <>Architecture pensée pour évoluer vers des fonctionnalités avancées (RAG, génération automatique de récits, reels).</>,
            <>Déploiement et itérations rapides avec un focus sur <Highlight>UX simple</Highlight> et performance.</>,
        ],
        images: [
            "/projects/travel1.png",
            "/projects/travel2.png",
            "/projects/travel3.png",
            "/projects/travel4.png",
        ],
        stack: [
            "Next.js",
            "React",
            "TypeScript",
            "Supabase",
            "LLM (OpenAI API)",
            "Leaflet",
        ],
        liveUrl: "https://travel-story-maker.vercel.app/",
        repoUrl: "https://github.com/KayKTA/travel-story-maker",
    },
    {
        title: "AI Agent Customizer",
        icon: <SmartToyOutlined sx={{ fontSize: 20, color: "rgb(255, 255, 255, 0.8)" }} />,
        tagline: "Configuration d'agents IA • Web & outils internes",
        featured: false,
        description: [
            <>Outil permettant de configurer l'<Highlight>identité complète</Highlight> d'un agent IA (rôle, ton, règles, niveau, contraintes).</>,
            <>Génération automatique d'un <Highlight>system prompt</Highlight> structuré et cohérent à partir des paramètres définis.</>,
            <>Création d'un résumé <Highlight>human-readable</Highlight> pour faciliter la relecture et la validation côté produit.</>,
            <>Playground de test pour simuler des conversations et itérer rapidement sur le comportement de l'agent.</>,
            <>Gestion d'état claire et prévisible avec <Highlight>Zustand</Highlight>.</>,
            <>Composants UI documentés dans <Highlight>Storybook</Highlight> (variants, states, guidelines).</>,
            <>Projet pensé comme une <Highlight>brique réutilisable</Highlight> pour des outils internes ou des assistants produit.</>,
        ],
        images: [
            "/projects/ai-agent-hero.png",
            "/projects/ai-agent-prompt.png",
            "/projects/ai-agent-insight.png",
            "/projects/ai-agent-playground.png",
        ],
        stack: ["Next.js", "TypeScript", "Zustand", "Storybook", "Vitest", "OpenAI", "Ollama"],
        liveUrl: "https://ai-agent-customizer.vercel.app",
        repoUrl: "https://github.com/KayKTA/ai-agent-customizer",
        storybookUrl: "https://ai-agent-customizer-storybook.vercel.app",
    },
    {
        title: "Portfolio Website",
        icon: <DashboardCustomize sx={{ fontSize: 20, color: "rgb(255, 255, 255, 0.8)" }} />,
        tagline: "Slides interactives • Navigation immersive",
        featured: false,
        description: [
            <>Portfolio conçu comme une <Highlight>présentation interactive</Highlight> : une section = un écran, navigation fluide.</>,
            <>Architecture modulaire basée sur <Highlight>Next.js App Router</Highlight>.</>,
            <>Création de composants UI réutilisables et cohérents.</>,
            <>Animations et transitions avec <Highlight>Framer Motion</Highlight> pour renforcer l'expérience utilisateur.</>,
            <>Design system documenté dans <Highlight>Storybook</Highlight> pour assurer la maintenabilité.</>,
            <>Approche orientée lisibilité, performance et clarté du message.</>,
        ],
        images: ["/projects/portfolio1.png"],
        stack: ["Next.js", "TypeScript", "MUI", "Framer Motion", "Storybook", "Vite"],
        repoUrl: "https://github.com/KayKTA/portfolio-kay",
        storybookUrl: "https://portfolio-kay-storybook.vercel.app",
    },
];



/* ===== SLIDE ===== */
export default function ProjectsSlide() {

    return (
        <SlideLayout
            title="Projets Récents"
            subtitle="Apps • Data • IA"
            // intro="Une sélection de projets persos où je teste des idées, des stacks et des concepts IA autour du produit."
        >
            {/* Wrapper pour donner une hauteur fixe à l'accordéon */}
            <Box
                id="projects-accordion-wrapper"
                sx={{
                    flex: 1, // Prend tout l'espace disponible
                    minHeight: 0, // Permet au flex child de shrink
                    maxWidth: 1400,
                    height: "100%",
                    width: "100%",
                    // px: { xs: 2 },
                }}
            >
                {/* <ProjectAccordion projects={PROJECTS} /> */}
                <Accordion datas={PROJECTS} />
            </Box>
        </SlideLayout>
    );
}
