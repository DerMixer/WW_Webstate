'use client'

// --- style & alignments ---
import { commonSpacing } from "@/style/modules/alignments"
import { colorPalette, typographySettings } from "@/style/modules/generalTheme"

// --- mui components ---
import { Box, Stack, Typography } from "@mui/material"

// --- components ---
import HrefButton from "../common/refButton"


function HighlitedText({ children }: { children: React.ReactNode }) {
  return (
    <Box 
      component="span" 
      sx={{ 
        color: colorPalette.primary.main, 
        fontWeight: typographySettings.fontWeights.max, 
        fontSize: typographySettings.fontSizes.large,
        pr: 1.15,
        pl:1.15 
      }}
    >
      {children} 
    </Box>
  )
}


export default function HeroSection() {
    return( 
        <Stack // --- hero section container ---
          direction="column"
          spacing={5}
          sx={{ 
            ...commonSpacing.fullCenter, 
            width: '100%',
            height: '100vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: 'url("/images/background/lighthouse.webp")', 
            backgroundRepeat: 'no-repeat',
            position: 'relative',
            '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                bgcolor: 'rgba(0,0,0,0.55)',
                zIndex: 1,
                pointerEvents: 'none',
            },
            '& > *': {
                position: 'relative',
                zIndex: 2,
            }
          }}
        >
          <Box // --- club logo ---
            component='img'
            draggable={false}
            src="/images/logos/WW/weekwarr_comp.png"
            alt="Weekend Warriors Logo"
            sx={{ width: '20rem', height: '22rem', userSelect: 'none' }}
          />
          <Stack // --- hero text container ---
            direction="column"
            spacing={2}
            sx={{ ...commonSpacing.xCenter }}
          >
            <Typography // --- hero main text ---
              sx={{
                fontFamily: typographySettings.fontFamily,
                fontSize: typographySettings.fontSizes.medium,
                fontWeight: typographySettings.fontWeights.medium,
                userSelect: 'none'
              }}
            >
              Dein<HighlitedText>TableTop</HighlitedText>Verein in<HighlitedText>Altenholz</HighlitedText>bei Kiel
            </Typography>
            <HrefButton text="Erfahre mehr" href="/#" />
          </Stack>
        </Stack>
    )
}