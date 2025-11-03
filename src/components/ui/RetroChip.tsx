import { Chip } from '@mui/material'

export const SimpleChip = ({item}: {item: string}) => {
    return (
        <Chip
            key={item}
            label={item}
            size="small"
            variant="outlined"
            sx={{
                border: "2px solid",
                borderColor: "primary.main",
                borderRadius: 1,
                bgcolor: "background.paper",
                height: 26,
                fontWeight: 700,
                "& .MuiChip-label": { px: 1 },
            }}
        />
    )
}

export type chip = { label: string; logo?: string };

const RetroChip = ({item}: {item: chip}) => {
    return (
        <Chip
            key={item.label}
            label={
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                    {/* logo inline si dispo */}
                    {item.logo ? (
                        <img
                            src={item.logo}
                            alt=""
                            onError={(e) => ((e.currentTarget.style.display = "none"))}
                            style={{
                                width: 20,
                                height: 20,
                                objectFit: "contain",
                                // filter: "grayscale(100%) contrast(1.2)"
                            }}
                        />
                    ) : null}
                    {item.label}
                </span>
            }
            size="small"
            variant="outlined"
            sx={{
                border: "2px solid",
                borderColor: "primary.main",
                borderRadius: 1,
                bgcolor: "background.paper",
                height: 40,
                fontWeight: 700,
                "& .MuiChip-label": { px: 1 },
            }}
        />
    )
}



export default RetroChip
