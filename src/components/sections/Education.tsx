import { Box, Grid, Stack } from "@mui/material";
import type { ReactNode } from "react";
import SlideLayout from "@/components/layout/SlideLayout";
import { SimpleChip } from "@/components/ui/RetroChip";
import BaseRetroCard from "@/components/ui/BaseRetroCard";
import Highlight from "@/components/ui/Highlight";

type Formation = {
    year: string;
    school: string;
    title: string;
    intro?: string;
    description?: ReactNode[];   // ⬅️ important : plus string[]
    techs?: string[];
    logo?: string;
    isNew?: boolean;
};

const FORMATIONS_LARGE: Formation[] = [
    {
        year: "2025",
        school: "Le Wagon",
        title: "Data Science & IA",
        intro: "Bootcamp intensif orienté projet : de la manipulation de données jusqu'au déploiement de modèles.",
        description: [
            <>
                Manipulation, préparation et {" "}
                <Highlight>visualisation de données</Highlight>{" "}
                (Python, Pandas, notebooks).
            </>,
            <>
                Mise en place de modèles de{" "}
                <Highlight>Machine Learning</Highlight>{" "}
                avec scikit-learn (classification, régression, clustering).
            </>,
            <>
                Introduction au{" "}
                <Highlight>Deep Learning</Highlight>{" "}
                et à TensorFlow.
            </>,
            <>
                Découverte de l'<Highlight>IA générative</Highlight>{" "}
                : LLMs et approches RAG (Retrieval-Augmented Generation).
            </>,
            <>
                Industrialisation : <Highlight>APIs</Highlight>{" "}
                (FastAPI), conteneurisation <Highlight>Docker</Highlight>{" "}
                et déploiement sur le cloud.
            </>,
        ],
        techs: [
            "Python",
            "Pandas",
            "Jupyter",
            "Scikit-learn",
            "TensorFlow",
            "Docker",
            "Google Cloud Platform",
        ],
        logo: "/logos/wagon.png",
        isNew: true,
    },
];

const FORMATIONS: Formation[] = [
    {
        year: "2018",
        school: "Coding Academy by EPITECH",
        title: "Développeur Web FullStack",
        intro: "Formation intensive (5 mois) sur les fondamentaux du développement web moderne.",
        description: [
            <>
                <Highlight>Piscine C</Highlight>, algorithmie et bases solides en logique
                de programmation.
            </>,
            <>
                Développement <Highlight>front</Highlight>{" "}
                (AngularJS/React) et <Highlight>back</Highlight>{" "}
                (Node.js).
            </>,
            <>
                Gestion de bases de données{" "}
                <Highlight>SQL/NoSQL</Highlight>.
            </>,
            // <>
            //     Projets en équipe avec méthodologie{" "}
            //     <Highlight>agile</Highlight>.
            // </>,
        ],
        techs: ["JavaScript", "PHP", "Node.js", "SQL", "NoSQL", "C", "Git"],
        logo: "/logos/coding.png",
    },
    {
        year: "2017",
        school: "IFOCOP Paris XI",
        title: "Développeur Intégrateur Web",
        intro: "Formation de 8 mois sur les bases du développement.",
        description: [
            <>
                Intégration de maquettes (
                <Highlight>HTML/CSS</Highlight>
                ) et mise en place de sites responsives.
            </>,
            <>
                Découverte et pratique des bases de{" "}
                <Highlight>JavaScript</Highlight>.
            </>,
            <>
                Introduction au développement{" "}
                <Highlight>PHP/MySQL</Highlight>.
            </>,
        ],
        techs: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Git", "Agile"],
        logo: "/logos/ifocop.png",
    },
];

function FormationCard({ formation }: { formation: Formation }) {
    return (
        <BaseRetroCard
            badge={formation.isNew ? { text: "NEW" } : undefined}
            header={{
                logo: formation.logo,
                logoAlt: formation.title,
                title: formation.title,
                meta: formation.year,
                subtitle: (
                    <Box
                        component="span"
                        sx={{
                            borderBottom: "2px solid #AE2B1F",
                            pb: 0.5,
                            display: "inline-block",
                        }}
                    >
                        {formation.school}
                    </Box>
                ),
            }}
            intro={formation.intro}
            bullets={formation.description}
        >
            {formation.techs?.length ? (
                <Stack
                    direction="row"
                    spacing={1}
                    flexWrap="wrap"
                    sx={{ mt: "auto" }}
                    useFlexGap
                >
                    {formation.techs.map((techno) => (
                        <SimpleChip item={techno} key={techno} />
                    ))}
                </Stack>
            ) : null}
        </BaseRetroCard>
    );
}

export default function EducationRetroSlide() {
    return (
        <SlideLayout
            title="Formations"
            subtitle="Du web à la data"
            intro="J'ai commencé à coder en autodidacte, puis j'ai consolidé mes compétences avec plusieurs formations intensives."
        >
            <Box sx={{ width: "100%" }}>
                <Grid container spacing={1.5} maxWidth="lg" mx="auto" >
                    {FORMATIONS_LARGE.map((formation) => (
                        <Grid key={formation.title} size={{ xs: 12 }}>
                            <FormationCard formation={formation} />
                        </Grid>
                    ))}
                    {FORMATIONS.map((formation) => (
                        <Grid key={formation.title} size={{ xs: 12, sm: 6 }}>
                            <FormationCard formation={formation} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </SlideLayout>
    );
}
