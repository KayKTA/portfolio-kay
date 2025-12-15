"use client";

import { Box, Stack, Typography } from "@mui/material";
import SlideLayout from "@/components/layout/SlideLayout";
import LinkBtn from "@/components/common/LinkBtn";
import SocialIconButton from "@/components/common/SocialIconButton";

type Props = {
    email: string;
    linkedin: string;
    github: string;
    cvUrl?: string;
};

export default function Contact({
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
            intro="Je suis disponible immédiatement pour de nouvelles opportunités. N'hésitez pas à me contacter via les liens ci-dessous !"
        >
        <Box
            sx={{
                width: "100%",
                mx: "auto",
                display: "flex",
                flexDirection: "column",
                gap: { xs: 3, md: 4 },
            }}
        >
            {/* BOUTONS PRINCIPAUX */}
            <Stack
                spacing={1.5}
                direction={{ xs: "column", sm: "row" }}
            >
                <LinkBtn
                    href={cvUrl}
                    label="Télécharger mon CV"
                    variant="primary"
                />
                <LinkBtn
                    href={`mailto:${email}`}
                    label={email}
                    variant="outline"
                />

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 1.5,
                        alignItems: "center",
                    }}
                >
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
                </Box>
            </Stack>

            {/* --- BLOC OBJECTIF FULL WIDTH --- */}
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
                    ★ Ce que je cherche aujourd&apos;hui ★
                </Typography>
                </Box>

                {/* Texte principal */}
                <Typography
                sx={{
                    fontSize: { xs: "1.2rem", md: "1.4rem" },
                    fontWeight: 700,
                    lineHeight: 1.5,
                    color: "background.default",
                    textAlign: { xs: "left", md: "center" },
                    maxWidth: 1250,
                    mx: "auto",
                }}
                >
                Je recherche un poste de{" "}
                <Box
                    component="span"
                    sx={{
                    textDecoration: "underline",
                    textUnderlineOffset: 4,
                    fontWeight: 700,
                    }}
                >
                    développeuse fullstack
                </Box>{" "}
                (React, Next.js, Node.js) où je peux continuer à coder au
                quotidien, avoir un vrai impact sur le produit et évoluer
                progressivement vers un rôle de{" "}
                <Box
                    component="span"
                    sx={{
                    textDecoration: "underline",
                    textUnderlineOffset: 4,
                    fontWeight: 700,
                    }}
                >
                    lead technique &amp; mentoring
                </Box>
                .
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
                    maxWidth: 1200,
                    mx: "auto",
                }}
                >
                {[
                    {
                    emoji: "⚡",
                    text: "Stack moderne : React, Next.js, Node.js",
                    },
                    {
                    emoji: "🎯",
                    text: "Projets produits concrets avec de vrais enjeux",
                    },
                    {
                    emoji: "🚀",
                    text: "Montée en responsabilités & rôle de référence technique",
                    },
                    {
                    emoji: "🤝",
                    text: "Équipe bienveillante, curieuse et exigeante",
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

                {/* CTA final */}
                <Box sx={{ textAlign: "center", mt: 4 }}>
                <Typography
                    sx={{
                    fontSize: { xs: "1.1rem", md: "1.25rem" },
                    fontWeight: 700,
                    color: "background.default",
                    fontFamily: "'Permanent Marker', cursive",
                    }}
                >
                    Une opportunité, un projet, une idée ? Écrivez-moi 💬
                </Typography>
                </Box>
            </Box>
            </Box>
        </Box>
        </SlideLayout>
    );
}
