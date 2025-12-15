"use client";

import { Box, Stack, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import SlideLayout from "@/components/layout/SlideLayout";
import LinkBtn from "@/components/common/LinkBtn";
import SocialIconButton from "@/components/common/SocialIconButton";

type Props = {
    email: string;
    linkedin: string;
    github: string;
    cvUrl?: string;
};

export default function ContactEnhanced({
    email,
    linkedin,
    github,
    cvUrl = "/cv.pdf",
}: Props) {
    return (
        <SlideLayout
            id="contact"
            title="Contact"
            subtitle="Envie de collaborer ?"
        >
            <Container
                maxWidth="lg"
                sx={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Box sx={{ width: "100%" }}>
                    {/* Layout en 2 colonnes : Gauche = CTA / Droite = Objectifs */}
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr", md: "1fr 1.5fr" },
                            gap: 3,
                        }}
                    >
                        {/* COLONNE GAUCHE : Contact rapide */}
                        <Stack spacing={2.5}>
                            {/* Sticker "Disponible" */}
                            <Box
                                component={motion.div}
                                animate={{ rotate: [-2, 2, -2] }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                sx={{
                                    alignSelf: "flex-start",
                                    bgcolor: "#FFD966",
                                    border: "4px solid",
                                    borderColor: "text.primary",
                                    px: 3,
                                    py: 1.5,
                                    transform: "rotate(-3deg)",
                                    boxShadow: "6px 6px 0 rgba(0,0,0,0.2)",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 900,
                                        fontSize: "1.1rem",
                                        textTransform: "uppercase",
                                        letterSpacing: 1,
                                    }}
                                >
                                    ✨ Disponible immédiatement
                                </Typography>
                            </Box>

                            {/* Message d'accroche */}
                            <Box
                                sx={{
                                    border: "5px solid",
                                    borderColor: "primary.main",
                                    bgcolor: "background.paper",
                                    p: 3,
                                    boxShadow: "8px 8px 0 rgba(0,0,0,0.15)",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "1.1rem",
                                        fontWeight: 600,
                                        lineHeight: 1.6,
                                        color: "text.primary",
                                    }}
                                >
                                    Envie de discuter d'un projet, d'une opportunité ou juste
                                    de faire connaissance ? 👋
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "1rem",
                                        fontWeight: 600,
                                        mt: 2,
                                        color: "primary.main",
                                    }}
                                >
                                    Je réponds généralement sous 24h !
                                </Typography>
                            </Box>

                            {/* Boutons CTA */}
                            <Stack spacing={1.5}>
                                <LinkBtn
                                    href={`mailto:${email}`}
                                    label={`${email}`}
                                    variant="primary"
                                />
                                <LinkBtn
                                    href={cvUrl}
                                    label="Télécharger mon CV"
                                    variant="outline"
                                />
                            </Stack>

                            {/* Social Links */}
                            <Stack direction="row" spacing={1.5}>
                                <SocialIconButton
                                    href={linkedin}
                                    src="/socials/linkedin.svg"
                                    alt="LinkedIn"
                                />
                                <SocialIconButton
                                    href={github}
                                    src="/socials/github.svg"
                                    alt="GitHub"
                                />
                            </Stack>
                        </Stack>

                        {/* COLONNE DROITE : Ce que je cherche */}
                        <Box
                            sx={{
                                border: "6px solid",
                                borderColor: "primary.main",
                                bgcolor: "primary.main",
                                p: 3,
                                position: "relative",
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "column",
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
                                {/* Badge */}
                                <Box
                                    sx={{
                                        display: "inline-block",
                                        px: 2,
                                        py: 0.75,
                                        bgcolor: "background.default",
                                        border: "3px solid",
                                        borderColor: "background.default",
                                        mb: 2.5,
                                    }}
                                >
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            fontWeight: 900,
                                            textTransform: "uppercase",
                                            color: "primary.main",
                                            letterSpacing: 1,
                                            fontSize: "0.85rem",
                                        }}
                                    >
                                        ★ Ce que je cherche ★
                                    </Typography>
                                </Box>

                                {/* Message principal */}
                                <Typography
                                    sx={{
                                        fontSize: { xs: "1.1rem", md: "1.25rem" },
                                        fontWeight: 700,
                                        lineHeight: 1.5,
                                        color: "background.default",
                                        mb: 3,
                                    }}
                                >
                                    Un poste de{" "}
                                    <Box
                                        component="span"
                                        sx={{
                                            display: "inline-block",
                                            bgcolor: "rgba(255,255,255,0.2)",
                                            px: 1,
                                            py: 0.25,
                                        }}
                                    >
                                        dev front ou fullstack
                                    </Box>{" "}
                                    (React, Next.js, Node.js) où je peux coder au quotidien,
                                    avoir un impact produit et évoluer vers un rôle de{" "}
                                    <Box
                                        component="span"
                                        sx={{
                                            display: "inline-block",
                                            bgcolor: "rgba(255,255,255,0.2)",
                                            px: 1,
                                            py: 0.25,
                                        }}
                                    >
                                        lead technique
                                    </Box>
                                    .
                                </Typography>

                                {/* Points clés en grid 2x2 */}
                                <Box
                                    sx={{
                                        display: "grid",
                                        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                                        gap: 1.5,
                                    }}
                                >
                                    {[
                                        {
                                            emoji: "⚡",
                                            text: "Stack moderne React/Next/Node",
                                        },
                                        {
                                            emoji: "🎯",
                                            text: "Projets produits concrets",
                                        },
                                        {
                                            emoji: "🚀",
                                            text: "Montée en responsabilités",
                                        },
                                        {
                                            emoji: "🤝",
                                            text: "Équipe bienveillante",
                                        },
                                    ].map((item, i) => (
                                        <Box
                                            key={i}
                                            component={motion.div}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 1,
                                                px: 1.5,
                                                py: 1,
                                                bgcolor: "background.default",
                                                border: "3px solid",
                                                borderColor: "background.default",
                                            }}
                                        >
                                            <Typography sx={{ fontSize: "1.3rem" }}>
                                                {item.emoji}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontWeight: 700,
                                                    color: "text.primary",
                                                    fontSize: "0.85rem",
                                                    lineHeight: 1.3,
                                                }}
                                            >
                                                {item.text}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>

                                {/* CTA final */}
                                <Box
                                    sx={{
                                        mt: 3,
                                        pt: 2.5,
                                        borderTop: "3px solid rgba(255,255,255,0.3)",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: "1.1rem",
                                            fontWeight: 700,
                                            color: "background.default",
                                            textAlign: "center",
                                        }}
                                    >
                                        Une opportunité, un projet, une idée ?{" "}
                                        <Box
                                            component="span"
                                            sx={{
                                                display: "inline-block",
                                                animation: "wave 1s ease-in-out infinite",
                                                "@keyframes wave": {
                                                    "0%, 100%": { transform: "rotate(0deg)" },
                                                    "25%": { transform: "rotate(20deg)" },
                                                    "75%": { transform: "rotate(-20deg)" },
                                                },
                                            }}
                                        >
                                            👋
                                        </Box>
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </SlideLayout>
    );
}
