import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

const RetroTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: "rgba(163, 12, 12, 0.95)",
        color: theme.palette.background.default,
        // fontSize: "0.85rem",
        // fontWeight: 700,
        letterSpacing: 0.5,
        textTransform: "uppercase",
        padding: "8px 12px",
        // border: `3px solid ${theme.palette.text.primary}`,
        boxShadow: "4px 4px 0 rgba(0, 0, 0, 0.3)",
        fontFamily: theme.typography.fontFamily,
    },
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.primary.main,
        "&::before": {
            backgroundColor: "rgba(163, 12, 12, 0.95)",
            // border: `3px solid ${theme.palette.text.primary}`,
            boxSizing: "border-box",
        },
    },
}));

export default RetroTooltip;
