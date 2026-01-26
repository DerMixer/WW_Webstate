'use client'

import { widgetInformation } from "@/static/Data/widgetInformation"
// --- theme & styling ---
import { commonSpacing } from "@/style/modules/alignments"

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
                backgroundImage: 'linear-gradient(to bottom, #000 0%, rgba(0, 0, 0, 0.7) 5%, rgba(0, 0, 0, 0.3) 75%, #000 100%), url(/images/background/cityView.webp)',
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