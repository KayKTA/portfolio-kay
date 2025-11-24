"use client";
import { Box, Container, Typography } from "@mui/material";
import { PropsWithChildren } from "react";

interface SlideLayoutProps {
    title: string;
    subtitle?: string;
    intro?: string; // commentaire
    headerExtra?: React.ReactNode;
}

export default function SlideLayout({
    title,
    subtitle,
    intro,
    headerExtra,
    children,
}: PropsWithChildren<SlideLayoutProps>) {
    return (
        <Box
            sx={{
                position: "relative",
                width: "100vw",
                minHeight: "100vh",
                height: { xs: "auto", md: "100vh" },
                overflow: { xs: "auto", md: "hidden" },
                bgcolor: "background.default",
                color: "text.primary",
                display: "flex",
                flexDirection: "column",
            }}
        >
            {/* Quadrillage de fond */}
            <Box
                aria-hidden
                sx={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 0,
                    pointerEvents: "none",
                    backgroundImage: `
                        linear-gradient(to right, rgba(0,0,0,0.2) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(0,0,0,0.2) 1px, transparent 1px)
                    `,
                    backgroundSize: "56px 56px",
                    opacity: 0.15,
                }}
            />

            {/* Titre + sous-titre */}
            <Box sx={{ position: "relative", zIndex: 10, p: { xs: 2, md: 4 } }}>
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: { xs: "14vw", md: "8vw" },
                        fontWeight: 900,
                        lineHeight: 0.95,
                        textTransform: "uppercase",
                        letterSpacing: -1,
                    }}
                >
                    {title}
                </Typography>

                {subtitle && (
                    <Typography
                        variant="h4"
                        sx={{
                            fontSize: { xs: "4.2vw", md: "2.2vw" },
                            fontWeight: 700,
                            mt: 0.5,
                            textTransform: "uppercase",
                            color: "primary.main",
                            letterSpacing: 1,
                        }}
                    >
                        {subtitle}
                    </Typography>
                )}

                {headerExtra}
            </Box>

            {intro && (
                <Box
                    sx={{
                        position: {xs: "relative", md: "absolute"},
                        top: { xs: "auto", md: "5%" },
                        right: { xs: "auto", md: "8%" },
                        left: { xs: "5%", md: "auto" },
                        maxWidth: 350,
                        fontFamily: "'Permanent Marker', cursive",
                        fontSize: "1.2rem",
                        lineHeight: 1.4,
                        color: "text.primary",
                        bgcolor: "#FFD966",
                        px: 2,
                        py: 1.5,
                        borderRadius: 1,
                        boxShadow: "1px 1px 2px rgba(0,0,0,0.25)",
                        transform: "rotate(-2deg)",
                        zIndex: 20,
                        // quadrillage
                        // backgroundImage: `
                        //     linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
                        //     linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)
                        // `,
                        // backgroundSize: "18px 18px",
                    }}
                >
                    {intro}
                </Box>
            )}

            <Container
                maxWidth="lg"
                sx={{
                    position: "relative",
                    zIndex: 10,
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    py: { xs: 3, md: 3 },
                    pb: { xs: 6, md: 3 }, // padding bottom plus grand sur mobile pour éviter le chevauchement
                }}
            >
                {children}
            </Container>
        </Box>
    );
}
