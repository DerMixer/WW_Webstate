'use client'

// --- mui components ---
import { Box, Stack, Typography } from "@mui/material"

// --- theme & styling ---
import { commonSpacing } from "@/style/modules/alignments"
import { colorPalette, typographySettings } from "@/style/modules/generalTheme"

// --- static data ---
import { hrefLinks } from "@/static/Data/hrefLinks"

// --- types ---
import { NavigationLinkType } from "@/types/NavigationTypes"

// --- components ---
import NavigationLink from "./common/NavigationLink"

// --- hooks ---
import { useEffect, useState } from "react"


export default function DisplayNavbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => { // --- handle scroll effect ---
        const handleScroll = () => {
            setScrolled(window.scrollY > 0)
        }
        window.addEventListener("scroll", handleScroll)
    }, [])

    return (
        <Stack // --- Navbar container ---
            direction="row"
            spacing={30}
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 1000,
                ...commonSpacing.SA,
                width: '100%',
                pt: 2.8,
                background: scrolled ? "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0))" : "transparent",
            }}
        >
            <Stack // --- Logo & Name container ---
                direction="row"
                spacing={5}
                sx={{
                    ...commonSpacing.SB,
                    ...commonSpacing.fullCenter,
                }}
            >
                <Box // --- club logo ---
                    component="img" 
                    draggable={false}
                    src="/images/logos/WW/weekwarr_comp.png" 
                    alt="Logo" 
                    sx={{ width: '3.5rem', height: '4rem', userSelect: 'none' }}
                />
                <a // --- club name & home navigation --- 
                    href="/"
                    style={{
                        fontFamily: typographySettings.fontFamily,
                        fontSize: typographySettings.fontSizes.xLarge,
                        fontWeight: typographySettings.fontWeights.bold,
                        color: colorPalette.dark.text.light,
                        userSelect: 'none'
                    }}
                >
                    Weekend Warriors
                </a>
            </Stack>
            
            <Stack // --- Navigation links container ---
                direction="row"
                spacing={6}
                sx={{
                    ...commonSpacing.fullCenter,
                }}
            >
                {hrefLinks.map((link: NavigationLinkType, index: number) => (
                    <NavigationLink
                        key={index}
                        linkName={link.name}
                        linkPath={link.link}
                    />
                ))}
            </Stack>
        </Stack>
    )
}