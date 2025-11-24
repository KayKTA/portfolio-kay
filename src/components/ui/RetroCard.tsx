import { Box, Stack, Typography } from "@mui/material";
import RetroChip, { chip } from "./RetroChip";

export default function RetroCard(props: { title: string; icon?: React.ReactNode; items: chip[]; children?: React.ReactNode; sx?: any }) {
    return (
        <Box
            sx={{
                border: "4px solid",
                borderColor: "primary.main",
                bgcolor: "background.default",
                borderRadius: 1,
                p: { xs: 2, md: 3 },
                height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                ...props.sx,
            }}
        >
            {/* Header : icon + titre */}
            <Stack direction="row" spacing={1.5} alignItems="center">
                {props.icon}
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 900,
                        textTransform: "uppercase",
                        color: "primary.main",
                        lineHeight: 1.1
                    }}
                >
                    {props.title}
                </Typography>
            </Stack>
            {props.children}
            {/* Frameworks badges + logos */}
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {props.items.map((item) => (
                    <RetroChip item={item} key={item.label} />
                ))}
            </Stack>
        </Box>
    );
}
