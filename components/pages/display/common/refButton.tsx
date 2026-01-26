'use client'

// --- mui components ---
import { Button } from "@mui/material"

// --- components ---
import UnderlineHoverElement from "./underlineHoverElement"

// --- theme & styling ---
import { colorPalette, typographySettings } from "@/style/modules/generalTheme"
import { buttonBrownGradient } from "@/style/common/shades"


export default function HrefButton({text, href}: {text: string, href: string}) {
    return (
        <Button
            href={href}
            disableRipple
            draggable={false}
            sx={{
                fontFamily: typographySettings.fontFamily,
                fontSize: typographySettings.fontSizes.large,
                fontWeight: typographySettings.fontWeights.strong,
                color: colorPalette.dark.text.light,
                textTransform: 'none',
                backgroundColor: 'transparent',
                userSelect: 'none',
                borderRadius: 5,
                boxShadow: 3,
                pt: 0.9,
                pb: 0.9,
                pl: 4.5,
                pr: 4.5,
                background: buttonBrownGradient,
                '&:hover': {
                    transform: 'scale(1.02)',
                },
                transition: 'all 0.25s ease-in-out',
            }}
        >
            <UnderlineHoverElement underlineColor={colorPalette.dark.text.light}>
                {text}
            </UnderlineHoverElement>
        </Button>
    )
}