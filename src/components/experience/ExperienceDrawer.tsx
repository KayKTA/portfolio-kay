import { Box } from "@mui/material";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import type { Experience } from "./types";

export default function ExperienceDrawer({
    experience,
    isActive,
    PREVIEW_HEIGHT,
}: {
    experience: Experience;
    isActive: boolean;
    PREVIEW_HEIGHT: string;
}) {
    return (
        <Box
            component={motion.div}
            animate={{
                height: isActive ? PREVIEW_HEIGHT : 0,
            }}
            transition={{
                type: "spring",
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
                    // p: 2,
                }}
            >
                <ExperienceCard experience={experience} />
            </Box>
        </Box>
    );
}
