import { Box } from "@mui/material";
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
}

export default function AccordionDrawer({
    item,
    isActive,
    PREVIEW_WIDTH,
}: DrawerProps) {
    const isProj = isProject(item);

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
                    overflow: "hidden",
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
