import { Box, Container, Typography } from "@mui/material";
import SlideLayout from "@/components/layout/SlideLayout";
import Highlight from "@/components/ui/Highlight";
import type { Experience } from "@/lib/types";
import Accordion from "@/components/ui/Accordion";

const EXPERIENCES: Experience[] = [
    {
        company: "Freelance",
        role: "Développeuse Web Fullstack & Data / IA",
        period: "2024 - 2025",
        location: "Paris / 'Remote",
        tagline:
        <span>
            En tant que développeuse indépendante, j'ai réalisé plusieurs projets web centrés sur Next.js, Supabase et l'intégration de technologies d'IA générative.
        </span>,
        bullets: [
            <>Conception et développement d'applications <Highlight>fullstack</Highlight> avec <Highlight>React</Highlight>, <Highlight>Next.js</Highlight> et <Highlight>Node.js</Highlight>, orientées produit.</>,
            <>Réalisation de projets concrets (Travel Story Maker, dashboards data, mini-apps interactives) avec un fort focus <Highlight>UX & usages réels</Highlight>.</>,
            <>Implémentation complète via <Highlight>Supabase</Highlight> (authentification, base de données, stockage, règles de sécurité).</>,
            <>Intégration de fonctionnalités <Highlight>Data & IA</Highlight> : automatisations, génération de contenus, extraction de métadonnées (EXIF, audio), expérimentation LLM.</>,
            <>Déploiement, monitoring et optimisation des performances sur <Highlight>Vercel</Highlight> (CI/CD, SEO, Core Web Vitals).</>,
            // <>Gestion du cycle projet de bout en bout : cadrage, <Highlight>UX/UI</Highlight>, développement, itérations et mise en production.</>,
        ],
        stack: [
            "Next.js",
            "React",
            "Node.js",
            "TypeScript",
            "Supabase",
            "IA / LLMs",
            "Vercel",
        ],
        logo: "/logos/freelance.png",
        featured: true,
    },
    {
        company: "MyJouleBox",
        role: "Développeuse Fullstack JavaScript",
        period: "2018 - 2024",
        location: "Paris",
        // tagline: "Startup solaire hors-réseau — solutions digitales pour le terrain en Afrique",
        tagline:
        <span>
            Pendant 6 ans chez MyJouleBox, j'ai contribué au développement d'outils web et mobiles critiques pour la gestion des équipements solaires en Afrique, avec un focus sur la robustesse et l'expérience utilisateur.
        </span>,
        bullets: [
            <>Développement <Highlight>end-to-end</Highlight> d'applications et outils internes utilisés quotidiennement sur le terrain (React, Node, Go).</>,
            <>Conception et maintenance d'<Highlight>APIs métier</Highlight> pour la gestion des équipements solaires, des clients et de la logistique.</>,
            // <>Mise en place d'architectures <Highlight>offline-first</Highlight> adaptées aux zones à faible connectivité.</>,
            <>Optimisation des <Highlight>performances</Highlight> et de la fiabilité (synchronisation, requêtes, rendu React).</>,
            <>Collaboration étroite avec les <Highlight>équipes terrain</Highlight> en Afrique (recueil des besoins, priorisation produit, itérations).</>,
            // <>Analyse et résolution de <Highlight>bugs critiques</Highlight> impactant directement l'exploitation sur le terrain.</>,
            // <>Participation active aux <Highlight>refontes UI/UX</Highlight> d'outils métier.</>,
            <>Gestion et structuration des données dans <Highlight>Couchbase</Highlight> et services back-end en Go / Node.js.</>,
            <><Highlight>Encadrement</Highlight> et accompagnement de développeur·ses junior.</>,
        ],
        stack: ["React", "Node.js", "Go", "Couchbase", "React Native", "Git"],
        logo: "/logos/mjb.jpeg",
        featured: true,
    },
];

export default function ExperienceSlide() {
    return (
        <SlideLayout
            title="Expériences"
            subtitle="Produits web modernes, performance & sens du détail"
            intro="Après 6 ans en startup, le freelance m'a permis d'élargir mon champ d'action : web, data, IA et projets orientés produit."
        >
            <Container
                maxWidth="lg"
                sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    py: 2,
                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        minHeight: 0,
                        width: "100%",
                    }}
                >
                    <Accordion datas={EXPERIENCES} />
                </Box>
            </Container>
        </SlideLayout>
    );
}
