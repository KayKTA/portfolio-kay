import { Box } from "@mui/material";

export default function Highlight({ children }: { children: React.ReactNode }) {
    return (
        <Box
            component="span"
            className="highlight"
            sx={{
                fontWeight: 900,
                color: "primary.main",
            }}
        >
            {children}
        </Box>
    );
}
