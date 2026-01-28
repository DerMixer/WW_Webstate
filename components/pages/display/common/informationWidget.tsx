'use client'

// --- shades & gradients ---
import { buttonBrownGradient } from "@/style/common/shades"

// --- style & alignments ---
import { commonSpacing } from "@/style/modules/alignments"
import { colorPalette, typographySettings } from "@/style/modules/generalTheme"

// --- types ---
import { widgetInformationType } from "@/types/generalTypes"

// --- mui components ---
import { Icon, Stack, Typography } from "@mui/material"

// --- components ---
import HrefButton from "./refButton"
import PartlyHighlitedHeadline from "./partlyHighlitedHeadline"


export default function InformationWidget({ information, index }: { information: widgetInformationType, index: number }) {
    return (
        <Stack // --- widget container ---
            direction="row"
            spacing={10}
            sx={{ 
                ...commonSpacing.xCenter,
                width: index % 2 === 0 ? '70%' : '85%',
                fontFamily: typographySettings.fontFamily,
                color: colorPalette.dark.text.light,
                alignSelf: index % 2 !== 0 ? 'flex-start' : 'flex-end',
            }}
        >
            <Icon // --- icon --- 
                sx={{ 
                    fontSize: typographySettings.iconSizes.xLarge,
                    background: buttonBrownGradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textFillColor: 'transparent',
                }}
            > 
                {information.icon} 
            </Icon>

            <Stack // --- text container ---
                direction="column"
                spacing={3}
                sx={{
                    ...commonSpacing.xCenter
                }}
            >
                <Typography // --- headline ---
                    sx={{ 
                        fontWeight: typographySettings.fontWeights.bold, 
                        fontSize: typographySettings.fontSizes.xxLarge,
                        color: colorPalette.primary.main,
                        textAlign: 'center'
                    }}
                >
                    <PartlyHighlitedHeadline headline={information.headline} />
                </Typography>
                <Typography // --- text ---
                    sx={{
                        fontSize: typographySettings.fontSizes.medium,
                        color: colorPalette.dark.text.muted,
                        textAlign: 'center'
                    }}
                >
                    {information.text}
                </Typography>
                <HrefButton // --- reference button ---
                    text={information.refText}
                    href={information.url}
                />
            </Stack>
        </Stack>
    )
}