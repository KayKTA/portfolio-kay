import { Box, IconButton, Stack } from "@mui/material";
import { useState } from "react";

export function CarouselNavButton({ onClick, direction }: { onClick: () => void; direction: "left" | "right" }) {
    return (
        <IconButton
            onClick={onClick}
            sx={{
                position: "absolute",
                top: "50%",
                [direction === "left" ? "left" : "right"]: 8,
                transform: "translateY(-50%)",
                bgcolor: "background.default",
                border: "2px solid",
                borderColor: "primary.main",
                borderRadius: 0,
                width: 30,
                height: 30,
                fontSize: "1.2rem",
                fontWeight: 900,
                color: "primary.main",
                boxShadow: "4px 4px 0 rgba(0,0,0,0.2)",
                "&:hover": {
                    bgcolor: "primary.main",
                    color: "background.default",
                    transform: "translateY(-50%) scale(1.05)",
                },
            }}
        >
            {direction === "left" ? "‹" : "›"}
        </IconButton>
    );
}

export function ProjectImagesCarousel({ images }: { images: string[] }) {
    const [index, setIndex] = useState(0);
    const hasMultiple = images.length > 1;

    const goPrev = () => setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    const goNext = () => setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

    if (!images.length) return null;

    return (
        <Box sx={{ position: "relative" }}>
            <Box
                component="img"
                src={images[index]}
                alt={`Capture du projet ${index + 1}`}
                sx={{
                    width: "100%",
                    borderRadius: 0,
                    border: "4px solid",
                    borderColor: "primary.main",
                    display: "block",
                    objectFit: "cover",
                    maxHeight: 300,
                    // boxShadow: "8px 8px 0 rgba(0,0,0,0.15)",
                }}
            />

            {hasMultiple && (
                <>
                    <CarouselNavButton onClick={goPrev} direction="left" />
                    <CarouselNavButton onClick={goNext} direction="right" />
                    <Stack
                        direction="row"
                        spacing={1}
                        sx={{
                            position: "absolute",
                            bottom: 12,
                            left: "50%",
                            transform: "translateX(-50%)",
                            // bgcolor: "rgba(26, 15, 0, 0.7)",
                            px: 1,
                            py: 0.75,
                        }}
                    >
                        {images.map((_, i) => (
                            <Box
                                key={i}
                                onClick={() => setIndex(i)}
                                sx={{
                                    width: 10,
                                    height: 10,
                                    border: "2px solid",
                                    borderColor: i === index ? "primary.main" : "rgba(255,255,255,0.5)",
                                    bgcolor: i === index ? "primary.main" : "transparent",
                                    cursor: "pointer",
                                    transition: "all 0.2s",
                                    "&:hover": {
                                        borderColor: "primary.main",
                                    },
                                }}
                            />
                        ))}
                    </Stack>
                </>
            )}
        </Box>
    );
}
