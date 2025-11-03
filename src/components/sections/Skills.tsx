"use client";

import { Box, Stack } from "@mui/material";
import SlideLayout from "@/components/layout/SlideLayout";
import { LanguageRow, LangItem } from "@/components/ui/LanguageRow";
import RetroCard from "@/components/ui/RetroCard";

const LANGAGES: LangItem[] = [
    { label: "JavaScript", value: 85, logo: "/logos/js.png" },
    { label: "TypeScript", value: 75, logo: "/logos/ts.png" },
    { label: "Python", value: 50, logo: "/logos/python.png" },
    { label: "SQL", value: 80, logo: "/logos/sql.png" },
    { label: "Golang", value: 70, logo: "/logos/go.png" },
];

const FRAMEWORKS = [
    { label: "React JS", logo: "/logos/react.png" },
    { label: "Node.js", logo: "/logos/nodejs.png" },
    { label: "Express.js", logo: "/logos/express.png" },
    { label: "FastAPI", logo: "/logos/fastapi.png" },
    { label: "Couchbase", logo: "/logos/couchbase.png" },
];

const DATA_IA = [
    { label: "Numpy", logo: "/logos/numpy.png" },
    { label: "Pandas", logo: "/logos/pandas.png" },
    { label: "Matplotlib", logo: "/logos/matplotlib.png" },
    { label: "Seaborn", logo: "/logos/seaborn.png" },
    { label: "Scikit-learn", logo: "/logos/sklearn.png" },
    { label: "TensorFlow", logo: "/logos/tensorflow.png" },
    { label: "Keras", logo: "/logos/keras.png" },
    { label: "Streamlit", logo: "/logos/streamlit.png" },
    { label: "Jupyter", logo: "/logos/jupyter.png" },
    { label: "Google Colab", logo: "/logos/colab.png" },
];

const DEVOPS_CLOUD = [
    { label: "Docker", logo: "/logos/docker.png" },
    { label: "Git", logo: "/logos/git.png" },
    { label: "MLflow", logo: "/logos/mlflow.png" },
    { label: "Prefect", logo: "/logos/prefect.png" },
    { label: "Linux / Bash", logo: "/logos/linux.png" },
    { label: "Google Cloud Platform", logo: "/logos/gcp.png" },
];


export default function Skills() {
    return (
        <SlideLayout
            title="Skills"
            subtitle="Langages • Data & IA • DevOps & Cloud"
        >
            <Box
                sx={{
                    width: "100%",
                    maxWidth: 1200,
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
                    gap: { xs: 2, md: 3 },
                    alignItems: "stretch",
                }}
            >
                <RetroCard
                    title="Langages de Programmation / Frameworks"
                    icon={<span style={{ fontSize: 24 }}>💻</span>}
                    items={FRAMEWORKS}
                >
                    {/* Langages avec jetons */}
                    <Stack spacing={1.25}>
                        {LANGAGES.map((lg) => (
                            <LanguageRow key={lg.label} {...lg} />
                        ))}
                    </Stack>
                    <Box sx={{ height: 2, bgcolor: "primary.main", opacity: 0.25, my: 2 }} />
                </RetroCard>

                {/* Colonne droite — deux cartes empilées */}
                <Stack spacing={{ xs: 2, md: 3 }}>
                    <RetroCard title="Data & IA" items={DATA_IA} icon={<span style={{ fontSize: 24 }}>📊</span>} />
                    <RetroCard title="DevOps & Cloud" items={DEVOPS_CLOUD} icon={<span style={{ fontSize: 24 }}>🛠️</span>} />
                </Stack>
            </Box>
        </SlideLayout>
    );
}
