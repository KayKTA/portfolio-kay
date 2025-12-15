import { Box } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import ExperienceTab from "./ExperienceTab";
import ExperienceDrawer from "./ExperienceDrawer";
import type { Experience } from "./types";

function ExperiencePreview({
    experience,
    isActive,
    handleTabClick,
    index,
    TAB_HEIGHT,
    PREVIEW_HEIGHT,
}: {
    experience: Experience;
    isActive: boolean;
    handleTabClick: (index: number) => void;
    index: number;
    TAB_HEIGHT: number;
    PREVIEW_HEIGHT: string;
}) {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                flexShrink: 0,
            }}
        >
            {/* Tab - Always visible, TOP of its drawer */}
            <ExperienceTab
                company={experience.company}
                title={experience.role}
                period={experience.period}
                index={index}
                isActive={isActive}
                handleTabClick={handleTabClick}
                TAB_HEIGHT={TAB_HEIGHT}
                logo={experience.logo}
            />

            {/* Drawer (Preview) - Expands/Collapses */}
            <ExperienceDrawer
                experience={experience}
                isActive={isActive}
                PREVIEW_HEIGHT={PREVIEW_HEIGHT}
            />
        </Box>
    );
}

export default function ExperienceAccordion({ experiences }: { experiences: Experience[] }) {
    const [activeIndex, setActiveIndex] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerHeight, setContainerHeight] = useState(0);

    // Mesurer la hauteur réelle du conteneur
    useEffect(() => {
        const updateHeight = () => {
            if (containerRef.current) {
                setContainerHeight(containerRef.current.offsetHeight);
            }
        };

        updateHeight();
        window.addEventListener("resize", updateHeight);
        return () => window.removeEventListener("resize", updateHeight);
    }, []);

    const TAB_HEIGHT = 80;

    // Calcul dynamique basé sur la hauteur réelle mesurée
    const PREVIEW_HEIGHT = containerHeight > 0
        ? `${containerHeight - ((TAB_HEIGHT + 10) * experiences.length)}px`
        : `calc(100% - ${TAB_HEIGHT * experiences.length}px)`;

    const handleTabClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <Box
            ref={containerRef}
            sx={{
                width: "100%",
                height: "95%",
                minHeight: 600,
                maxHeight: "100%",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Pairs of [Tab + Drawer] */}
            {experiences.map((experience, index) => {
                const isActive = index === activeIndex;

                return (
                    <ExperiencePreview
                        key={experience.company + experience.period}
                        experience={experience}
                        isActive={isActive}
                        handleTabClick={handleTabClick}
                        index={index}
                        TAB_HEIGHT={TAB_HEIGHT}
                        PREVIEW_HEIGHT={PREVIEW_HEIGHT}
                    />
                );
            })}
        </Box>
    );
}
