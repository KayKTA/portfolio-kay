import { Box, Stack, Typography } from "@mui/material";

export type LangItem = { label: string; value: number; logo?: string };
export function LanguageRow({ label, value, logo }: LangItem) {
    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: "32px 1fr auto",
                gap: 1,
                alignItems: "center",
            }}
        >
            <Box
                component="img"
                src={logo || ""}
                alt=""
                onError={(e) => ((e.currentTarget.style.display = "none"))}
                sx={{ width: 28,
                    height: 28,
                    objectFit: "contain",
                    // filter: "grayscale(100%) contrast(1.2)"
                }}
            />
            <Typography sx={{ fontWeight: 800 }}>{label}</Typography>
            <LevelTokens value={value} showPercent />
        </Box>
    );
}

/* levels */
export type TokensProps = { value: number; showPercent?: boolean };
export function LevelTokens({ value, showPercent = false }: TokensProps) {
    const filled = Math.round((value / 100) * 10); // 0..5
    return (
        <Stack direction="row" spacing={1} alignItems="center" sx={{ minWidth: 120 }}>
            <Stack direction="row" spacing={0.75}>
                {Array.from({ length: 10 }).map((_, i) => {
                const state = i < filled ? "full" : "empty";
                return (
                    <Box
                    key={i}
                    sx={{
                        width: 14,
                        height: 14,
                        borderRadius: "50%",
                        border: "2px solid",
                        borderColor: "primary.main",
                        bgcolor: state === "full" ? "primary.main" : "transparent",
                    }}
                    />
                );
                })}
            </Stack>
            {showPercent && (
                <Typography variant="caption" sx={{ fontWeight: 800, color: "text.secondary", ml: 0.5 }}>
                    {value}%
                </Typography>
            )}
        </Stack>
    );
}
