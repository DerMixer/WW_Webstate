'use client'

// --- components ---
import DisplayNavbar from "@/components/pages/display/Navbar"
import HeroSection from "@/components/pages/display/landing/heroSection"
import MainContentArea from "@/components/pages/display/landing/mainContentArea"

// --- style & alignments ---
import { commonSpacing } from "@/style/modules/alignments"

// --- mui components ---
import { Stack } from "@mui/material"


export default function Home() {
  return (
    <Stack
      direction="column" 
    > 
      <DisplayNavbar />

      <Stack // --- main content container ---
        sx={{
          width: '100%',
          ...commonSpacing.yCenter,
        }}
      >
        <HeroSection />

        <MainContentArea />
      </Stack>
    </Stack>
  )
}
