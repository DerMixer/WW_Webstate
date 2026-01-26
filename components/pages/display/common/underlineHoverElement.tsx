'use client'

// --- theme & styling ---
import { colorPalette } from "@/style/modules/generalTheme"

// --- mui components ---
import { Box } from "@mui/material"


export default function UnderlineHoverElement({ children, underlineColor }: { children?: React.ReactNode, underlineColor?: string }) {
    return (
        <Box // --- underline hover effect container ---
            sx={{
            display: 'inline-block',
            position: 'relative',
            cursor: 'pointer',
            }}
        >
            {children}
            <Box // --- underline element ---
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    height: '4px',
                    borderRadius: 4,
                    backgroundColor: 'transparent',
                    width: '0%',
                    transform: 'translateX(-50%)',
                    transition: 'width 0.4s cubic-bezier(0.4,0,0.2,1), background-color 0.4s cubic-bezier(0.4,0,0.2,1)',
                    pointerEvents: 'none',
                    '&:hover, .MuiBox-root:hover &': {
                        width: '100%',
                        backgroundColor: underlineColor || colorPalette.primary.main,
                    },
                }}
            />
        </Box>
    );
}