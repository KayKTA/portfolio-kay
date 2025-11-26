"use client";

import { Box, Button, Stack, Typography } from "@mui/material";

export const PostIt = ({
    children,
    color = "#FFD966",
    rotate = -3,
}: {
    children: React.ReactNode;
    color?: string;
    rotate?: number;
}) => (
    <Box
        sx={{
            position: "relative",
            width: { xs: 260, md: 300 },
            minHeight: { xs: 160, md: 180 },
            bgcolor: color,
            p: 2,
            borderRadius: 1,
            boxShadow: "1px 1px 0 rgba(0,0,0,0.25)",
            transform: `rotate(${rotate}deg)`,
            backgroundSize: "18px 18px",
        }}
    >
        {/* scotch */}
        <Box
            sx={{
                position: "absolute",
                left: "40%",
                top: -10,
                width: 80,
                height: 24,
                bgcolor: "rgba(255,255,255,.7)",
                boxShadow: "0 2px 2px rgba(0,0,0,.12)",
                transform: "rotate(2deg)",
            }}
        />
        <Box sx={{ position: "relative", zIndex: 1, fontFamily: "'Permanent Marker'" }}>
            {children}
        </Box>
    </Box>
);

// Nouveau composant inspiré du poster rétro
export const RetroPoster = ({
    title,
    subtitle,
    keywords = [],
    accentColor = "#AE2B1F",
    bgColor = "#F5ECD7",
}: {
    title: string;
    subtitle?: string;
    keywords?: string[];
    accentColor?: string;
    bgColor?: string;
}) => (
    <Box
        sx={{
            position: "relative",
            width: { xs: 280, sm: 320, md: 380 },
            minHeight: { xs: 380, sm: 420, md: 500 },
            bgcolor: bgColor,
            border: `10px solid ${accentColor}`,
            borderRadius: 0,
            p: { xs: 2.5, md: 3 },
            boxShadow: "10px 10px 0 rgba(0,0,0,0.25)",
            overflow: "hidden",
            // Texture bois
            backgroundImage: `
                linear-gradient(90deg, rgba(0,0,0,.02) 1px, transparent 1px),
                linear-gradient(rgba(0,0,0,.02) 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
        }}
    >
        {/* Pattern décoratif en arrière-plan */}
        <Box
            sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "140%",
                height: "140%",
                opacity: 0.08,
                backgroundImage: `
                    repeating-linear-gradient(
                        45deg,
                        transparent,
                        transparent 10px,
                        ${accentColor} 10px,
                        ${accentColor} 20px
                    )
                `,
                pointerEvents: "none",
            }}
        />

        <Stack spacing={2} sx={{ position: "relative", zIndex: 1 }}>
            {/* Titre principal massif */}
            <Box sx={{ textAlign: "center" }}>
                <Typography
                    sx={{
                        fontSize: { xs: "2.8rem", sm: "3.5rem", md: "4.2rem" },
                        fontWeight: 900,
                        lineHeight: 0.85,
                        textTransform: "uppercase",
                        color: accentColor,
                        letterSpacing: "-2px",
                        textShadow: "3px 3px 0 rgba(0,0,0,0.1)",
                        fontFamily: "system-ui, -apple-system, sans-serif",
                        WebkitTextStroke: `1px ${accentColor}`,
                    }}
                >
                    {title}
                </Typography>
            </Box>

            {/* Mots-clés avec séparateurs X */}
            {keywords.length > 0 && (
                <Stack
                    direction="row"
                    spacing={1}
                    justifyContent="center"
                    flexWrap="wrap"
                    useFlexGap
                    sx={{ mb: 1 }}
                >
                    {keywords.map((keyword, i) => (
                        <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <Typography
                                sx={{
                                    fontSize: { xs: "0.75rem", md: "0.85rem" },
                                    fontWeight: 900,
                                    textTransform: "uppercase",
                                    color: accentColor,
                                    letterSpacing: "1px",
                                }}
                            >
                                {keyword}
                            </Typography>
                            {i < keywords.length - 1 && (
                                <Typography
                                    sx={{
                                        fontSize: "1.2rem",
                                        fontWeight: 900,
                                        color: accentColor,
                                    }}
                                >
                                    ✕
                                </Typography>
                            )}
                        </Box>
                    ))}
                </Stack>
            )}

            {/* Bande décorative */}
            <Box
                sx={{
                    bgcolor: accentColor,
                    height: { xs: 50, md: 60 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    mx: -1,
                    overflow: "hidden",
                }}
            >
                {/* Pattern dans la bande */}
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `
                            repeating-linear-gradient(
                                90deg,
                                transparent,
                                transparent 15px,
                                rgba(255,255,255,0.1) 15px,
                                rgba(255,255,255,0.1) 30px
                            )
                        `,
                    }}
                />
                {subtitle && (
                    <Typography
                        sx={{
                            fontSize: { xs: "1.5rem", md: "2rem" },
                            fontWeight: 900,
                            textTransform: "uppercase",
                            color: bgColor,
                            letterSpacing: "3px",
                            position: "relative",
                            zIndex: 1,
                        }}
                    >
                        {subtitle}
                    </Typography>
                )}
            </Box>

            {/* Motif géométrique décoratif */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 1,
                    my: 1,
                }}
            >
                {[...Array(5)].map((_, i) => (
                    <Box
                        key={i}
                        sx={{
                            width: { xs: 35, md: 45 },
                            height: { xs: 35, md: 45 },
                            bgcolor: i % 2 === 0 ? accentColor : "transparent",
                            border: `3px solid ${accentColor}`,
                            transform: `rotate(${i * 15}deg)`,
                        }}
                    />
                ))}
            </Box>
        </Stack>
    </Box>
);
