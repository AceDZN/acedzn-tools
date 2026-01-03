import { getLangDir } from "../../lib/language-direction";
import { HeroSection } from "../../components/home/HeroSection";
import { FeaturesSection } from "../../components/home/FeaturesSection";
import { HowItWorksSection } from "../../components/home/HowItWorksSection";
import { LatestGames } from "../../components/dictation/LatestGames";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const direction = getLangDir(lang);

    return (
        <>
            {/* Hero section */}
            <HeroSection direction={direction} lang={lang} />

            {/* Features section */}
            <FeaturesSection lang={lang} />

            {/* How it works section */}
            <HowItWorksSection lang={lang} />

            {/* Latest Games Section */}
            <LatestGames />
        </>
    );
}
