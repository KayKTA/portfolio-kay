import { Box, Grid, Typography, Stack, Chip } from "@mui/material";
import SlideLayout from "@/components/layout/SlideLayout";
import { SimpleChip } from "../ui/RetroChip";

type Formation = {
    year: string;
    school: string;
    title: string;
    intro?: string;         // accroche
    description?: string[];   // paragraphe explicatif
    techs?: string[];       // badges techno
    logo?: string;
    isNew?: boolean;
};

const FORMATIONS_LARGE: Formation[] = [
    {
        year: "2025",
        school: "Le Wagon",
        title: "Data Science & IA",
        intro: "Bootcamp intensif orienté projet.",
        description: [
            "Apprentissage de la manipulation et de la visualisation de données avec Python, Pandas et Matplotlib",
            "Mise en place de modèles de Machine Learning et de Deep Learning avec scikit-learn et TensorFlow",
            "Exploration de l’IA générative, notamment les grands modèles de langage (LLMs) et les approches RAG (Retrieval-Augmented Generation)",
            "Déploiement et mise en production de modèles via Docker et FastAPI",
            "Conception et automatisation de pipelines de données avec Prefect",

        ],
        techs: ["Python", "Pandas", "Jupyter", "Scikit-learn", "TensorFlow", "Docker", "Google Cloud Platform", ],
        logo: "/logos/wagon.png",
        isNew: true,
    },
]
const FORMATIONS: Formation[] = [
    {
        year: "2018",
        school: "Coding Academy by EPITECH",
        title: "Développeur Web FullStack",
        intro: "Formation intensive (5 mois) centrée sur les fondamentaux du développement web.",
        description:[
            "Piscine C, algorithmie",
            "Développement front (AngularJS/React) et back (Node.js, Express)",
            "Gestion de bases de données SQL/NoSQL",
            "Méthodologie projet & travail en équipe agile",
        ],
        techs: ["JavaScript", "PHP", "Node.js", "SQL", "NoSQL", "C", "Git"],
        logo: "/logos/coding.png",
    },

    {
        year: "2017",
        school: "IFOCOP Paris XI",
        title: "Développeur Intégrateur Web",
        intro: "Formation de 8 mois (4 mois de cours + 4 mois de stage).",
        description:[
            "Intégration de maquettes: HTML / CSS",
            "Mise en place de sites responsives",
            "Bases de JavaScript",
            "Introduction au développement PHP/MySQL",
        ],
        techs: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Git", "Agile"],
        logo: "/logos/ifocop.png",
    }
    // {
    //     year: "2013",
    //     school: "École Nationale de Commerce — Paris",
    //     title: "BTS Comptabilité & Gestion",
    //     intro: "Formation en gestion et finance d’entreprise.",
    //     description: [
    //         "Acquisition des bases en comptabilité générale",
    //         "contrôle de gestion et droit appliqué, constituant une solide fondation analytique",
    //     ],
    //     techs: ["SQL", "Access", "Comptabilité", "Management" ],
    //     logo: "/logos/enc.jpeg",
    // },
];

function FormationCard({ formation }: { formation: Formation }) {
    return (
        <Box
            sx={{
                border: "4px solid #AE2B1F",
                borderRadius: 1,
                bgcolor: "background.default",
                p: 2,
                height: "100%",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 1.2,
            }}
        >
            {/* Badge NEW */}
            {formation.isNew && (
                <Box
                    sx={{
                        position: "absolute",
                        top: -14,
                        right: -14,
                        bgcolor: "#AE2B1F",
                        color: "white",
                        fontWeight: 900,
                        fontSize: "0.75rem",
                        px: 1.5,
                        py: 0.5,
                        borderRadius: "50%",
                        transform: "rotate(-10deg)",
                    }}
                >
                    NEW
                </Box>
            )}

            {/* Header : logo + titre */}
            <Stack direction="row" spacing={2} alignItems="center">
                {formation.logo && (
                    <Box
                        component="img"
                        src={formation.logo}
                        alt={formation.title}
                        sx={{
                            width: 52,
                            height: 52,
                            objectFit: "contain",
                            // filter: "grayscale(100%) contrast(1.2)",
                        }}
                    />
                )}
                <Stack sx={{ flex: 1 }} spacing={1}>
                    <Stack direction="row" justifyContent="space-between" alignItems="baseline">
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 900,
                                textTransform: "uppercase",
                                color: "primary.main",
                                lineHeight: 1.1,
                            }}
                        >
                            {formation.title}
                        </Typography>
                        <Typography
                            variant="h6"
                            // color="text.secondary"
                            sx={{
                                fontWeight: 900,
                                textTransform: "uppercase",
                                color: "primary.main",
                                lineHeight: 1.1,
                            }}
                        >
                            {formation.year}
                        </Typography>
                    </Stack>
                    <Typography
                        variant="body2"
                        sx={{
                            fontWeight: 700,
                            color: "text.primary",
                            borderBottom: "2px solid #AE2B1F",
                            pb: 0.5,
                        }}
                    >
                        {formation.school}
                    </Typography>
                </Stack>
            </Stack>

            {/* Intro */}
            {formation.intro && (
                <Typography variant="body2" sx={{ fontWeight: 700, color: "text.primary" }}>
                    {formation.intro}
                </Typography>
            )}

            {/* Description */}
            {formation.description && (
                // <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.5 }}>
                //   {formation.description}
                // </Typography>
                <Stack spacing={0.5} sx={{ mt: 1, flex: 1 }} useFlexGap>
                    {formation.description.map((desc, i) => (
                        <Typography
                            key={i}
                            variant="body2"
                            sx={{
                                color: "text.secondary",
                                fontSize: "0.85rem",
                                "&:before": {
                                    content: '"★"',
                                    color: "#AE2B1F",
                                    fontWeight: 900,
                                    display: "inline-block",
                                    width: "1.2em",
                                },
                            }}
                        >
                            {" "}{desc}
                        </Typography>
                    ))}
                </Stack>
            )}

            {/* Badges techno */}
            {formation.techs?.length ? (
                <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: "auto" }} useFlexGap>
                    {formation.techs.map((techno) => (
                        <SimpleChip item={techno} key={techno} />
                    ))}
                </Stack>
            ) : null}
        </Box>
    );
}

export default function EducationRetroSlide() {
    return (
        <SlideLayout
            title="Formations"
            intro="J’ai commencé à coder en autodidacte puis j’ai consolidé mes compétences à travers différentes formations intensives"
        >
            <Box sx={{ width: "100%", maxWidth: 1100 }}>
                <Grid container spacing={3}>
                    {FORMATIONS_LARGE.map((formation) => (
                        <Grid key={formation.title}  size={{ xs:12}}>
                            <FormationCard formation={formation} />
                        </Grid>
                    ))}
                    {FORMATIONS.map((formation) => (
                        <Grid key={formation.title}  size={{ xs:12, sm:6}}>
                            <FormationCard formation={formation} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </SlideLayout>
    );
}
