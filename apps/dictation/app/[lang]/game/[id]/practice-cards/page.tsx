"use client";

import { useQuery } from "convex/react";
import { api } from "@repo/db";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { Spinner } from "@repo/ui/components/ui/spinner";
import { Id } from "@repo/db";

import { useMemo, useState } from "react";
import { Button } from "@repo/ui/components/ui/button";
import { CardsGameView } from "../../../../../components/cards-game-view";
import { getDirectedGame, LanguageDirection } from "../../../../../lib/language-direction";

export default function PracticeCardsPage() {
    const params = useParams();
    const searchParams = useSearchParams();
    const router = useRouter();
    const id = params.id as string;

    const game = useQuery(api.dictation.getDictation, { dictationId: id as Id<"dictation_games"> });

    const directionParam = searchParams.get('direction') as LanguageDirection | null;
    const hideExamplesParam = searchParams.get('hideExamples');
    const shuffleParam = searchParams.get('shuffle');

    const [hideExampleSentences, setHideExampleSentences] = useState(
        hideExamplesParam === 'true'
    );

    const languageDirection: LanguageDirection = directionParam === 'reverse' ? 'reverse' : 'forward';
    const shuffleWords = shuffleParam !== 'false'; // Default to true if not specified as false

    const activeGame = useMemo(() => {
        if (!game) return null;
        return getDirectedGame(game, languageDirection);
    }, [game, languageDirection]);


    if (game === undefined) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Spinner size="lg" />
            </div>
        );
    }

    if (game === null || !activeGame) {
        return (
            <div className="container mx-auto py-12 text-center">
                <h1 className="text-2xl font-bold mb-4">Game not found</h1>
                <Button onClick={() => router.push('/dashboard')}>Back to Dashboard</Button>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-8 px-4">
            <Button variant="outline" className="mb-4" onClick={() => router.back()}>
                Back to Game Details
            </Button>
            <CardsGameView
                game={activeGame}
                onGameEnd={() => router.push(`/game/${id}`)}
                hideExampleSentences={hideExampleSentences}
                onToggleExampleSentences={() => setHideExampleSentences(prev => !prev)}
                shuffleWords={shuffleWords}
            />
        </div>
    );
}
