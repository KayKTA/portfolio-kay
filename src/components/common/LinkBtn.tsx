"use client";

import { Button } from "@mui/material";

type Props = {
    href?: string;
    label: string;
    variant?: "primary" | "outline";
    onClick?: () => void;
};

export default function LinkBtn({ href, label, variant = "outline", onClick }: Props) {
  const isPrimary = variant === "primary";

    return (
        <Button
            component={href ? "a" : "button"}
            href={href}
            target={href && href.startsWith("http") ? "_blank" : undefined}
            rel={href && href.startsWith("http") ? "noreferrer" : undefined}
            onClick={(e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
                if (onClick) {
                    e.preventDefault();
                    onClick();
                }
            }}
            sx={{
                borderRadius: 0,
                border: "3px solid",
                borderColor: "primary.main",
                bgcolor: isPrimary ? "primary.main" : "background.default",
                color: isPrimary ? "background.default" : "primary.main",
                fontWeight: 900,
                textTransform: "uppercase",
                px: 3,
                py: 1.2,
                minHeight: 48,
                width: "100%",
                fontSize: { xs: "0.8rem", md: "0.9rem" },
                boxShadow: isPrimary ? "4px 4px 0 rgba(0,0,0,0.25)" : "none",
                "&:hover": {
                bgcolor: isPrimary ? "background.default" : "primary.main",
                color: isPrimary ? "primary.main" : "background.default",
                },
            }}
        >
            {label}
        </Button>
    );
}
