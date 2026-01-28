// --- data ---
import { highlightedWords } from "@/static/Data/highlitedWords"

// --- theme & style ---
import { colorPalette, typographySettings } from "@/style/modules/generalTheme"


export default function PartlyHighlitedHeadline({ headline }: { headline: string }) {
    const headlineWords = headline.split(' ')

    const coloredHeadline = headlineWords.map((word: string, idx: number) => {

        // --- check if word is highlighted ---
        const isHighlighted = highlightedWords.includes(word)
        
        return (
            <span // --- headline word ---
                key={idx}
                style={{
                    color: isHighlighted ? "#fff" : colorPalette.primary.main,
                    fontSize: isHighlighted ? typographySettings.fontSizes.additional : typographySettings.fontSizes.xxLarge,
                    fontWeight: isHighlighted ? typographySettings.fontWeights.max : typographySettings.fontWeights.bold,
                }}
            >
                {word}{idx < headlineWords.length - 1 ? ' ' : ''}
            </span>
        )
    })
    
    return <>{coloredHeadline}</>
}