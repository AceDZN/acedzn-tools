"use client";

import Link from "next/link";
import { useQuery } from "convex/react";
import { api } from "@repo/db";
import { Button } from "@repo/ui/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@repo/ui/components/ui/card";
import { Spinner } from "@repo/ui/components/ui/spinner";
import { PlusIcon, PlayIcon } from "@heroicons/react/24/outline";
import { LatestGames } from "../../../components/latest-games";

export default function DashboardPage() {
    const dictations = useQuery(api.dictation.myDictations);

    return (
        <div className="container mx-auto py-8 px-4">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-gray-900">My Dashboard</h1>
                <Link href="/create">
                    <Button className="bg-indigo-600">
                        <PlusIcon className="w-5 h-5 mr-2" />
                        Create New
                    </Button>
                </Link>
            </div>

            <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-700">Your Dictations</h2>

                {dictations === undefined ? (
                    <div className="flex justify-center p-12">
                        <Spinner size="lg" />
                    </div>
                ) : dictations.length === 0 ? (
                    <div className="text-center py-12 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                        <p className="text-gray-500 mb-4">You haven't created any dictations yet.</p>
                        <Link href="/create">
                            <Button variant="outline">Get Started</Button>
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {dictations.map((game) => (
                            <Card key={game._id} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className="truncate">{game.title}</CardTitle>
                                    <CardDescription>
                                        {game.sourceLanguage} → {game.targetLanguage}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                                        {game.description || "No description"}
                                    </p>
                                    <div className="flex items-center justify-between mt-4">
                                        <span className="text-xs text-gray-400">
                                            {game.wordPairs.length} words
                                        </span>
                                        <Link href={`/game/${game._id}`}>
                                            <Button size="sm" variant="secondary">
                                                <PlayIcon className="w-4 h-4 mr-2" />
                                                Play
                                            </Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>

            <div className="mt-12 space-y-6">
                <h2 className="text-xl font-semibold text-gray-700">Community Games</h2>
                <LatestGames />
            </div>
        </div>
    );
}
