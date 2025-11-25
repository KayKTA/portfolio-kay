import { Box, Chip, Stack } from "@mui/material";
import SlideLayout from "@/components/layout/SlideLayout";
import BaseRetroCard from "@/components/ui/BaseRetroCard";

type Experience = {
  company: string;
  role: string;
  period: string;        // "2018 — 2024"
  location?: string;     // "Paris"
  tagline?: string;      // une ligne sous le header (ex: secteur)
  bullets?: string[];    // points d'impact / missions
  stack?: string[];      // badges techno
  logo?: string;         // /public/logos/*.svg (optionnel)
  featured?: boolean;    // carte principale
};

const EXPERIENCES: Experience[] = [
  {
    company: "MyJouleBox",
    role: "Développeuse Fullstack JavaScript",
    period: "2018 - 2024",
    location: "Paris",
    tagline: "Startup spécialisée dans l’énergie solaire hors-réseau en Afrique",
    bullets: [
      "Développement end-to-end de produits (Couchbase, Go, Node.js, React) avec livraison régulière de nouvelles features.",
      "Conception, intégration et optimisation d’APIs : gestion d’équipements solaires, suivi clients et flux logistiques.",
      "Applications mobiles offline-first pour les usages terrain et zones à faible connectivité.",
      "Collaboration étroite avec les équipes locales : remontées du terrain, correction de bugs, qualification et priorisation des besoins.",
      "Encadrement : participation au recrutement et formation de stagiaires développeur·ses.",
    ],
    stack: ["React", "Node.js", "Go", "Couchbase", "React Native", "Git"],
    logo: "/logos/mjb.jpeg",
    featured: true,
  },
  {
    company: "MyJouleBox",
    role: "Développeuse Web | Stage",
    period: "2018",
    location: "Paris",
    bullets: [
      "Refonte de l’application principale de suivi énergétique (UI/UX + code).",
      "Développement de nouvelles fonctionnalités côté front (React).",
      "Maintenance et support d’une application mobile (React Native).",
    ],
    stack: ["React", "React Native", "JavaScript", "Git"],
    logo: "/logos/mjb.jpeg",
  },
  {
    company: "Accueil de loisirs St Médard",
    role: "Coordinatrice des Activités",
    period: "2014 - 2016",
    bullets: [
    //   "Organisation d’activités",
      "Coordination d’équipe",
      "Gestion de planning et de budgets.",
    ],
    stack: ["Gestion", "Organisation", "Encadrement"],
    logo: "/logos/mjsm.png",
  },
];

/* ===== UI helpers ===== */
function ExperienceCard({ experience }: { experience: Experience }) {
    return (
        <BaseRetroCard
            header={{
                logo: experience.logo,
                logoAlt: experience.company,
                // logoFilter: "grayscale(100%) contrast(1.2)",
                title: experience.role,
                subtitle: `${experience.company} • ${experience.period}${experience.location ? ` • ${experience.location}` : ""}`,
            }}
            intro={experience.tagline}
            bullets={experience.bullets}
        >
            {/* Stack techno */}
            {experience.stack && experience.stack.length > 0 && (
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: "auto" }}>
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

/* ===== Slide ===== */
export default function ExperienceSlide() {
    const featured = EXPERIENCES.find((e) => e.featured) ?? EXPERIENCES[0];
    const others = EXPERIENCES.filter((e) => e !== featured);

    return (
        <SlideLayout title="Expériences" subtitle="Fullstack • Startups">
            <Box
                sx={{
                    width: "100%",
                    maxWidth: 1200,
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "1.2fr 0.8fr" },
                    gap: { xs: 2, md: 3 },
                    alignItems: "stretch",
                }}
            >
                {/* Colonne gauche : carte principale */}
                <ExperienceCard experience={featured} />

                {/* Colonne droite : deux cartes empilées */}
                <Stack spacing={{ xs: 2, md: 3 }}>
                    {others.map((e) => (
                        <ExperienceCard key={e.company + e.period} experience={e} />
                    ))}
                </Stack>
            </Box>
        </SlideLayout>
    );
}
