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

// --- hooks ---
import useInViewport from "@/misc/hooks/useInViewport"

// --- animations ---
import { slideInFromLeft, slideInFromRight } from "@/style/common/animations"


export default function InformationWidget({ information, index }: { information: widgetInformationType, index: number }) {
    // --- alignent & animation calculation ---
    const isLeftAligned = index % 2 !== 0 
    const animationName = isLeftAligned ? `${slideInFromLeft}` : `${slideInFromRight}`
    
    // --- intersection observation ---
    const { ref, isVisible } = useInViewport<HTMLDivElement> ({ threshold: 0.2, triggerOnce: true })


    return (
        <Stack // --- widget container ---
            ref={ref}
            direction="row"
            spacing={10}
            sx={{ 
                ...commonSpacing.xCenter,
                width: index % 2 === 0 ? '70%' : '85%',
                fontFamily: typographySettings.fontFamily,
                color: colorPalette.dark.text.light,
                '& > *': {
                    animation: isVisible ? `${animationName} 0.6s ease-out forwards` : 'none',
                    opacity: 0,
                },
                '& > *:nth-of-type(1)': {
                    animationDelay: '0.1s',
                },
                '& > *:nth-of-type(2)': {
                    animationDelay: '0.3s',
                },
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
                    ...commonSpacing.xCenter,
                    '& > *': {
                        animation: isVisible ? `${animationName} 0.6s ease-out forwards` : 'none',
                        opacity: 0,
                    },
                    '& > *:nth-of-type(1)': {
                        animationDelay: '0.2s',
                    },
                    '& > *:nth-of-type(2)': {
                        animationDelay: '0.4s',
                    },
                    '& > *:nth-of-type(3)': {
                        animationDelay: '0.6s',
                    },
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