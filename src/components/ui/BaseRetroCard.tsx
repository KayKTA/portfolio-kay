import { Box, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";

export type BaseRetroCardProps = {
    /** Contenu principal de la carte */
    children?: ReactNode;

    /** Styles supplémentaires pour la carte */
    sx?: any;

    /** Badge "NEW" affiché en haut à droite */
    badge?: {
        text: string;
        color?: string;
        textColor?: string;
    };

    /** En-tête de la carte avec logo et informations */
    header?: {
        logo?: string;
        logoAlt?: string;
        logoFilter?: string;
        title: ReactNode;
        subtitle?: ReactNode;
        meta?: ReactNode; // Pour afficher date/période/etc à droite
    };

    /** Section d'introduction/tagline */
    intro?: ReactNode;

    /** Liste à puces avec étoiles */
    bullets?: ReactNode[];
    bulletColor?: string;
    footer?: ReactNode;
};

/**
 * Composant de base pour toutes les cartes rétro du portfolio.
 * Offre une API flexible pour gérer différents types de contenu.
 */
export default function BaseRetroCard({
    children,
    sx,
    badge,
    header,
    intro,
    bullets,
    bulletColor = "#AE2B1F",
    footer
}: BaseRetroCardProps) {
    return (
        <Box
            sx={{
                border: "6px solid",
                borderColor: "primary.main",
                bgcolor: "background.default",
                borderRadius: 0,
                p: { xs: 2.5, md: 2 },
                height: "100%",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 1,
                boxShadow: "8px 8px 0 rgba(0,0,0,0.2)",
                // Texture de fond vintage
                backgroundImage: `
                    linear-gradient(90deg, rgba(0,0,0,.02) 1px, transparent 1px),
                    linear-gradient(rgba(0,0,0,.02) 1px, transparent 1px)
                `,
                backgroundSize: "20px 20px",
                ...sx,
            }}
        >
            {/* Badge (ex: NEW) */}
            {badge && (
                <Box
                    sx={{
                        position: "absolute",
                        top: -25,
                        right: -20,
                        bgcolor: badge.color || "#AE2B1F",
                        color: badge.textColor || "#F5ECD7",
                        fontWeight: 900,
                        fontSize: "0.75rem",
                        px: 2,
                        py: 0.75,
                        border: "4px solid",
                        borderColor: badge.color || "#AE2B1F",
                        borderRadius: 0,
                        transform: "rotate(-12deg)",
                        // boxShadow: "4px 4px 0 rgba(0,0,0,0.3)",
                        textTransform: "uppercase",
                        letterSpacing: 1,
                    }}
                >
                    {badge.text}
                </Box>
            )}

            {/* Header */}
            {header && (
                <Stack direction="row" spacing={1.5} alignItems="center">
                    {header.logo && (
                        <Box
                            component="img"
                            src={header.logo}
                            alt={header.logoAlt || ""}
                            onError={(e) => {
                                (e.currentTarget as HTMLImageElement).style.display = "none";
                            }}
                            sx={{
                                width: { xs: 44, md: 52 },
                                height: { xs: 44, md: 52 },
                                objectFit: "contain",
                                flexShrink: 0,
                                ...(header.logoFilter && { filter: header.logoFilter }),
                            }}
                        />
                    )}
                    <Stack sx={{ flex: 1, minWidth: 0 }} spacing={0.5}>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="baseline"
                            flexWrap="wrap"
                            gap={1}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 900,
                                    textTransform: "uppercase",
                                    color: "primary.main",
                                    lineHeight: 1.1,
                                }}
                            >
                                {header.title}
                            </Typography>
                            {header.meta && (
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 900,
                                        textTransform: "uppercase",
                                        color: "primary.main",
                                        lineHeight: 1.1,
                                    }}
                                >
                                    {header.meta}
                                </Typography>
                            )}
                        </Stack>
                        {header.subtitle && (
                            <Typography
                                variant="body2"
                                sx={{
                                    fontWeight: 700,
                                    color: "text.primary",
                                }}
                            >
                                {header.subtitle}
                            </Typography>
                        )}
                    </Stack>
                </Stack>
            )}

            {/* Intro/Tagline */}
            {intro && (
                <Typography variant="body2" sx={{ fontWeight: 700, color: "text.primary", fontSize: "0.95rem" }}>
                    {intro}
                </Typography>
            )}

            {/* Liste à puces avec étoiles */}
            {bullets && bullets.length > 0 && (
                <Stack spacing={0.5} sx={{ flex: 1 }}>
                    {bullets.map((bullet, i) => (
                        <Typography
                            key={i}
                            variant="body2"
                            sx={{
                                color: "text.secondary",
                                fontSize: "0.95rem",
                                "&:before": {
                                    content: '"★"',
                                    color: bulletColor,
                                    fontWeight: 900,
                                    display: "inline-block",
                                    width: "1.2em",
                                },
                            }}
                        >
                            {" "}{bullet}
                        </Typography>
                    ))}
                </Stack>
            )}

            {/* Contenu personnalisé */}
            {children}
            {footer}
        </Box>
    );
}
