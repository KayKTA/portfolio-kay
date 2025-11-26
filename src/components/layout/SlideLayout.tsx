"use client";
import { Box, Container, Typography } from "@mui/material";
import { PropsWithChildren } from "react";

interface SlideLayoutProps {
    title: string;
    subtitle?: string;
    intro?: string; // commentaire
    headerExtra?: React.ReactNode;
    id?: string;    // ⬅️ nouveau
}

export default function SlideLayout({
    title,
    subtitle,
    intro,
    headerExtra,
    id,
    children,
}: PropsWithChildren<SlideLayoutProps>) {
    return (
        <Box
            id={id} // ⬅️ ancre pour #contact, #skills, etc.
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
            {/* Quadrillage de fond + patterns */}
            <Box
                aria-hidden
                sx={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 0,
                    pointerEvents: "none",
                    backgroundImage: `
                        linear-gradient(to right, rgba(196,30,58,0.15) 2px, transparent 2px),
                        linear-gradient(to bottom, rgba(196,30,58,0.15) 2px, transparent 2px)
                    `,
                    backgroundSize: "60px 60px",
                    opacity: 0.4,
                }}
            />

            {/* Titre + sous-titre */}
            <Box sx={{ position: "relative", zIndex: 10, p: { xs: 2, md: 4 } }}>
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: { xs: "15vw", md: "6vw" },
                        fontWeight: 900,
                        lineHeight: 0.9,
                        textTransform: "uppercase",
                        letterSpacing: { xs: -2, md: -3 },
                        color: "primary.main",
                        // textShadow: "4px 4px 0 rgba(0,0,0,0.1)",
                    }}
                >
                    {title}
                </Typography>

                {subtitle && (
                    <Box
                        sx={{
                            display: "inline-block",
                            bgcolor: "primary.main",
                            px: { xs: 2, md: 3 },
                            py: { xs: 0.75, md: 1 },
                            mt: { xs: 1, md: 1.5 },
                            position: "relative",
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                fontSize: { xs: "4.5vw", md: "1vw" },
                                fontWeight: 900,
                                textTransform: "uppercase",
                                color: "background.default",
                                letterSpacing: { xs: 2, md: 3 },
                                position: "relative",
                                zIndex: 1,
                            }}
                        >
                            {subtitle}
                        </Typography>
                    </Box>
                )}

                {headerExtra}
            </Box>

            {intro && (
                <Box
                    sx={{
                        position: { xs: "relative", md: "absolute" },
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
                    }}
                >
                    {intro}
                </Box>
            )}

            <Container
                maxWidth="xl"
                sx={{
                    position: "relative",
                    zIndex: 10,
                    // flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    // py: { xs: 3, md: 3 },
                    pb: { xs: 6, md: 3 },
                }}
            >
                {children}
            </Container>
        </Box>
    );
}
