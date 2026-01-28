'use client'

// --- alignments ---
import { commonSpacing } from "@/style/modules/alignments"

// --- theme & styling ---
import { colorPalette, typographySettings } from "@/style/modules/generalTheme"

// --- mui components ---
import { Stack, Typography } from "@mui/material"

export default function Footer() {
    return(
        <Stack // --- footer container ---
            direction={'column'}
        >
            <Typography // --- Copyright Text ---
                sx={{
                    fontSize: typographySettings.fontSizes.xSmall,
                    fontWeight: typographySettings.fontWeights.max,
                    color: colorPalette.primary.main,
                    textAlign: 'center',
                    py: 3
                }}
            >
                Copyright © Weekend Warriors.
            </Typography>
            <Stack // --- bottom footer container ---
                direction={'row'}
                spacing={5}
                sx={{
                    ...commonSpacing.SA,
                    color: colorPalette.primary.main,
                    fontSize: typographySettings.fontSizes.small,
                    textAlign: 'center',
                    pb: 2
                }}
            >
                <Typography sx={{ fontSize: typographySettings.fontSizes.xSmall }}> <a href="https://github.com/DerMixer" >Made with ❤️ by Mick Ihde</a>  </Typography>
                <Typography sx={{ fontSize: typographySettings.fontSizes.xSmall }}> Version 2.0 </Typography>
            </Stack>
        </Stack>
    )
}