"use client";

import { Box, Stack, Typography, Button, IconButton } from "@mui/material";
import SlideLayout from "@/components/layout/SlideLayout";

type Props = {
    phone: string;
    email: string;
    linkedin: string;
    github: string;
};

const PostIt = ({
    children,
    color = "#FFD966",
    rotate = -3,
}: {
    children: React.ReactNode;
    color?: string;
    rotate?: number;
}) => (
    <Box
        sx={{
            position: "relative",
            width: { xs: 260, md: 300 },
            minHeight: { xs: 160, md: 180 },
            bgcolor: color, // post-it plein (plus foncé que le fond)
            p: 2,
            borderRadius: 1,
            boxShadow: "1px 1px 0 rgba(0,0,0,0.25)",
            transform: `rotate(${rotate}deg)`,
            //   // quadrillage léger
            //   backgroundImage: `
            //     linear-gradient(to right, rgba(0,0,0,.06) 1px, transparent 1px),
            //     linear-gradient(to bottom, rgba(0,0,0,.06) 1px, transparent 1px)
            //   `,
            backgroundSize: "18px 18px",
        }}
    >
        {/* scotch */}
        <Box
            sx={{
                position: "absolute",
                left: "40%",
                top: -10,
                width: 80,
                height: 24,
                bgcolor: "rgba(255,255,255,.7)",
                boxShadow: "0 2px 2px rgba(0,0,0,.12)",
                transform: "rotate(2deg)",
            }}
        />
        <Box sx={{ position: "relative", zIndex: 1, fontFamily: "'Permanent Marker'" }}>
            {children}
        </Box>
    </Box>
);

const LinkBtn = ({
    href,
    label,
    emoji,
}: {
    href?: string;
    label: string;
    emoji?: string;
}) => (
    <Button
        component="a"
        href={href}
        target={href && href.startsWith("http") ? "_blank" : undefined}
        rel="noreferrer"
        variant="outlined"
        sx={{
            border: "3px solid",
            borderColor: "primary.main",
            borderRadius: 2,
            bgcolor: "background.paper",
            fontWeight: 900,
            textTransform: "none",
            px: 2,
            height: 40,
            "&:hover": { bgcolor: "background.default" },
        }}
    >
        <span style={{ marginRight: 8 }}>{emoji ?? "👉"}</span>
        {label}
    </Button>
);

export default function Contact({
    phone,
    email,
    linkedin,
    github,
}: Props) {
    return (
        <SlideLayout
        title="Contact"
        subtitle="Restons en lien"
        >
            <Box
                sx={{
                    width: "100%",
                    maxWidth: 1100,
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "1.2fr 0.8fr" },
                    gap: { xs: 3, md: 4 },
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                        gap: 3,
                        justifyItems: { xs: "center", sm: "start" },
                    }}
                >
                    <PostIt rotate={-4}>
                        <Typography sx={{ fontSize: { xs: "1.35rem", md: "1.6rem" }, fontFamily: "'Permanent Marker', cursive",lineHeight: 1.2 }}>
                            Pour me contacter, <br /> c’est <u>par ici</u> :
                        </Typography>
                        <Stack spacing={1.2} sx={{ mt: 1 }}>
                            <LinkBtn label={phone} emoji="📞" />
                            <LinkBtn label={email} emoji="✉️" />
                        </Stack>
                    </PostIt>

                    <PostIt color="#FFC66B" rotate={2}>
                        <Typography sx={{ fontSize: { xs: "1.35rem", md: "1.6rem" }, fontFamily: "'Permanent Marker', cursive",lineHeight: 1.2 }}>
                            Pour me stalker, <br /> c’est <u>par là</u> :
                        </Typography>
                        <Box sx={{ mt: 1.2 }}>
                            <LinkBtn href={linkedin} label="Mon LinkedIn" emoji="🕵️‍♀️" />
                        </Box>
                    </PostIt>

                    <PostIt color="#FFE07A" rotate={-1}>
                        <Typography sx={{ fontSize: { xs: "1.35rem", md: "1.6rem" }, fontFamily: "'Permanent Marker', cursive",lineHeight: 1.2 }}>
                            Pour voir comment je code, <br /> c’est <u>par ici</u> :
                        </Typography>
                        <Box sx={{ mt: 1.2 }}>
                            <LinkBtn href={github} label="Mon GitHub" emoji="💻" />
                        </Box>
                    </PostIt>
                </Box>

                {/* Zone droite : coordonnées “propres” + CTA */}
                <Box
                    sx={{
                        border: "4px solid",
                        borderColor: "primary.main",
                        bgcolor: "background.default",
                        borderRadius: 1,
                        p: { xs: 2, md: 3 },
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: 1.5,
                    }}
                >
                    <Box sx={{ mt: 4, mb: 2, textAlign: "center" }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontFamily: "'Permanent Marker', cursive",
                                color: "primary.main",
                                fontSize: { xs: "1.25rem", md: "1.5rem" },
                                mb: 1,
                            }}
                        >
                            Après 6 ans en tant que développeuse fullstack, je recherche un environnement technique stimulant où je pourrai continuer à coder tout en évoluant progressivement vers un rôle de Lead et prendre plus de responsabilités techniques.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </SlideLayout>
    );
}
