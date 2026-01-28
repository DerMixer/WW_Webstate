'use client'

// --- static data ---
import { widgetInformation } from "@/static/Data/widgetInformation"

// --- theme & styling ---
import { commonSpacing } from "@/style/modules/alignments"
import { darkBackgroundGradient } from "@/style/common/shades"

// --- mui components ---
import { Stack } from "@mui/material"

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
            {widgetInformation.map((widget: widgetInformationType, index: number) => (
                <InformationWiget 
                    key={index} 
                    information={widget}
                    index={index}
                />
            ))}
        </Stack>
    )
}