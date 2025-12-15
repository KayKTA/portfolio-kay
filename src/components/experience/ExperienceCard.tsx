import { Box, Chip, Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";
import BaseRetroCard from "@/components/ui/BaseRetroCard";
import { Experience } from "./types";

type ExperienceSubtitleProps = {
    company: string;
    period: string;
    location?: string;
};

function ExperienceSubtitle({
    company,
    period,
    location,
}: ExperienceSubtitleProps) {
    const meta = [period, location].filter(Boolean).join(" • ");

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.25 }}>
            <Typography
                component="div"
                sx={{
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                    fontSize: "0.9rem",
                }}
            >
                {company}
            </Typography>

            {/* Ligne période + lieu */}
            <Typography
                component="div"
                sx={{
                    fontWeight: 600,
                    fontSize: "0.8rem",
                    color: "text.secondary",
                }}
            >
                {meta}
            </Typography>
        </Box>
    );
}

/* ---------- Carte expérience ---------- */
export default function ExperienceCard({ experience }: { experience: Experience }) {
    return (
        <BaseRetroCard
            header={{
                // logo: experience.logo,
                // logoAlt: experience.company,
                title: experience.role,
                // subtitle: (
                //     <ExperienceSubtitle
                //         company={experience.company}
                //         period={experience.period}
                //         location={experience.location}
                //     />
                // ),
            }}
            introXP={experience.tagline}
            bullets={experience.bullets}
        >
            {experience.stack && experience.stack.length > 0 && (
                <Stack
                    direction="row"
                    spacing={1}
                    flexWrap="wrap"
                    useFlexGap
                    sx={{ mt: "auto" }}
                >
                    {experience.stack.map((t) => (
                        <Chip
                            key={t}
                            label={t}
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
            )}
        </BaseRetroCard>
    );
}
