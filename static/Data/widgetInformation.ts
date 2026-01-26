// --- types ---
import { widgetInformationType } from "@/types/generalTypes"

// --- data ---
import { activePartners } from "./partners"


export const highlightedWords: string[] = [
    'Wir',
    'Figuren',
    'bemalen',
    'Spielen',
    'Turnier',
    'Partner',
    'Intresse'
]

export const widgetInformation: widgetInformationType[] = [
    {
        icon: 'groups_3',
        headline: 'Das sind Wir',
        text: 'Die Weekend Warriors sind ein aktiver Verein von begeisterten TableTop Fans. Bei unseren regelmäßigen Treffen wird zusammen gebastelt, gemalt und gespielt. Von gemütlichem Zusammensitzen bis hin zu kompetitiven Turnieren können wir alles anbieten.',
        refText: 'Zu unseren Mitgliedern',
        url: '/Mitglieder'
    },
    {
        icon: 'color_lens',
        headline: 'Von Figuren bemalen über Spielen bis zum Turnier Spieler',
        text: 'Bei unseren Treffen ist für jeden etwas dabei. Ob Figuren bemalen, dem Spielen diverser TableTop-Systeme oder einfach nur mit anderen Hobbyisten über dein Lieblingsspiel quatschen. Hier bist du richtig. Kompetitivere Spieler oder solche, die es werden wollen, können in unserer vereinsinternen Liga oder auf diversen Turnieren zeigen, was sie können.',
        refText: '',
        url: ''
    },
    {
        icon: 'handshake',
        headline: 'Unsere Partner',
        text: `Wir freuen uns besonders, dass uns ${activePartners.map(partner => partner.name).join(', ')} als Partner unterstützen.`,
        refText: 'Zu unseren Partnern',
        url: '/Partner'
    }
]