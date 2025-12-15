import { Box, Chip, Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";
import SlideLayout from "@/components/layout/SlideLayout";
import BaseRetroCard from "@/components/ui/BaseRetroCard";
import Highlight from "@/components/ui/Highlight";

type Experience = {
    company: string;
    role: string;
    period: string;
    location?: string;
    tagline?: string;
    bullets?: ReactNode[];   // ⬅️ important
    stack?: string[];
    logo?: string;
    featured?: boolean;
};

const EXPERIENCES: Experience[] = [
    {
        company: "Freelance",
        role: "Développeuse Web Fullstack & Data / IA",
        period: "2024 - 2025",
        location: "Paris / Remote",
        tagline: "Conception de produits web et IA orientés usage, de l'idée à la mise en production.",
        bullets: [
            <>Conception et développement d'applications <Highlight>fullstack</Highlight> avec <Highlight>React</Highlight>, <Highlight>Next.js</Highlight> et <Highlight>Node.js</Highlight>, orientées produit.</>,
            <>Réalisation de projets concrets (Travel Story Maker, dashboards data, mini-apps interactives) avec un fort focus <Highlight>UX & usages réels</Highlight>.</>,
            <>Implémentation complète via <Highlight>Supabase</Highlight> (authentification, base de données, stockage, règles de sécurité).</>,
            <>Intégration de fonctionnalités <Highlight>Data & IA</Highlight> : automatisations, génération de contenus, extraction de métadonnées (EXIF, audio), expérimentation LLM.</>,
            <>Déploiement, monitoring et optimisation des performances sur <Highlight>Vercel</Highlight> (CI/CD, SEO, Core Web Vitals).</>,
            <>Gestion du cycle projet de bout en bout : cadrage, <Highlight>UX/UI</Highlight>, développement, itérations et mise en production.</>,
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
        tagline: "Startup solaire hors-réseau – solutions digitales pour le terrain en Afrique",
        bullets: [
            <>Développement <Highlight>end-to-end</Highlight> d'applications web et outils internes utilisés quotidiennement sur le terrain (React, Node.js, Go).</>,
            <>Conception et maintenance d'<Highlight>APIs métier</Highlight> pour la gestion des équipements solaires, des clients et de la logistique.</>,
            <>Mise en place d'architectures <Highlight>offline-first</Highlight> adaptées aux zones à faible connectivité.</>,
            <>Optimisation des <Highlight>performances</Highlight> et de la fiabilité (synchronisation, requêtes, rendu React).</>,
            <>Collaboration étroite avec les <Highlight>équipes terrain</Highlight> en Afrique (recueil des besoins, priorisation produit, itérations).</>,
            <>Analyse et résolution de <Highlight>bugs critiques</Highlight> impactant directement l'exploitation sur le terrain.</>,
            <>Participation active aux <Highlight>refontes UI/UX</Highlight> d'outils métier.</>,
            <>Gestion et structuration des données dans <Highlight>Couchbase</Highlight> et services back-end en Go / Node.js.</>,
            <>Mise en place de pratiques qualité : <Highlight>code review</Highlight>, tests et accompagnement de développeur·ses junior.</>,
        ],
        stack: ["React", "Node.js", "Go", "Couchbase", "React Native", "Git"],
        logo: "/logos/mjb.jpeg",
        featured: true,
    },
    // {
    //     company: "MyJouleBox",
    //     role: "Développeuse Web — Stage",
    //     period: "2018",
    //     location: "Paris",
    //     tagline: "Première immersion dans l'écosystème produit & solaire de MyJouleBox.",
    //     bullets: [
    //         <>
    //             Refonte de l'application principale de{" "}
    //             <Highlight>suivi énergétique</Highlight>{" "}
    //             (UI/UX + implémentation front).
    //         </>,
    //         <>
    //             Développement de {" "}
    //             <Highlight>fonctionnalités front</Highlight>{" "}
    //             React.
    //         </>,
    //         <>
    //             Maintenance et support d'une application mobile en{" "}
    //             <Highlight>React Native</Highlight>.
    //         </>,
    //     ],
    //     stack: ["React", "React Native", "JavaScript", "Git"],
    //     logo: "/logos/mjb.jpeg",
    // },
    //   {
    //     company: "Accueil de loisirs St Médard",
    //     role: "Coordinatrice des activités",
    //     period: "2014 - 2016",
    //     location: "Paris",
    //     tagline: "Structure d'accueil de loisirs pour enfants et adolescents (3 à 16 ans).",
    //     bullets: [
    //       <>
    //         Organisation et <Highlight>planification</Highlight>{" "}
    //         d'activités adaptées aux différents âges.
    //       </>,
    //       <>
    //         <Highlight>Coordination d'équipe</Highlight>{" "}
    //         d'animateurs·rices.
    //       </>,
    //       <>
    //         Gestion de <Highlight>plannings</Highlight>{" "}
    //         et de <Highlight>budgets d'animation</Highlight>.
    //       </>,
    //     ],
    //     stack: ["Gestion", "Organisation", "Encadrement", "Pédagogie"],
    //     logo: "/logos/mjsm.png",
    //   },
];


/* ---------- Sous-titre dédié aux expériences ---------- */

type ExperienceSubtitleProps = {
    company: string;
    period: string;
    location?: string;
};

function ExperienceSubtitle({
    company,
    period,
    location,
}: ExperienceSubtitleProps) {
    const meta = [period, location].filter(Boolean).join(" • ");

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.25 }}>
            <Typography
                component="div"
                sx={{
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                    fontSize: "0.9rem",
                }}
            >
                {company}
            </Typography>

            {/* Ligne période + lieu */}
            <Typography
                component="div"
                sx={{
                    fontWeight: 600,
                    fontSize: "0.8rem",
                    color: "text.secondary",
                }}
            >
                {meta}
            </Typography>
        </Box>
    );
}

/* ---------- Carte expérience ---------- */

function ExperienceCard({ experience }: { experience: Experience }) {
    return (
        <BaseRetroCard
            header={{
                logo: experience.logo,
                logoAlt: experience.company,
                title: experience.role,
                subtitle: (
                    <ExperienceSubtitle
                        company={experience.company}
                        period={experience.period}
                        location={experience.location}
                    />
                ),
            }}
            intro={experience.tagline}
            bullets={experience.bullets}
        >
            {experience.stack && experience.stack.length > 0 && (
                <Stack
                    direction="row"
                    spacing={1}
                    flexWrap="wrap"
                    useFlexGap
                    sx={{ mt: "auto" }}
                >
                    {experience.stack.map((t) => (
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
        </BaseRetroCard>
    );
}

export default function ExperienceSlide() {
    const featured = EXPERIENCES.find((e) => e.featured) ?? EXPERIENCES[0];
    const others = EXPERIENCES.filter((e) => e !== featured);

    return (
        <SlideLayout
            title="Expériences"
            subtitle="Produits web modernes, performance & sens du détail"
            intro="Après 6 ans en startup, le freelance m'a permis d'élargir mon champ d'action : web, data, IA et projets orientés produit."
        >
            <Box
                sx={{
                    width: "100%",
                    // maxWidth: 1200,
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.1fr" },
                    gap: { xs: 2, md: 3 },
                    alignItems: "stretch",
                }}
            >
                <ExperienceCard experience={featured} />
                <Stack spacing={{ xs: 2, md: 3 }}>
                    {others.map((e) => (
                        <ExperienceCard key={e.company + e.period} experience={e} />
                    ))}
                </Stack>
            </Box>
        </SlideLayout>
    );
}
