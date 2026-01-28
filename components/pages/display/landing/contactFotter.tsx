'use client'

// --- theme & styling ---
import { buttonBrownGradient } from "@/style/common/shades"
import { commonSpacing } from "@/style/modules/alignments"
import { colorPalette, typographySettings } from "@/style/modules/generalTheme"

// --- mui components ---
import { Icon, Stack, Typography } from "@mui/material"

// --- components ---
import PartlyHighlitedHeadline from "../common/partlyHighlitedHeadline"
import { contactInformation } from "@/static/Data/contactInformation"
import ContactWidget from "../common/contactWidget"
import { contactInformationType } from "@/types/generalTypes"
import Footer from "./fotter"

// --- hooks ---
import useInViewport from "@/misc/hooks/useInViewport"
import { slideInFromBottom } from "@/style/common/animations"


export default function ContactFooter() {
    // --- intersection observation ---
    const { ref, isVisible } = useInViewport<HTMLDivElement> ({ threshold: 0.2, triggerOnce: true })
    
    return(
        <Stack // --- contact footer container ---
            ref={ref}
            direction={'column'}
            spacing={8}
            sx={{
                ...commonSpacing.xCenter,
                backgroundImage: 'linear-gradient(to bottom, #000 0%, rgba(0, 0, 0, 0.7) 5%, rgba(0, 0, 0, 0.3) 75%, #000 100%), url(/images/background/footbridge.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                pt: 10,
                '& > *': {
                    animation: isVisible ? `${slideInFromBottom} 0.6s ease-out forwards` : 'none',
                    opacity: 0,
                },
                '& > *:nth-of-type(1)': {
                    animationDelay: '0.1s',
                },
                '& > *:nth-of-type(2)': {
                    animationDelay: '0.3s',
                },
                '& > *:nth-of-type(3)': {
                    animationDelay: '0.5s',
                },
            }}
        >
            <Stack // --- headline container ---
                direction={'column'}
                spacing={2}
                sx={{...commonSpacing.xCenter}}
            >
                <Icon // --- rocket icon ---
                    sx={{ 
                        fontSize: typographySettings.iconSizes.medium,
                        background: buttonBrownGradient,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        textFillColor: 'transparent',
                    }}
                > rocket_launch </Icon>
                
                <Typography // --- headline ---
                    sx={{ 
                        fontWeight: typographySettings.fontWeights.bold, 
                        fontSize: typographySettings.fontSizes.xxLarge,
                        color: colorPalette.primary.main,
                        textAlign: 'center'
                    }}
                >
                    <PartlyHighlitedHeadline headline={'Haben wir dein Interesse geweckt?'} />
                </Typography>
            </Stack>

            <Stack // --- contact information container ---
                direction='row'
                spacing={5}
                sx={{
                    ...commonSpacing.xCenter,
                    px: 8

                }}
            >
                {contactInformation.map((info: contactInformationType, index: number) => (
                    <ContactWidget key={index} {...info} />
                ))}
            </Stack>
            <Footer />
        </Stack>
    )
}