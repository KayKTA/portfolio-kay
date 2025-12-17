import { Box, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import ProjectCard from "@/components/project/ProjectCard";
import ExperienceCard from "@/components/experience/ExperienceCard";
import type { Project, Experience } from "@/lib/types";

// Type guard
function isProject(item: Project | Experience): item is Project {
    return "images" in item;
}

interface DrawerProps {
    item: Project | Experience;
    isActive: boolean;
    PREVIEW_WIDTH: string;
    PREVIEW_HEIGHT?: string;
}

export default function AccordionDrawer({
    item,
    isActive,
    PREVIEW_WIDTH,
    PREVIEW_HEIGHT,
}: DrawerProps) {
    const isProj = isProject(item);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    // ========================================
    // MOBILE: Animate HEIGHT (vertical accordion)
    // ========================================
    if (isMobile && PREVIEW_HEIGHT) {
        return (
            <Box
                component={motion.div}
                animate={{
                    height: isActive ? PREVIEW_HEIGHT : 0,
                }}
                transition={{
                    stiffness: 300,
                    damping: 30,
                }}
                sx={{
                    width: "100%",
                    overflow: "hidden",
                    bgcolor: "background.default",
                    flexShrink: 0,
                }}
            >
                {/* Preview Content - Fixed height inside animated container */}
                <Box
                    sx={{
                        height: PREVIEW_HEIGHT,
                        minHeight: PREVIEW_HEIGHT,
                        width: "100%",
                        overflow: "auto",
                    }}
                >
                    {isProj ? (
                        <ProjectCard project={item} />
                    ) : (
                        <ExperienceCard experience={item} />
                    )}
                </Box>
            </Box>
        );
    }

    // ========================================
    // DESKTOP: Animate WIDTH (horizontal accordion)
    // ========================================
    return (
        <Box
            component={motion.div}
            animate={{
                width: isActive ? PREVIEW_WIDTH : 0,
            }}
            transition={{
                stiffness: 300,
                damping: 30,
            }}
            sx={{
                height: "100%",
                overflow: "hidden",
                bgcolor: "background.default",
                flexShrink: 0,
            }}
        >
            {/* Preview Content - Fixed width inside animated container */}
            <Box
                sx={{
                    width: PREVIEW_WIDTH,
                    minWidth: PREVIEW_WIDTH,
                    height: "100%",
                    overflow: "auto",
                }}
            >
                {isProj ? (
                    <ProjectCard project={item} />
                ) : (
                    <ExperienceCard experience={item} />
                )}
            </Box>
        </Box>
    );
}
