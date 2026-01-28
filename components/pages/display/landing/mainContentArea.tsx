'use client'

// --- static data ---
import { widgetInformation } from "@/static/Data/widgetInformation"

// --- theme & styling ---
import { commonSpacing } from "@/style/modules/alignments"
import { darkBackgroundGradient } from "@/style/common/shades"

// --- mui components ---
import { Box, Stack } from "@mui/material"

// --- components ---
import InformationWiget from "../common/informationWidget"

// --- types ---
import { widgetInformationType } from "@/types/generalTypes"


export default function MainContentArea() {
    return (
        <Stack
            direction="column"
            spacing={45}
            sx={{
                width: '100%',
                ...commonSpacing.yCenter,
                backgroundImage: `${darkBackgroundGradient}, url(/images/background/cityView.webp)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                py: 30,
                px: 15,
            }}
        >
            {widgetInformation.map((widget: widgetInformationType, index: number) => {
                    const isLeftAligned = index % 2 !== 0;
                return (
                    <Box
                        key={index}
                        id={index === 0 ? 'info-widget' : undefined}
                        sx={{ 
                            scrollMarginTop: index === 0 ? '10rem' : undefined,
                            display: 'flex',
                            justifyContent: isLeftAligned ? 'flex-start !important' : 'flex-end !important',
                        } }
                    >
                        <InformationWiget 
                            information={widget}
                            index={index}
                        />
                    </Box>
            )})}
        </Stack>
    )
}