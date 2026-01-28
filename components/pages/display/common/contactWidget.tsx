'use client'

// --- shades & gradients ---
import { buttonBrownGradient } from "@/style/common/shades"
import { commonSpacing } from "@/style/modules/alignments"

// --- style & alignments ---
import { colorPalette, typographySettings } from "@/style/modules/generalTheme"

// --- types ---
import { contactInformationType } from "@/types/generalTypes"

// --- mui components ---
import { Box, Divider, Icon, Stack, Typography } from "@mui/material"

// --- icons ---
import InstagramIcon from '@mui/icons-material/Instagram'


export default function ContactWidget({ icon, headline, details, url, urlText }: contactInformationType) {
    return (
        <Stack // --- contact widget container ---
            direction="column"
            spacing={3}
            sx={{
                width: '33%',
                minHeight: '18rem',
                ...commonSpacing.xCenter,
                backgroundColor: colorPalette.dark.background.medium,
                borderRadius: 5,
                p: 2.5, 
                pt: 4,
            }}
        >
            {icon === 'instagram' ? (
                <Box // --- instagram icon ---
                    sx={{
                        display: 'inline-flex',
                        width: typographySettings.iconSizes.small,
                        height: typographySettings.iconSizes.small,
                        background: buttonBrownGradient,
                        WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'%3E%3Cpath d=\'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3Z\'/%3E%3C/svg%3E")',
                        WebkitMaskRepeat: 'no-repeat',
                        WebkitMaskSize: 'contain',
                        maskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'%3E%3Cpath d=\'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3Z\'/%3E%3C/svg%3E")',
                        maskRepeat: 'no-repeat',
                        maskSize: 'contain',
                    }}
                />
            ) : (
                <Icon // --- other icons ---
                    sx={{
                        fontSize: typographySettings.iconSizes.small,
                        background: buttonBrownGradient,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        textFillColor: 'transparent',
                    }}
                >
                    {icon}
                </Icon>
            )}

            <Typography // --- headline ---
                sx={{
                    fontWeight: typographySettings.fontWeights.bold, 
                    fontSize: typographySettings.fontSizes.xLarge,
                    color: colorPalette.dark.text.light,
                    textAlign: 'center'
                }}
            > {headline} </Typography>

            <Divider sx={{ width: '15%', height: 1.5, bgcolor: colorPalette.dark.text.muted, borderRadius: 4 }} />

            <Stack // --- details ---
                spacing={5}
                sx={{
                    width: '100%',
                    ...commonSpacing.yCenter,
                    ...commonSpacing.SA,
                    textAlign: 'center',
                    fontSize: typographySettings.fontSizes.small,
                    color: colorPalette.dark.text.muted,
                    bgcolor: colorPalette.dark.background.dark,
                    p: 2,
                    borderRadius: 2,
                    minHeight: '8rem',
                }}
            > 
                <> {details} </>
                <Box  // --- link ---
                    component="a"
                    href={url === '' ? undefined : url}
                    sx={{
                        color: colorPalette.primary.main,
                        textDecoration: 'none',
                        transsition: 'all 0.3s ease-in-out',
                        '&:hover': { 
                            textDecoration: 'underline',
                            color: colorPalette.primary.dark
                        }
                    }}
                >
                    {urlText}
                </Box>
            </Stack>
        </Stack>
    )
}