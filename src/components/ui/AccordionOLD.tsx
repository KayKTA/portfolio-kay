import { Box } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import AccordionTab from "./AccordionTab";
import AccordionDrawer from "./AccordionDrawer";
import { Project, Experience } from "@/lib/types";

type AccordionProps = {
    datas: Project[] | Experience[];
};

export default function Accordion({ datas }: AccordionProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState(0);

    // Get real container width
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

    // Calculate preview width based on container width and number of tabs
    const PREVIEW_WIDTH =
        containerWidth > 0
            ? `${containerWidth - TAB_WIDTH * datas.length}px`
            : `calc(100% - ${TAB_WIDTH * datas.length}px)`;

    const handleTabClick = (index: number) => {
        setActiveIndex(index);
    };

    // Generate unique key for each item
    const getKey = (item: Project | Experience, index: number) => {
        if ("title" in item) {
            return item.title;
        } else {
            return item.company + item.period + index;
        }
    };

    return (
        <Box
            ref={containerRef}
            sx={{
                width: "100%",
                height: "95%",
                minHeight: 500,
                maxHeight: "95%",
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
                        {/* Generic Tab */}
                        <AccordionTab
                            item={item}
                            index={index}
                            isActive={isActive}
                            handleTabClick={handleTabClick}
                            TAB_WIDTH={TAB_WIDTH}
                        />

                        {/* Generic Drawer */}
                        <AccordionDrawer
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
