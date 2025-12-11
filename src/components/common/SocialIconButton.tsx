import { Box } from "@mui/material";

type SocialIconButtonProps = {
    href: string;
    src: string;
    alt: string;
};

export default function SocialIconButton({ href, src, alt }: SocialIconButtonProps) {
    return (
        <Box
            component="a"
            href={href}
            target="_blank"
            rel="noreferrer"
            sx={{
                width: { xs: 48, md: 56 },
                height: { xs: 48, md: 56 },
                borderRadius: 0,
                border: "3px solid",
                borderColor: "primary.main",
                bgcolor: "background.default",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "3px 3px 0 rgba(0,0,0,0.2)",
                transition: "all .15s ease",
                color: "primary.main",       // LA couleur de base de l'icône
                "&:hover": {
                    // bgcolor: "primary.main",
                    // color: "background.default", // devient crème/blanc au hover
                    transform: "translate(-2px, -2px)",
                    boxShadow: "5px 5px 0 rgba(0,0,0,0.25)",
                },
            }}
        >
            <Box
                component="img"
                src={src}
                alt={alt}
                sx={{
                    width: "60%",
                    height: "60%",
                    objectFit: "contain",
                }}
            />
        </Box>
    );
}
