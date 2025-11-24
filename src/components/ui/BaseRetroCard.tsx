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
    bullets?: string[];
    bulletColor?: string;
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
}: BaseRetroCardProps) {
    return (
        <Box
            sx={{
                border: "4px solid",
                borderColor: "primary.main",
                bgcolor: "background.default",
                borderRadius: 1,
                p: { xs: 2, md: 3 },
                height: "100%",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 1.25,
                ...sx,
            }}
        >
            {/* Badge (ex: NEW) */}
            {badge && (
                <Box
                    sx={{
                        position: "absolute",
                        top: -14,
                        right: -14,
                        bgcolor: badge.color || "#AE2B1F",
                        color: badge.textColor || "white",
                        fontWeight: 900,
                        fontSize: "0.75rem",
                        px: 1.5,
                        py: 0.5,
                        borderRadius: "50%",
                        transform: "rotate(-10deg)",
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
                <Typography variant="body2" sx={{ fontWeight: 700, color: "text.primary" }}>
                    {intro}
                </Typography>
            )}

            {/* Liste à puces avec étoiles */}
            {bullets && bullets.length > 0 && (
                <Stack spacing={0.6} sx={{ flex: 1 }}>
                    {bullets.map((bullet, i) => (
                        <Typography
                            key={i}
                            variant="body2"
                            sx={{
                                color: "text.secondary",
                                fontSize: "0.85rem",
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
        </Box>
    );
}
