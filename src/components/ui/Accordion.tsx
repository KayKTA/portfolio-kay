import { Box, useMediaQuery, useTheme, Typography } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Tab from "./AccordionTab";
import Drawer from "./AccordionDrawer";
import { Project, Experience } from "@/lib/types";
import { AccordionTabMobile } from "./AccordionTabMobile";

type AccordionProps = {
    datas: Project[] | Experience[];
};

export default function Accordion({ datas }: AccordionProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState(0);
    const [containerHeight, setContainerHeight] = useState(0);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.offsetWidth);
                setContainerHeight(containerRef.current.offsetHeight);
            }
        };

        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    const handleTabClick = (index: number) => {
        setActiveIndex(index);
    };

    const getKey = (item: Project | Experience, index: number) => {
        if ("title" in item) {
            return item.title;
        } else {
            return item.company + item.period + index;
        }
    };

    // ========================================
    // MOBILE LAYOUT - Vertical Accordion
    // ========================================
    if (isMobile) {
        const TAB_HEIGHT = 80;
        const PREVIEW_HEIGHT =
            containerHeight > 0
                ? `${containerHeight - TAB_HEIGHT * datas.length}px`
                : `calc(100% - ${TAB_HEIGHT * datas.length}px)`;

        return (
            <Box
                id="accordion-mobile-container"
                ref={containerRef}
                sx={{
                    width: "100%",
                    height: "100%",
                    minHeight: 600,
                    display: "flex",
                    flex: 1,
                    flexDirection: "column",
                    overflow: "hidden",
                }}
            >
                {datas.map((item, index) => {
                    const isActive = index === activeIndex;

                    return (
                        <Box
                            key={getKey(item, index)}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                width: "100%",
                                flexShrink: 0,
                            }}
                        >
                            {/* Tab */}
                            <AccordionTabMobile
                                item={item}
                                index={index}
                                isActive={isActive}
                                handleTabClick={handleTabClick}
                                TAB_HEIGHT={TAB_HEIGHT}
                            />

                            {/* Drawer */}
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
                                    flexShrink: 0,
                                }}
                            >
                                <Box
                                    sx={{
                                        height: PREVIEW_HEIGHT,
                                        minHeight: PREVIEW_HEIGHT,
                                        width: "100%",
                                        overflow: "auto",
                                    }}
                                >
                                    <Drawer
                                        item={item}
                                        isActive={isActive}
                                        PREVIEW_WIDTH="100%"
                                        PREVIEW_HEIGHT={PREVIEW_HEIGHT}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    );
                })}
            </Box>
        );
    }

    // ========================================
    // DESKTOP LAYOUT - Horizontal Accordion
    // ========================================
    const TAB_WIDTH = 100;
    const PREVIEW_WIDTH =
        containerWidth > 0
            ? `${containerWidth - TAB_WIDTH * datas.length}px`
            : `calc(100% - ${TAB_WIDTH * datas.length}px)`;

    return (
        <Box
            id="accordion-desktop-container"
            ref={containerRef}
            sx={{
                width: "100%",
                height: "95%",
                minHeight: 600,
                maxHeight: "100%",
                display: "flex",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {datas.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                    <Box
                        key={getKey(item, index)}
                        sx={{
                            display: "flex",
                            height: "100%",
                            flexShrink: 0,
                        }}
                    >
                        <Tab
                            item={item}
                            index={index}
                            isActive={isActive}
                            handleTabClick={handleTabClick}
                            TAB_WIDTH={TAB_WIDTH}
                        />
                        <Drawer
                            item={item}
                            isActive={isActive}
                            PREVIEW_WIDTH={PREVIEW_WIDTH}
                        />
                    </Box>
                );
            })}
        </Box>
    );
}
