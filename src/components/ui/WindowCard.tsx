"use client";

import { Box, Stack } from "@mui/material";
import { motion } from "framer-motion";


export default function WindowCard({ children, sx }: { children: React.ReactNode, sx?: object }) {
    return (

        <Box
            component={motion.section}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            sx={{
                ...sx,
                width: "100%",
                position: "relative",
                border: "6px solid",
                borderColor: "primary.main",
                // bgcolor: "rgba(0,0,0,0.15)",
                // bgcolor: "#8F2A1E",
                boxShadow: "12px 12px 0 rgba(0,0,0,0.25)",
                px: { xs: 3, md: 6 },
                py: { xs: 4, md: 4 },
            }}
        >
            {/* pastilles type fenêtre */}
            <Stack
                direction="row"
                spacing={1}
                sx={{ position: "absolute", top: 14, left: 14 }}
            >
                {["rgba(116, 7, 7,0.9)", "rgba(116, 7, 7,0.6)", "rgba(116, 7, 7, 0.35)"].map(
                    (c, i) => (
                        <Box
                            key={i}
                            sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: c }}
                        />
                    )
                )}
            </Stack>

            {/* CONTENU */}
            {children}
        </Box>
    );
}
