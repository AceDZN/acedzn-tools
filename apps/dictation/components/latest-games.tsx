"use client";

import Link from "next/link";
import { useQuery } from "convex/react";
import { api } from "@repo/db";
import { Button } from "@repo/ui/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@repo/ui/components/ui/card";
import { Spinner } from "@repo/ui/components/ui/spinner";
import { PlayIcon } from "@heroicons/react/24/outline";
import { trackEvent } from "@repo/analytics";
import { EVENTS } from "../lib/analytics-events";

export function LatestGames() {
    const games = useQuery(api.dictation.listDictations);

    if (games === undefined) {
        return <div className="flex justify-center p-8"><Spinner /></div>;
    }

    if (games.length === 0) {
        return <div className="text-gray-500 text-center py-8">No public games available yet.</div>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game) => (
                <Card key={game._id} className="hover:shadow-lg transition-shadow bg-white">
                    <CardHeader>
                        <CardTitle className="truncate text-lg">{game.title}</CardTitle>
                        <CardDescription>
                            {game.sourceLanguage} → {game.targetLanguage}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-gray-500 mb-4 line-clamp-2 min-h-[40px]">
                            {game.description || "No description"}
                        </p>
                        <div className="flex items-center justify-between mt-4">
                            <span className="text-xs text-gray-400">
                                {game.wordPairs.length} words • {game.playCount || 0} plays
                            </span>
                            <Link href={`/game/${game._id}`} onClick={() => trackEvent(EVENTS.GAME_PLAY_CLICKED, {
                                game_id: game._id,
                                title: game.title,
                                source: 'dashboard_community'
                            })}>
                                <Button size="sm" variant="secondary" className="w-full">
                                    <PlayIcon className="w-4 h-4 mr-2" />
                                    Play
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
