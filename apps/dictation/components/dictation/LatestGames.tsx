"use client";

import { GameCard } from './GameCard'
import { useQuery } from 'convex/react'
import { api } from '@repo/db'
import { useDictionary } from '../dictionary-provider';
import { createTranslator } from '@repo/i18n';

export function LatestGames() {
    const dict = useDictionary()
    const t = createTranslator(dict?.LatestGames)

    // Use Convex query directly instead of legacy fetch
    const games = useQuery(api.dictation.listDictations);

    if (games === undefined) {
        return (
            <section className="py-24 sm:py-32 relative overflow-hidden bg-gray-50">
                <div className="container mx-auto px-4 text-center">Loading...</div>
            </section>
        )
    }

    if (!games || games.length === 0) {
        return null
    }

    return (
        <section className="py-24 sm:py-32 relative overflow-hidden bg-gray-50">
            {/* Decorative dots pattern */}
            <div className="container mx-auto px-4">
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: 'radial-gradient(circle, rgba(99, 102, 241, 0.8) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                }}></div>

                <div className="mx-auto max-w-7xl md:px-6 lg:px-8 relative z-10">
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            {t('title')}
                        </h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600">
                            {t('description')}
                        </p>
                    </div>

                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {games.map((game: any) => (
                            <GameCard key={game._id} id={game._id} {...game} createdAt={game._creationTime} userId={game.userId} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
