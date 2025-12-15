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
