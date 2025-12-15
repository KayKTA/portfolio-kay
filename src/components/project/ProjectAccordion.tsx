import { Box } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import ProjectTab from "./ProjectTab";
import ProjectDrawer from "./ProjectDrawer";
import { Project } from "./ProjectCard";

function ProjectPreview({
    project,
    isActive,
    handleTabClick,
    index,
    TAB_WIDTH,
    PREVIEW_WIDTH,
}: {
    project: Project;
    isActive: boolean;
    handleTabClick: (index: number) => void;
    index: number;
    TAB_WIDTH: number;
    PREVIEW_WIDTH: string;
}) {
    return (
        <Box
            sx={{
                display: "flex",
                height: "100%",
                flexShrink: 0,
            }}
        >
            {/* Tab - Always visible, LEFT of its drawer */}
            <ProjectTab
                title={project.title}
                index={index}
                isActive={isActive}
                handleTabClick={handleTabClick}
                TAB_WIDTH={TAB_WIDTH}
                icon={project.icon}
            />

            {/* Drawer (Preview) - Expands/Collapses */}
            <ProjectDrawer
                project={project}
                isActive={isActive}
                PREVIEW_WIDTH={PREVIEW_WIDTH}
            />
        </Box>
    );
}

export default function ProjectAccordion({ projects }: { projects: any[] }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState(0);

    // Mesurer la largeur réelle du conteneur
    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.offsetWidth);
            }
        };

        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    const TAB_WIDTH = 100;

    // Calcul dynamique basé sur la largeur réelle mesurée
    const PREVIEW_WIDTH = containerWidth > 0
        ? `${containerWidth - (TAB_WIDTH * projects.length)}px`
        : `calc(100% - ${TAB_WIDTH * projects.length}px)`;

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
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Pairs of [Tab + Drawer] */}
            {projects.map((project, index) => {
                const isActive = index === activeIndex;

                return (
                    <ProjectPreview
                        key={project.title}
                        project={project}
                        isActive={isActive}
                        handleTabClick={handleTabClick}
                        index={index}
                        TAB_WIDTH={TAB_WIDTH}
                        PREVIEW_WIDTH={PREVIEW_WIDTH}
                    />
                );
            })}
        </Box>
    );
}
