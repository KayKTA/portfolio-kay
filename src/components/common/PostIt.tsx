"use client";
import { Box, Button } from "@mui/material";

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
            bgcolor: color, // post-it plein (plus foncé que le fond)
            p: 2,
            borderRadius: 1,
            boxShadow: "1px 1px 0 rgba(0,0,0,0.25)",
            transform: `rotate(${rotate}deg)`,
            // quadrillage léger
            // backgroundImage: `
            // linear-gradient(to right, rgba(0,0,0,.06) 1px, transparent 1px),
            // linear-gradient(to bottom, rgba(0,0,0,.06) 1px, transparent 1px)
            // `,
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

export const LinkBtn = ({
    href,
    label,
    emoji,
}: {
    href?: string;
    label: string;
    emoji?: string;
}) => (
    <Button
        component="a"
        href={href}
        target={href && href.startsWith("http") ? "_blank" : undefined}
        rel="noreferrer"
        variant="outlined"
        sx={{
            border: "3px solid",
            borderColor: "primary.main",
            borderRadius: 2,
            bgcolor: "background.paper",
            fontWeight: 900,
            textTransform: "none",
            px: 2,
            width: "100%",
            height: 40,
            "&:hover": { bgcolor: "background.default" },
        }}
    >
        <span style={{ marginRight: 8 }}>{emoji ?? "👉"}</span>
        {label}
    </Button>
);
