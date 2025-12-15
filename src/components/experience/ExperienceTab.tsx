import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

interface ExperienceTabProps {
    company: string;
    title: string;
    period: string;
    index: number;
    isActive: boolean;
    handleTabClick: (index: number) => void;
    TAB_HEIGHT: number;
    logo?: string;
}

export default function ExperienceTab({
    company,
    title,
    period,
    index,
    isActive,
    handleTabClick,
    TAB_HEIGHT,
    logo,
}: ExperienceTabProps) {
    return (
        <Box
            component={motion.div}
            onClick={() => handleTabClick(index)}
            whileHover={{ scale: isActive ? 1 : 1.02 }}
            // whileTap={{ scale: 0.98 }}
            sx={{
                cursor: "pointer",
                bgcolor: isActive ? "primary.main" : "primary.light",
                height: TAB_HEIGHT,
                minHeight: TAB_HEIGHT,
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 3,
                py: 2,
                flexShrink: 0,
                transition: "background-color 0.3s",
            }}
        >
            {/* Left: Logo + Company */}
            <Stack direction="row" spacing={2} alignItems="center">
                {logo && (
                    <Box
                        sx={{
                            width: 48,
                            height: 48,
                            borderRadius: "50%",
                            // bgcolor: "background.paper",
                            // border: "3px solid",
                            borderColor: "background.paper",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            overflow: "hidden",
                        }}
                    >
                        <Box
                            component="img"
                            src={logo}
                            alt={company}
                            sx={{
                                width: "110%",
                                height: "110%",
                                objectFit: "contain",
                            }}
                        />
                    </Box>
                )}
                <Box>
                    <Typography
                        sx={{
                            fontWeight: 900,
                            fontSize: "1.1rem",
                            textTransform: "uppercase",
                            letterSpacing: 0.5,
                            color: isActive ? "background.default" : "rgba(0,0,0,0.9)",
                        }}
                    >
                        {company}
                    </Typography>
                    <Typography
                        sx={{
                            fontWeight: 700,
                            fontSize: "0.85rem",
                            color: isActive ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.6)",
                        }}
                    >
                        {period}
                    </Typography>
                </Box>
            </Stack>

            {/* Right: Number indicator */}
            <Box
                // sx={{
                //     width: 40,
                //     height: 40,
                //     borderRadius: "50%",
                //     bgcolor: isActive ? "background.default" : "primary.dark",
                //     color: isActive ? "primary.main" : "background.default",
                //     display: "flex",
                //     alignItems: "center",
                //     justifyContent: "center",
                //     fontWeight: 900,
                //     fontSize: "1.1rem",
                //     flexShrink: 0,
                // }}
            >
                {/* {index + 1} */}
                <Typography
                    variant="button"
                    sx={{
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        color: isActive ? "background.default" : "rgba(0,0,0,0.6)",
                    }}
                >
                {title}
                </Typography>
            </Box>
        </Box>
    );
}
