import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { WorkOutline } from "@mui/icons-material";
import type { Project, Experience } from "@/lib/types";

// Type guard
function isProject(item: Project | Experience): item is Project {
    return "images" in item;
}

interface TabProps {
    item: Project | Experience;
    index: number;
    isActive: boolean;
    handleTabClick: (index: number) => void;
    TAB_WIDTH?: number;
}

export default function Tab({
    item,
    index,
    isActive,
    handleTabClick,
    TAB_WIDTH = 100,
}: TabProps) {
    // Extract correct properties based on type
    const isProj = isProject(item);
    const logo = isProj ? undefined : item.logo;
    const icon = isProj ? item.icon : undefined;
    const title = isProj ? item.title : item.company;

    return (
        <Box
            component={motion.div}
            onClick={() => handleTabClick(index)}
            whileHover={{ scale: isActive ? 1 : 1.02 }}
            sx={{
                cursor: "pointer",
                bgcolor: isActive ? "primary.main" : "primary.light",
                width: TAB_WIDTH,
                minWidth: TAB_WIDTH,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                py: 4,
                px: 2,
                flexShrink: 0,
            }}
        >
            {/* Icon/Logo top */}
            <Box
                sx={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    bgcolor: "primary.dark",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    overflow: "hidden",

                }}
            >
                {logo ? (
                    <Box
                        component="img"
                        src={logo}
                        alt={title}
                        sx={{
                            width: "130%",
                            height: "130%",
                            objectFit: "contain",
                        }}
                    />
                ) : icon ? (
                    icon
                ) : (
                    <WorkOutline sx={{ fontSize: 24, color: "rgb(255, 255, 255, 0.8)" }} />
                )}
            </Box>

            {/* Title (vertical text) */}
            <Typography
                sx={{
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                    fontWeight: 900,
                    fontSize: { xs: "1rem", md: "1.2rem" },
                    textTransform: "uppercase",
                    letterSpacing: 2,
                    color: "rgba(0,0,0,0.9)",
                    textAlign: "center",
                    userSelect: "none",
                }}
            >
                {title}
            </Typography>

            {/* Empty space bottom */}
            <Box
                sx={{
                    width: 40,
                    height: 40,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                }}
            />
        </Box>
    );
}
