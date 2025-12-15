import { AddCircleOutline, ArrowOutward, Info } from '@mui/icons-material';
import { Stack, Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'

interface ProjectTabProps {
    title: string;
    index: number;
    isActive: boolean;
    handleTabClick: (index: number) => void;
    TAB_WIDTH: number;
    icon?: React.ReactNode;
}


export default function ProjectTab({
    title,
    index,
    isActive,
    handleTabClick,
    TAB_WIDTH,
    icon = <ArrowOutward sx={{ fontSize: 20, color: "rgb(255, 255, 255, 0.8)" }} />,
}: ProjectTabProps) {
    return (
        <Box
            component={motion.div}
            onClick={() => handleTabClick(index)}
            whileHover={{ scale: isActive ? 1 : 1.02 }}
            whileTap={{ scale: 0.98 }}
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
            {/* Icon top */}
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
                }}
            >
                {icon}
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
            <Box
                sx={{
                    width: 40,
                    height: 40,
                    // borderRadius: "50%",
                    // border: "2px dotted",
                    // borderColor: "primary.dark",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                }}
            >
                {/* <AddCircleOutline sx={{ color: "background.paper" }} /> */}
            </Box>

        </Box>
    )
}
