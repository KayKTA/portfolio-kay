import { Box, Chip, Stack } from "@mui/material";
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
    company: "MyJouleBox",
    role: "Développeuse Fullstack JavaScript",
    period: "2018 - 2024",
    location: "Paris",
    tagline: "Énergie solaire hors-réseau • Afrique",
    bullets: [
      <>
        Développement <Highlight>end-to-end</Highlight>{" "}
        d’applications web et outils internes (React, Node.js, Go).
      </>,
      <>
        Création et maintenance d'<Highlight>APIs métier</Highlight>{" "}
        pour la gestion d’équipements solaires, des clients et de la logistique.
      </>,
      <>
        Conception d'architectures <Highlight>offline-first</Highlight>{" "}
        pour les équipes terrain en zones à faible connectivité.
      </>,
      <>
        Optimisation de la <Highlight>performance</Highlight>{" "}
        (requêtes, synchronisation des données, rendu React).
      </>,
      <>
        Travail en lien direct avec les <Highlight>équipes locales</Highlight>{" "}
        (Afrique de l’Ouest & Centrale) : remontée terrain, priorisation des besoins,
        suivi des évolutions.
      </>,
      <>
        Analyse et résolution de <Highlight>bugs critiques</Highlight>{" "}
        impactant les usages terrain.
      </>,
      <>
        Participation à la <Highlight>refonte UI/UX</Highlight>{" "}
        de plusieurs interfaces métier.
      </>,
      <>
        Gestion et structuration des données dans <Highlight>Couchbase</Highlight>{" "}
        et services back-end en Go / Node.js.
      </>,
      <>
        Mise en place de <Highlight>process qualité</Highlight>{" "}
        (code review, tests manuels & tests de régression).
      </>,
      <>
        Encadrement et <Highlight>formation</Highlight>{" "}
        de stagiaires développeur·ses.
      </>,
    ],
    stack: ["React", "Node.js", "Go", "Couchbase", "React Native", "Git"],
    logo: "/logos/mjb.jpeg",
    featured: true,
  },
  {
    company: "MyJouleBox",
    role: "Développeuse Web — Stage",
    period: "2018",
    location: "Paris",
    tagline: "Première immersion dans l’écosystème produit & solaire de MyJouleBox.",
    bullets: [
      <>
        Refonte de l'application principale de{" "}
        <Highlight>suivi énergétique</Highlight>{" "}
        (UI/UX + implémentation front).
      </>,
      <>
        Développement de {" "}
        <Highlight>fonctionnalités front</Highlight>{" "}
        React.
      </>,
      <>
        Maintenance et support d'une application mobile en{" "}
        <Highlight>React Native</Highlight>.
      </>,
    ],
    stack: ["React", "React Native", "JavaScript", "Git"],
    logo: "/logos/mjb.jpeg",
  },
  {
    company: "Accueil de loisirs St Médard",
    role: "Coordinatrice des activités",
    period: "2014 - 2016",
    location: "Paris",
    tagline: "Structure d’accueil de loisirs pour enfants et adolescents (3 à 16 ans).",
    bullets: [
      <>
        Organisation et <Highlight>planification</Highlight>{" "}
        d’activités adaptées aux différents âges.
      </>,
      <>
        <Highlight>Coordination d’équipe</Highlight>{" "}
        d’animateurs·rices.
      </>,
      <>
        Gestion de <Highlight>plannings</Highlight>{" "}
        et de <Highlight>budgets d’animation</Highlight>.
      </>,
    ],
    stack: ["Gestion", "Organisation", "Encadrement", "Pédagogie"],
    logo: "/logos/mjsm.png",
  },
];

function ExperienceCard({ experience }: { experience: Experience }) {
    return (
        <BaseRetroCard
            header={{
                logo: experience.logo,
                logoAlt: experience.company,
                title: experience.role,
                subtitle: `${experience.company} • ${experience.period}${
                experience.location ? ` • ${experience.location}` : ""
                }`,
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
            subtitle="Produits web, énergie solaire & encadrement"
            // intro="J’ai majoritairement travaillé comme développeuse fullstack chez MyJouleBox, une startup dans le solaire en Afrique, tout en gardant une expérience forte de l’encadrement et du terrain grâce à mon parcours en animation."
        >
            <Box
                sx={{
                    width: "100%",
                    // maxWidth: 1200,
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
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
