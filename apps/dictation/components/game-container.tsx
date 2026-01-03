"use client";

import { useMemo, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { DictationGame } from '../lib/types'
import { Button } from '@repo/ui/components/ui/button'
import { WordPairDisplay } from './word-pair-display'
import { BoltIcon, EyeIcon, EyeSlashIcon, PencilIcon, QuestionMarkCircleIcon, ArrowPathIcon, RectangleStackIcon } from '@heroicons/react/24/outline'
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@repo/ui/components/ui/tooltip"
import { getDirectedGame, type LanguageDirection } from '../lib/language-direction'

interface GameContainerProps {
    game: DictationGame
}

export function GameContainer({ game }: GameContainerProps) {
    const router = useRouter()
    const params = useParams()
    const lang = params.lang as string

    const [hideExampleSentences, setHideExampleSentences] = useState(true)
    const [shuffleWords, setShuffleWords] = useState(true)
    const [languageDirection, setLanguageDirection] = useState<LanguageDirection>('forward')

    const activeGame = useMemo(
        () => getDirectedGame(game, languageDirection),
        [game, languageDirection]
    )
    const buildGameUrl = (variant: 'writer-game' | 'quiz-game' | 'archery-game' | 'practice-cards') => {
        const directionParam = `direction=${languageDirection}`
        const hideParam = `hideExamples=${hideExampleSentences.toString()}`
        const shuffleParam = `shuffle=${shuffleWords.toString()}`
        return `/${lang}/game/${game._id}/${variant}?${directionParam}&${hideParam}&${shuffleParam}`
    }


    const handleWriterGameStart = () => {
        router.push(buildGameUrl('writer-game'))
    }

    const handleQuizGameStart = () => {
        router.push(buildGameUrl('quiz-game'))
    }

    const handleArcheryGameStart = () => {
        router.push(buildGameUrl('archery-game'))
    }

    const handleCardsGameStart = () => {
        router.push(buildGameUrl('practice-cards'))
    }

    const forwardLabel = `${game.sourceLanguage} → ${game.targetLanguage}`
    const reverseLabel = `${game.targetLanguage} → ${game.sourceLanguage}`

    const formatDate = (millis?: number) => {
        if (!millis) return ''
        try {
            const d = new Date(millis)
            const day = String(d.getDate()).padStart(2, '0')
            const month = String(d.getMonth() + 1).padStart(2, '0')
            const year = String(d.getFullYear()).slice(-2)
            return `${day}/${month}/${year}`
        } catch {
            return ''
        }
    }

    return (
        <div className="max-w-2xl mx-auto">
            <div className="mb-6">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-center" dir="auto">{game.title}</h1>
                {game._creationTime && (
                    <p className="text-sm sm:text-base text-gray-500 text-center">{formatDate(game._creationTime)}</p>
                )}
            </div>
            <div className="flex flex-col gap-4 mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex-1">
                        <p className="text-xs sm:text-sm font-medium text-gray-700 mb-2">Direction</p>
                        <div className="inline-flex rounded-full bg-gray-100 p-1 w-full sm:w-auto">
                            <Button
                                type="button"
                                size="sm"
                                variant={languageDirection === 'forward' ? 'default' : 'ghost'}
                                className="rounded-full px-3 sm:px-4 text-xs sm:text-sm flex-1 sm:flex-initial"
                                onClick={() => setLanguageDirection('forward')}
                            >
                                {forwardLabel}
                            </Button>
                            <Button
                                type="button"
                                size="sm"
                                variant={languageDirection === 'reverse' ? 'default' : 'ghost'}
                                className="rounded-full px-3 sm:px-4 text-xs sm:text-sm flex-1 sm:flex-initial"
                                onClick={() => setLanguageDirection('reverse')}
                            >
                                {reverseLabel}
                            </Button>
                        </div>
                    </div>
                    <div className="flex justify-start sm:justify-end gap-2">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-9 w-9 sm:h-10 sm:w-10"
                                        onClick={() => setShuffleWords(prev => !prev)}
                                    >
                                        <ArrowPathIcon className={`h-4 w-4 sm:h-5 sm:w-5 ${shuffleWords ? 'text-indigo-600' : 'text-gray-400'}`} />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    {shuffleWords ? "Disable Shuffle" : "Enable Shuffle"}
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-9 w-9 sm:h-10 sm:w-10"
                                        onClick={() => setHideExampleSentences(prev => !prev)}
                                    >
                                        {hideExampleSentences ? (
                                            <EyeIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                                        ) : (
                                            <EyeSlashIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                                        )}
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    {hideExampleSentences ? "Show Examples" : "Hide Examples"}
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>
            </div>
            <WordPairDisplay
                wordPairs={activeGame.wordPairs}
                hideSentences={hideExampleSentences}
                sourceLanguage={activeGame.sourceLanguage}
                targetLanguage={activeGame.targetLanguage}
            />
            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-full mx-auto">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                size="lg"
                                onClick={handleWriterGameStart}
                                className="px-4 sm:px-6 md:px-8 flex items-center justify-center text-sm sm:text-base"
                            >
                                <PencilIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                Writer
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            Start Writer Game
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                size="lg"
                                onClick={handleQuizGameStart}
                                className="px-4 sm:px-6 md:px-8 flex items-center justify-center text-sm sm:text-base"
                            >
                                <QuestionMarkCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                Quiz
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            Start Quiz Game
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                size="lg"
                                onClick={handleArcheryGameStart}
                                className="px-4 sm:px-6 md:px-8 flex items-center justify-center text-sm sm:text-base"
                            >
                                <BoltIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                Archery
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            Start Archery Game
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                size="lg"
                                onClick={handleCardsGameStart}
                                className="px-4 sm:px-6 md:px-8 flex items-center justify-center text-sm sm:text-base"
                            >
                                <RectangleStackIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                Cards
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            Start Flashcards
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </div>
    )
}
