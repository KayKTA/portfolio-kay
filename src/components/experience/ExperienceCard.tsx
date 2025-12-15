import { Box, Chip, Stack, Typography } from "@mui/material";
import WindowCard from "@/components/ui/WindowCard";
import type { Experience } from "@/lib/types";

export default function ExperienceCard({ experience }: { experience: Experience }) {
    return (
        <WindowCard
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
            }}
        >
            {/* Header avec titre + période */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    borderBottom: "4px solid",
                    borderColor: "primary.main",
                    pb: 2,
                    mb: 2,
                    flexShrink: 0,
                }}
            >
                {/* Titre du poste */}
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 900,
                        fontSize: { xs: "1.2rem", md: "1.5rem" },
                        letterSpacing: -0.5,
                        lineHeight: 1.2,
                    }}
                >
                    {experience.role}
                </Typography>

                {/* Company + Period + Location */}
                <Box>
                    <Typography
                        sx={{
                            fontWeight: 800,
                            fontSize: "0.95rem",
                            color: "primary.main",
                            textTransform: "uppercase",
                        }}
                    >
                        {experience.company}
                    </Typography>
                    <Typography
                        sx={{
                            fontWeight: 600,
                            fontSize: "0.85rem",
                            color: "text.secondary",
                            mt: 0.25,
                        }}
                    >
                        {[experience.period, experience.location].filter(Boolean).join(" • ")}
                    </Typography>
                </Box>
            </Box>

            {/* Content scrollable */}
            <Box
                sx={{
                    flex: 1,
                    minHeight: 0,
                    overflow: "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2.5,
                }}
            >
                {/* Tagline */}
                {experience.tagline && (
                    <Typography
                        sx={{
                            fontSize: "0.95rem",
                            fontWeight: 600,
                            lineHeight: 1.6,
                            color: "text.secondary",
                            fontStyle: "italic",
                        }}
                    >
                        {experience.tagline}
                    </Typography>
                )}

                {/* Bullets */}
                {experience.bullets && experience.bullets.length > 0 && (
                    <Stack spacing={0.75}>
                        {experience.bullets.map((bullet, idx) => (
                            <Box
                                key={idx}
                                sx={{
                                    display: "flex",
                                    gap: 1.5,
                                    alignItems: "flex-start",
                                }}
                            >
                                <Box
                                    component="span"
                                    sx={{
                                        color: "primary.main",
                                        fontSize: "1.1rem",
                                        fontWeight: 900,
                                        flexShrink: 0,
                                    }}
                                >
                                    ★
                                </Box>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        lineHeight: 1.3,
                                        fontSize: "0.9rem",
                                    }}
                                >
                                    {bullet}
                                </Typography>
                            </Box>
                        ))}
                    </Stack>
                )}

                {/* Stack */}
                {experience.stack && experience.stack.length > 0 && (
                    <Box sx={{ mt: "auto" }}>
                        <Typography
                            variant="overline"
                            sx={{
                                fontWeight: 700,
                                fontSize: "0.7rem",
                                color: "text.secondary",
                                mb: 1,
                                display: "block",
                            }}
                        >
                            Technos
                        </Typography>
                        <Stack direction="row" spacing={0.75} flexWrap="wrap" useFlexGap>
                            {experience.stack.map((tech) => (
                                <Chip
                                    key={tech}
                                    label={tech}
                                    size="small"
                                    variant="outlined"
                                    sx={{
                                        border: "2px solid",
                                        borderColor: "primary.main",
                                        borderRadius: 1,
                                        bgcolor: "background.paper",
                                        height: 24,
                                        fontWeight: 700,
                                        "& .MuiChip-label": { px: 1 },
                                    }}
                                />
                            ))}
                        </Stack>
                    </Box>
                )}
            </Box>
        </WindowCard>
    );
}
