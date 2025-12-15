"use client";

import { Box, Container, Typography, Stack, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import SlideLayout from "@/components/layout/SlideLayout";
import LinkBtn from "@/components/common/LinkBtn";
import { SimpleChip } from "@/components/ui/RetroChip";

const CV_URL = "/cv.pdf";
const TAGS = ["React", "Next.js", "Node.js", "TypeScript", "Data & IA"];

type HeroProps = {
    onContactClick?: () => void;
};

export default function HeroSplitLayout({ onContactClick }: HeroProps) {
    return (
        <SlideLayout title="Kaniba Keita" subtitle="Développeuse Fullstack • Data & IA">
            <Container
                maxWidth="lg"
                sx={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                {/* Split layout: 40% visual / 60% content */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "2fr 3fr" },
                        gap: 4,
                        width: "100%",
                    }}
                >
                    {/* LEFT: Visual Section */}
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        sx={{
                            position: "relative",
                            display: { xs: "none", md: "flex" },
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        {/* Portrait / Illustration placeholder */}
                        <Box
                            sx={{
                                position: "relative",
                                width: "100%",
                                maxWidth: 400,
                            }}
                        >
                            {/* Cadre rétro */}
                            <Box
                                sx={{
                                    border: "8px solid",
                                    borderColor: "primary.main",
                                    bgcolor: "background.paper",
                                    p: 3,
                                    boxShadow: "16px 16px 0 rgba(0,0,0,0.15)",
                                }}
                            >
                                {/* Avatar / Illustration */}
                                <Box
                                    sx={{
                                        aspectRatio: "3/4",
                                        bgcolor: "rgba(174, 43, 31, 0.1)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        border: "4px solid",
                                        borderColor: "primary.main",
                                        position: "relative",
                                        overflow: "hidden",
                                    }}
                                >
                                    {/* Placeholder pattern */}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            inset: 0,
                                            // backgroundImage: `
                                            //     repeating-linear-gradient(
                                            //         45deg,
                                            //         rgba(174, 43, 31, 0.05),
                                            //         rgba(174, 43, 31, 0.05) 10px,
                                            //         transparent 10px,
                                            //         transparent 20px
                                            //     )
                                            // `,
                                            backgroundImage: `url('avatar.png')`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            filter: "grayscale(100%)",
                                        }}
                                    />
                                    {/* <Typography
                                        variant="h2"
                                        sx={{
                                            color: "primary.main",
                                            opacity: 0.3,
                                            fontWeight: 900,
                                        }}
                                    >
                                        KK
                                    </Typography> */}
                                </Box>

                                {/* Sticker decoratif */}
                                <Box
                                    component={motion.div}
                                    animate={{ rotate: [0, -5, 0] }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    sx={{
                                        position: "absolute",
                                        top: -20,
                                        right: -20,
                                        bgcolor: "#eeb631ff",
                                        border: "3px solid",
                                        borderColor: "text.primary",
                                        px: 2,
                                        py: 1,
                                        transform: "rotate(12deg)",
                                        boxShadow: "4px 4px 0 rgba(0,0,0,0.2)",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: 900,
                                            fontSize: "0.9rem",
                                            textTransform: "uppercase",
                                        }}
                                    >
                                        Disponible
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    {/* RIGHT: Content Section */}
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        <Stack spacing={3}>
                            {/* Badge "Disponible" mobile */}
                            <Box
                                sx={{
                                    display: { xs: "inline-block", md: "none" },
                                    alignSelf: "flex-start",
                                    bgcolor: "#FFD34E",
                                    border: "3px solid",
                                    borderColor: "text.primary",
                                    px: 2,
                                    py: 0.5,
                                    boxShadow: "3px 3px 0 rgba(0,0,0,0.2)",
                                }}
                            >
                                <Typography sx={{ fontWeight: 700, fontSize: "0.85rem" }}>
                                    ✨ Disponible
                                </Typography>
                            </Box>

                            {/* Titre */}
                            <Typography
                                variant="h1"
                                sx={{
                                    fontWeight: 900,
                                    textTransform: "uppercase",
                                    letterSpacing: -1.5,
                                    lineHeight: 0.95,
                                    fontSize: { xs: "12vw", md: "4.5rem" },
                                }}
                            >
                                Je transforme des{" "}
                                <Box
                                    component="span"
                                    sx={{
                                        color: "primary.main",
                                        position: "relative",
                                        display: "inline-block",
                                        "&::before": {
                                            content: '""',
                                            position: "absolute",
                                            bottom: 0,
                                            left: -8,
                                            right: -8,
                                            height: "100%",
                                            transform: "skew(-3deg)",
                                            zIndex: -1,
                                        },
                                    }}
                                >
                                    idées
                                </Box>{" "}
                                en  <Box
                                    component="span"
                                    sx={{
                                        color: "primary.main",
                                        position: "relative",
                                        display: "inline-block",
                                        "&::before": {
                                            content: '""',
                                            position: "absolute",
                                            bottom: 0,
                                            left: -8,
                                            right: -8,
                                            height: "100%",
                                            // bgcolor: "primary.main",
                                            // opacity: 0.1,
                                            transform: "skew(-3deg)",
                                            zIndex: -1,
                                        },
                                    }}
                                >
                                    produits
                                </Box>{" "}
                            </Typography>

                            {/* Description */}
                            <Typography
                                sx={{
                                    fontSize: { xs: "1rem", md: "1.1rem" },
                                    lineHeight: 1.6,
                                    fontWeight: 600,
                                    color: "rgba(116, 7, 7, 0.9)",
                                }}
                            >
                                Développeuse Fullstack spécialisée en JavaScript/TypeScript.
                                Je construis des applications React/Next.js performantes et
                                j'intègre l'IA de manière pragmatique pour créer de la valeur.
                            </Typography>

                            {/* CTA Buttons */}
                            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                                <LinkBtn
                                    href={CV_URL}
                                    label="Télécharger mon CV"
                                    variant="primary"
                                />
                                <LinkBtn
                                    label="Me contacter"
                                    variant="outline"
                                    onClick={onContactClick}
                                />
                            </Stack>

                            {/* Tags */}
                            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                                {TAGS.map((tag) => (
                                    <SimpleChip key={tag} item={tag} />
                                ))}
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
            </Container>
        </SlideLayout>
    );
}
