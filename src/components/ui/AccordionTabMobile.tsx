import { Box } from "@mui/material";
import { Project, Experience } from "@/lib/types";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";


// Mobile Tab component (horizontal layout - full width)
export function AccordionTabMobile({
    item,
    index,
    isActive,
    handleTabClick,
    TAB_HEIGHT,
}: {
    item: Project | Experience;
    index: number;
    isActive: boolean;
    handleTabClick: (index: number) => void;
    TAB_HEIGHT: number;
}) {
    const isProj = "title" in item;
    const title = isProj ? item.title : item.company;
    const subtitle = isProj ? item.tagline : item.period;
    const logo = isProj ? undefined : item.logo;
    const icon = isProj ? item.icon : undefined;

    return (
        <Box
            component={motion.div}
            onClick={() => handleTabClick(index)}
            whileHover={{ scale: isActive ? 1 : 1.01 }}
            sx={{
                cursor: "pointer",
                bgcolor: isActive ? "primary.main" : "primary.light",
                height: TAB_HEIGHT,
                minHeight: TAB_HEIGHT,
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 2,
                py: 1.5,
                flexShrink: 0,
                transition: "background-color 0.3s",
                // borderBottom: "3px solid",
                // borderColor: "primary.main",
            }}
        >
            {/* Left: Logo + Title */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, flex: 1, minWidth: 0 }}>
                {/* Logo/Icon */}
                <Box
                    sx={{
                        width: 48,
                        height: 48,
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
                                width: "70%",
                                height: "70%",
                                objectFit: "contain",
                            }}
                        />
                    ) : icon ? (
                        icon
                    ) : (
                        <span style={{ fontSize: 20, color: "rgb(255, 255, 255, 0.8)" }}>★</span>
                    )}
                </Box>

                {/* Title + Subtitle */}
                <Box sx={{ minWidth: 0 }}>
                    <Typography
                        sx={{
                            fontWeight: 900,
                            fontSize: "0.95rem",
                            textTransform: "uppercase",
                            letterSpacing: 0.5,
                            color: isActive ? "background.default" : "rgba(0,0,0,0.9)",
                            lineHeight: 1.2,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                        }}
                    >
                        {title}
                    </Typography>
                    {subtitle && (
                        <Typography
                            sx={{
                                fontWeight: 600,
                                fontSize: "0.75rem",
                                color: isActive ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.6)",
                                mt: 0.25,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                            }}
                        >
                            {subtitle.split(" • ")[0]}
                        </Typography>
                    )}
                </Box>
            </Box>

            {/* Right: Index badge */}
            {/* <Box
                sx={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    bgcolor: isActive ? "background.default" : "primary.dark",
                    color: isActive ? "primary.main" : "background.default",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 900,
                    fontSize: "0.9rem",
                    flexShrink: 0,
                }}
            >
                {index + 1}
            </Box> */}
        </Box>
    );
}
