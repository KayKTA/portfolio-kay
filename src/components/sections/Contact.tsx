"use client";

import { Box, Stack, Typography } from "@mui/material";
import SlideLayout from "@/components/layout/SlideLayout";
import { LinkBtn, PostIt } from "@/components/common/PostIt";

type Props = {
    email: string;
    linkedin: string;
    github: string;
    cvUrl?: string; // URL du CV à télécharger
};

export default function Contact({
    email,
    linkedin,
    github,
    cvUrl = "/cv.pdf",
}: Props) {
    return (
        <SlideLayout
            title="Contact"
            subtitle="Envie de travailler ensemble ?"
        >
            <Box
                sx={{
                    width: "100%",
                    maxWidth: 1200,
                    display: "flex",
                    flexDirection: "column",
                    gap: { xs: 3, md: 4 },
                }}
            >
                {/* Section principale avec post-its */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            sm: "repeat(2, 1fr)",
                            md: "repeat(3, 1fr)",
                        },
                        gap: 3,
                        justifyItems: "center",
                    }}
                >
                    {/* Post-it Contact */}
                    <PostIt color="#FFD966" rotate={-3}>
                        <Typography
                            sx={{
                                fontSize: { xs: "1.3rem", md: "1.5rem" },
                                fontFamily: "'Permanent Marker', cursive",
                                lineHeight: 1.3,
                                mb: 1.5,
                            }}
                        >
                            📬 Me contacter
                        </Typography>
                        <Stack spacing={1.2}>
                            <LinkBtn href={`mailto:${email}`} label={email} emoji="✉️" />
                        </Stack>
                    </PostIt>

                    {/* Post-it Réseaux */}
                    <PostIt color="#FFC66B" rotate={2}>
                        <Typography
                            sx={{
                                fontSize: { xs: "1.3rem", md: "1.5rem" },
                                fontFamily: "'Permanent Marker', cursive",
                                lineHeight: 1.3,
                                mb: 1.5,
                            }}
                        >
                            🌐 Me suivre
                        </Typography>
                        <Stack spacing={1.2}>
                            <LinkBtn href={linkedin} label="LinkedIn" emoji="💼" />
                            <LinkBtn href={github} label="GitHub" emoji="💻" />
                        </Stack>
                    </PostIt>

                    {/* Post-it CV */}
                    <PostIt color="#FFCBA4" rotate={-2}>
                        <Typography
                            sx={{
                                fontSize: { xs: "1.3rem", md: "1.5rem" },
                                fontFamily: "'Permanent Marker', cursive",
                                lineHeight: 1.3,
                                mb: 1.5,
                            }}
                        >
                            📄 Mon CV
                        </Typography>
                        <LinkBtn href={cvUrl} label="Télécharger" emoji="⬇️" />
                    </PostIt>
                </Box>

                {/* Carte de présentation améliorée */}
                <Box
                    sx={{
                        border: "5px solid",
                        borderColor: "primary.main",
                        bgcolor: "primary.main",
                        borderRadius: 0,
                        p: { xs: 3, md: 4 },
                        position: "relative",
                        overflow: "hidden",
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background:
                                "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.03) 10px, rgba(0,0,0,0.03) 20px)",
                            pointerEvents: "none",
                        },
                    }}
                >
                    <Box sx={{ position: "relative", zIndex: 1 }}>
                        {/* Badge en haut */}
                        <Box
                            sx={{
                                display: "inline-block",
                                px: 2.5,
                                py: 0.75,
                                bgcolor: "background.default",
                                border: "3px solid",
                                borderColor: "background.default",
                                borderRadius: 0,
                                mb: 3,
                            }}
                        >
                            <Typography
                                variant="caption"
                                sx={{
                                    fontWeight: 900,
                                    textTransform: "uppercase",
                                    color: "primary.main",
                                    letterSpacing: 1.5,
                                    fontSize: "0.9rem",
                                }}
                            >
                                💡 Ce que je cherche aujourd&apos;hui
                            </Typography>
                        </Box>

                        {/* Texte principal */}
                        <Typography
                            sx={{
                                fontSize: { xs: "1.25rem", md: "1.5rem" },
                                fontWeight: 700,
                                lineHeight: 1.5,
                                color: "background.default",
                                textAlign: { xs: "left", md: "center" },
                                maxWidth: 900,
                                mx: "auto",
                            }}
                        >
                            Je cherche un poste où je peux construire des applications{" "}
                            <Box
                                component="span"
                                sx={{
                                    bgcolor: "background.default",
                                    color: "primary.main",
                                    px: 0.5,
                                    py: 0.25,
                                    borderRadius: 0,
                                    fontWeight: 900,
                                }}
                            >
                                utiles, belles et bien pensées
                            </Box> tout en évoluant
                            progressivement vers un rôle de{" "}
                            <Box
                                component="span"
                                sx={{
                                    bgcolor: "background.default",
                                    color: "primary.main",
                                    px: 0.5,
                                    py: 0.25,
                                    borderRadius: 0,
                                    fontWeight: 900,
                                }}
                            >
                                lead technique
                            </Box>{" "}
                            au sein d'une équipe bienveillante et exigeante.
                        </Typography>

                        {/* Points clés */}
                        <Stack
                            direction={{ xs: "column", md: "row" }}
                            spacing={2}
                            sx={{
                                mt: 4,
                                justifyContent: "center",
                                flexWrap: "wrap",
                                gap: 2,
                            }}
                        >
                            {[
                                {
                                    emoji: "⚡",
                                    text: "Stack moderne (React, Next.js, Node.js)",
                                },
                                {
                                    emoji: "🎯",
                                    text: "Projets concrets avec de vrais enjeux produit",
                                }
                            ].map((item, i) => (
                                <Box
                                    key={i}
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                        px: 2.5,
                                        py: 1.25,
                                        bgcolor: "background.default",
                                        border: "3px solid",
                                        borderColor: "background.default",
                                        borderRadius: 0,
                                        marginLeft: 0,
                                    }}
                                >
                                    <Typography sx={{ fontSize: "1.5rem" }}>
                                        {item.emoji}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontWeight: 700,
                                            color: "text.primary",
                                            fontSize: { xs: "0.9rem", md: "1rem" },
                                        }}
                                    >
                                        {item.text}
                                    </Typography>
                                </Box>
                            ))}
                        </Stack>
                        <Stack
                            direction={{ xs: "column", md: "row" }}
                            spacing={2}
                            sx={{
                                mt: 2,
                                justifyContent: "center",
                                flexWrap: "wrap",
                                gap: 2,
                            }}
                        >
                            {[

                                {
                                    emoji: "🚀",
                                    text: "Montée en responsabilités & mentoring",
                                },
                                {
                                    emoji: "🤝",
                                    text: "Équipe curieuse, bienveillante et passionnée",
                                },
                            ].map((item, i) => (
                                <Box
                                    key={i}
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                        px: 2.5,
                                        py: 1.25,
                                        bgcolor: "background.default",
                                        border: "3px solid",
                                        borderColor: "background.default",
                                        borderRadius: 0,
                                        marginLeft: 0,
                                    }}
                                >
                                    <Typography sx={{ fontSize: "1.5rem" }}>
                                        {item.emoji}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontWeight: 700,
                                            color: "text.primary",
                                            fontSize: { xs: "0.9rem", md: "1rem" },
                                        }}
                                    >
                                        {item.text}
                                    </Typography>
                                </Box>
                            ))}
                        </Stack>

                        <Box sx={{ textAlign: "center", mt: 4 }}>
                            <Typography
                                sx={{
                                    fontSize: { xs: "1.1rem", md: "1.25rem" },
                                    fontWeight: 700,
                                    color: "background.default",
                                    fontFamily: "'Permanent Marker', cursive",
                                }}
                            >
                                Une opportunité, un projet, une idée ? Parlons-en ! 💬
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </SlideLayout>
    );
}
