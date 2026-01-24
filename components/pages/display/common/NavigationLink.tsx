'use client'

// --- theme & styling ---
import { colorPalette, typographySettings } from "@/style/modules/generalTheme"

// --- mui components ---
import { Button } from "@mui/material"

// --- next.js hooks ---
import { usePathname } from "next/navigation"

// --- components ---
import UnderlineHoverElement from "./underlineHoverElement"


export default function NavigationLink({ linkName, linkPath }: { linkName: string; linkPath: string }) {
    const currentPath = usePathname()

    return (
        <UnderlineHoverElement>
            <Button // --- individual navigation link ---
                href={linkPath}
                disableRipple
                draggable={false}
                sx={{
                    minWidth: '4rem',
                    color: currentPath === linkPath ? colorPalette.primary.main : colorPalette.dark.text.light,
                    fontFamily: typographySettings.fontFamily,
                    fontSize: typographySettings.fontSizes.xLarge,
                    fontWeight: typographySettings.fontWeights.bold,
                    textTransform: 'none',
                    backgroundColor: 'transparent',
                    transition: 'all 0.5s',
                    '&:hover': {
                        color: colorPalette.primary.main,
                    }
                }}
            >
                {linkName}
            </Button>
        </UnderlineHoverElement>
    )
}