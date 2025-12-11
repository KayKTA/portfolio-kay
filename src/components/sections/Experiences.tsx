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
        role: "Développeuse Web Fullstack & Data",
        period: "2024 - 2025",
        location: "Paris / Remote",
        tagline: "Création d'applications web, projets personnels et prototypes orientés produit.",
        bullets: [
            <>Conception & développement d'applications avec <Highlight>React</Highlight>, <Highlight>Next.js</Highlight> et <Highlight>Node.js</Highlight>.</>,
            <>Réalisation de projets orientés produit (Travel Story Maker, dashboards data, mini-apps interactives).</>,
            <>Implémentation fullstack via <Highlight>Supabase</Highlight> : Auth, Database, Storage et sécurité.</>,
            <>Intégration et expérimentation <Highlight>IA / LLMs</Highlight> : automatisations, génération de contenus, extraction EXIF & audio.</>,
            <>Déploiement & optimisation sur <Highlight>Vercel</Highlight> (CI/CD, performances).</>,
            <>Gestion complète du cycle projet : UX, UI, développement, optimisation et mise en production.</>,
        ],
        stack: [
            "Next.js",
            "React",
            "Node.js",
            "TypeScript",
            "Supabase",
            "Python",
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
        tagline: "Startup spécialisée dans l'énergie solaire hors-réseau en Afrique",
        bullets: [
            <>Développement <Highlight>end-to-end</Highlight> d'applications web et outils internes (React, Node.js, Go).</>,
            <>Création et maintenance d'<Highlight>APIs métier</Highlight> pour la gestion d'équipements solaires, des clients et de la logistique.</>,
            <>Conception d'architectures <Highlight>offline-first</Highlight> pour les équipes terrain en zones à faible connectivité.</>,
            <>Optimisation de la <Highlight>performance</Highlight> (requêtes, synchronisation des données, rendu React).</>,
            <>Travail en lien direct avec les <Highlight>équipes locales</Highlight> (Afrique de l'Ouest & Centrale) : remontée terrain, priorisation des besoins, suivi des évolutions.</>,
            <>Analyse et résolution de <Highlight>bugs critiques</Highlight> impactant les usages terrain.</>,
            <>Participation à la <Highlight>refonte UI/UX</Highlight> de plusieurs interfaces métier.</>,
            <>Gestion et structuration des données dans <Highlight>Couchbase</Highlight> et services back-end en Go / Node.js.</>,
            <>Mise en place de <Highlight>process qualité</Highlight> (code review, tests manuels & tests de régression).</>,
            <>Encadrement et <Highlight>formation</Highlight> de stagiaires développeur·ses.</>,
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
                    gridTemplateColumns: { xs: "1fr", md: "0.8fr 1.2fr" },
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
