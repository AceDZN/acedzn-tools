"use client";

import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "@repo/db";
import { useDictionary } from "./dictionary-provider";
import { Button } from "@repo/ui/components/ui/button";
import { GameCard } from "./dictation/GameCard";
import Link from "next/link";
import { Plus, Pencil, Rocket, FileText } from "lucide-react"; // Using Lucide icons matching legacy Heroicons intent
import { Spinner } from "@repo/ui/components/ui/spinner";

interface ProfileViewProps {
    lang: string;
}

export function ProfileView({ lang }: ProfileViewProps) {
    const { user, isLoaded: isUserLoaded } = useUser();
    const games = useQuery(api.dictation.myDictations);
    const t = useDictionary();

    if (!isUserLoaded || games === undefined) {
        return (
            <div className="flex justify-center items-center py-20">
                <Spinner size="lg" />
            </div>
        );
    }

    if (!user) {
        return null; // Should be handled by middleware/redirect, but safe guard
    }

    const publishedGames = games?.filter(g => g.isPublic) || [];
    const draftGames = games?.filter(g => !g.isPublic) || [];

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mx-auto max-w-6xl">
                {/* Profile Header Card */}
                <div className="bg-card rounded-2xl shadow-sm border border-border p-8 mb-12 relative overflow-hidden">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                        <div className="flex items-center gap-4">
                            {/* Avatar could go here if we want to show it explicitly, accessing user.imageUrl */}
                            <img src={user.imageUrl} alt={user.fullName || "User"} className="w-16 h-16 rounded-full border border-border" />
                            <h1 className="text-3xl font-bold text-foreground">
                                {user.fullName}
                            </h1>
                        </div>

                        <div className="flex flex-col w-full gap-3 sm:w-auto sm:flex-row">
                            <Link href={`/${lang}/create`}>
                                <Button size="sm" className="w-full gap-2 rounded-lg sm:w-auto">
                                    <Plus className="h-4 w-4" />
                                    {t.Profile.createGame}
                                </Button>
                            </Link>
                            {/* Edit Profile Link - Placeholder or Clerk Profile */}
                            {/* <Link href={`/${lang}/profile/edit`}> 
                                <Button variant="outline" size="sm" className="w-full gap-2 rounded-lg sm:w-auto">
                                    <Pencil className="h-4 w-4" />
                                    {t.Profile.editProfile}
                                </Button>
                            </Link> */}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-0">
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <span className="font-medium text-foreground">{t.Profile.email}:</span> {user.primaryEmailAddress?.emailAddress}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <span className="font-medium text-foreground">{t.Profile.gamesCreated}:</span> {games.length}
                        </div>
                    </div>
                </div>

                {/* Published Games Section */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <Rocket className="h-5 w-5" />
                        </div>
                        <h2 className="text-2xl font-bold text-foreground">{t.Profile.publishedGames}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {publishedGames.map((game) => (
                            <GameCard key={game._id} {...game} id={game._id} />
                        ))}
                        {publishedGames.length === 0 && (
                            <div className="col-span-full bg-muted/30 rounded-2xl border border-dashed border-border py-12 px-6 text-center">
                                <p className="text-muted-foreground mb-4">{t.Profile.noPublishedGames}</p>
                                <Link href={`/${lang}/create`}>
                                    <Button>
                                        Create Your First Game
                                    </Button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                {/* Draft Games Section */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
                            <FileText className="h-5 w-5" />
                        </div>
                        <h2 className="text-2xl font-bold text-foreground">{t.Profile.draftGames}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {draftGames.map((game) => (
                            <GameCard key={game._id} {...game} id={game._id} />
                        ))}
                        {draftGames.length === 0 && (
                            <div className="col-span-full bg-muted/30 rounded-2xl border border-dashed border-border py-12 px-6 text-center">
                                <p className="text-muted-foreground">{t.Profile.noDraftGames}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
