"use client";

import { useQuery } from "convex/react";
import { api } from "@repo/db";
import { useParams } from "next/navigation";
import { Spinner } from "@repo/ui/components/ui/spinner";
import { Id } from "@repo/db";
import { GameContainer } from "../../../../components/game-container";

export default function GamePage() {
    const params = useParams();
    const id = params.id as string;

    // Use Convex useQuery. The ID might be invalid string for Id<"dictation_games"> if it's not proper format.
    // We assume it is since router params usually come from links.

    const game = useQuery(api.dictation.getDictation, { dictationId: id as Id<"dictation_games"> });

    if (game === undefined) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Spinner size="lg" />
            </div>
        );
    }

    if (game === null) {
        return (
            <div className="container mx-auto py-12 text-center">
                <h1 className="text-2xl font-bold mb-4">Game not found</h1>
                <p className="text-gray-500">The dictation game you are looking for does not exist or you do not have permission.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-8 px-4">
            <GameContainer game={game} />
        </div>
    );
}
