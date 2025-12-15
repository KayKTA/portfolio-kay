import { Box } from "@mui/material";
import { motion } from "framer-motion";
import ProjectCard, { Project } from "./ProjectCard";

export default function ProjectDrawer({
    project,
    isActive,
    PREVIEW_WIDTH,
}: {
    project: Project;
    isActive: boolean;
    PREVIEW_WIDTH: string;
}) {
    return (
        <Box
            component={motion.div}
            animate={{
                width: isActive ? PREVIEW_WIDTH : 0,
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
            }}
            sx={{
                height: "100%",
                overflow: "hidden",
                bgcolor: "background.default",
                flexShrink: 0, // IMPORTANT: empêche le shrink
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
                <ProjectCard project={project} />
            </Box>
        </Box>
    );
}
