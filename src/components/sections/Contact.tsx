"use client";

import { Box, Stack, Typography } from "@mui/material";
import SlideLayout from "@/components/layout/SlideLayout";
import { LinkBtn, PostIt } from "@/components/common/PostIt";

type Props = {
    phone: string;
    email: string;
    linkedin: string;
    github: string;
};

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
                            Pour me contacter, <br /> c’est par ici :
                        </Typography>
                        <Stack spacing={1.2} sx={{ mt: 1 }}>
                            <LinkBtn label={phone} emoji="📞" />
                            <LinkBtn label={email} emoji="✉️" />
                        </Stack>
                    </PostIt>

                    <PostIt color="#FFC66B" rotate={2}>
                        <Typography sx={{ fontSize: { xs: "1.35rem", md: "1.6rem" }, fontFamily: "'Permanent Marker', cursive",lineHeight: 1.2 }}>
                            Pour me stalker, <br /> c’est par là :
                        </Typography>
                        <Box sx={{ mt: 1.2 }}>
                            <LinkBtn href={linkedin} label="Mon LinkedIn" emoji="🕵️‍♀️" />
                        </Box>
                    </PostIt>

                    <PostIt color="#FFE07A" rotate={-1}>
                        <Typography sx={{ fontSize: { xs: "1.35rem", md: "1.6rem" }, fontFamily: "'Permanent Marker', cursive",lineHeight: 1.2 }}>
                            Pour voir comment je code, <br /> c’est par ici :
                        </Typography>
                        <Box sx={{ mt: 1.2 }}>
                            <LinkBtn href={github} label="Mon GitHub" emoji="💻" />
                        </Box>
                    </PostIt>
                </Box>

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
