"use client";

import { useCallback, useEffect, useMemo, useState } from 'react'
import { DictationGame, WordPair } from '../lib/types'
import { getFirstSentence, getSecondSentence } from '../lib/language-direction'
import { Button } from '@repo/ui/components/ui/button'
import { EyeIcon, EyeSlashIcon, ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { useTTSPlayer } from '../hooks/use-tts-player'
import { getLanguageBCP47Tag } from '../lib/language-tags'

interface CardsGameViewProps {
    game: DictationGame
    onGameEnd: () => void
    hideExampleSentences?: boolean
    onToggleExampleSentences?: () => void
    shuffleWords?: boolean
}

export function CardsGameView({
    game,
    onGameEnd,
    hideExampleSentences = false,
    onToggleExampleSentences,
    shuffleWords = true,
}: CardsGameViewProps) {
    const deck = useMemo(() => {
        const pairs = [...game.wordPairs]
        return shuffleWords ? pairs.sort(() => Math.random() - 0.5) : pairs
    }, [game.wordPairs, shuffleWords])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isFlipped, setIsFlipped] = useState(false)
    const [isComplete, setIsComplete] = useState(false)

    const handleFlip = useCallback(() => {
        setIsFlipped(prev => !prev)
    }, [])

    const handleNext = useCallback(() => {
        if (!deck.length) {
            return
        }
        if (currentIndex >= deck.length - 1) {
            setIsComplete(true)
        } else {
            setCurrentIndex(prev => prev + 1)
        }
        setIsFlipped(false)
    }, [currentIndex, deck.length])

    const handlePrev = useCallback(() => {
        if (!deck.length) {
            return
        }
        setCurrentIndex(prev => (prev === 0 ? deck.length - 1 : prev - 1))
        setIsFlipped(false)
    }, [deck.length])

    const handleRestart = useCallback(() => {
        setCurrentIndex(0)
        setIsFlipped(false)
        setIsComplete(false)
    }, [])

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowRight') {
                event.preventDefault()
                handleNext()
            } else if (event.key === 'ArrowLeft') {
                event.preventDefault()
                handlePrev()
            } else if (event.key === ' ' || event.key === 'Spacebar') {
                event.preventDefault()
                handleFlip()
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [handleFlip, handleNext, handlePrev])

    const currentPair = deck[currentIndex] as WordPair

    const sourceLanguageTag = useMemo(
        () => getLanguageBCP47Tag(game.sourceLanguage),
        [game.sourceLanguage],
    )
    const targetLanguageTag = useMemo(
        () => getLanguageBCP47Tag(game.targetLanguage),
        [game.targetLanguage],
    )

    const buildSpeechContent = (word?: string, sentence?: string) => {
        if (!word?.trim()) {
            return sentence?.trim()
        }
        return sentence?.trim() ? `${word} - ${sentence}` : word
    }

    const frontSentence = getFirstSentence(currentPair)
    const backSentence = getSecondSentence(currentPair)
    const frontSpeechText = buildSpeechContent(currentPair?.first, frontSentence)
    const backSpeechText = buildSpeechContent(currentPair?.second, backSentence)

    // Using any for voiceId if undefined
    const speakFrontWord = useTTSPlayer({
        text: frontSpeechText,
        fallbackUrl: currentPair?.firstAudioUrl,
        lang: sourceLanguageTag,
        disableSpeech: true,
    })

    const speakBackWord = useTTSPlayer({
        text: backSpeechText,
        fallbackUrl: currentPair?.secondAudioUrl,
        lang: targetLanguageTag,
        disableSpeech: true,
    })

    useEffect(() => {
        if (!currentPair) {
            return
        }

        if (isFlipped) {
            speakBackWord()
        } else {
            speakFrontWord()
        }
    }, [currentPair, isFlipped, speakBackWord, speakFrontWord])

    if (!deck.length) {
        return (
            <div className='flex flex-col items-center justify-center space-y-6 p-8'>
                <h2 className='text-2xl font-semibold text-gray-800'>
                    No Cards Available
                </h2>
                <p className='text-gray-600 text-center max-w-md'>
                    This dictation appears to be empty.
                </p>
                <Button onClick={onGameEnd}>
                    Exit
                </Button>
            </div>
        )
    }

    if (isComplete) {
        return (
            <div className='flex flex-col items-center justify-center space-y-6 p-8 text-center'>
                <h2 className='text-3xl font-semibold text-indigo-600'>
                    Practice Complete!
                </h2>
                <p className='text-gray-600 max-w-md'>
                    You have reviewed all the cards. Great job!
                </p>
                <div className='flex flex-col gap-4 sm:flex-row'>
                    <Button onClick={handleRestart}>
                        Restart
                    </Button>
                    <Button variant='outline' onClick={onGameEnd}>
                        Exit
                    </Button>
                </div>
            </div>
        )
    }

    const progressLabel = `Card ${currentIndex + 1} of ${deck.length}`

    return (
        <div className='max-w-3xl mx-auto py-6 space-y-8 min-h-[60vh]'>
            <div className='flex flex-col items-center gap-2 text-center'>
                <p className='text-sm uppercase tracking-wide text-indigo-500 font-semibold'>
                    {progressLabel}
                </p>
                <h1 className='text-2xl font-bold text-gray-900'>
                    {game.title}
                </h1>
                <p className='text-gray-500'>
                    Tap card or Spacebar to flip. Arrows to navigate.
                </p>
            </div>

            <div className='relative flex flex-col gap-4 items-center'>
                {onToggleExampleSentences && (
                    <Button
                        variant='ghost'
                        size='icon'
                        onClick={onToggleExampleSentences}
                        title={hideExampleSentences ? "Show Examples" : "Hide Examples"}
                        className='absolute -top-10 right-0'
                    >
                        {hideExampleSentences ? (
                            <EyeSlashIcon className='h-5 w-5' />
                        ) : (
                            <EyeIcon className='h-5 w-5' />
                        )}
                    </Button>
                )}

                <div className='w-full max-w-xl mx-auto [perspective:1200px]'>
                    <button
                        type='button'
                        onClick={handleFlip}
                        className={`relative w-full h-[300px] md:h-[420px] focus:outline-none`}
                    >
                        <div
                            className='relative w-full h-full transition-transform duration-500 ease-out [transform-style:preserve-3d]'
                            style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
                        >
                            <div
                                className='absolute inset-0 rounded-3xl bg-white border border-gray-200 shadow-lg p-8 flex flex-col justify-between'
                                style={{ backfaceVisibility: 'hidden' }}
                            >
                                <div className='text-sm font-semibold text-indigo-500 uppercase tracking-wide'>
                                    {game.sourceLanguage}
                                </div>
                                <div className='space-y-4'>
                                    <p className='text-4xl font-bold text-gray-900 break-words'>
                                        {currentPair.first}
                                    </p>
                                    {!hideExampleSentences && <p
                                        className={`text-lg text-gray-500 transition-opacity duration-300 ${hideExampleSentences ? 'opacity-0' : 'opacity-100'
                                            }`}
                                    >
                                        {frontSentence || "No example sentence"}
                                    </p>}
                                </div>
                                <div className='text-sm text-gray-400'>
                                    Tap to reveal
                                </div>
                            </div>

                            <div
                                className='absolute inset-0 rounded-3xl bg-indigo-600 text-white shadow-xl p-8 flex flex-col justify-between'
                                style={{
                                    transform: 'rotateY(180deg)',
                                    backfaceVisibility: 'hidden',
                                }}
                            >
                                <div className='text-sm font-semibold uppercase tracking-wide'>
                                    {game.targetLanguage}
                                </div>
                                <div className='space-y-4'>
                                    <p className='text-4xl font-bold break-words'>
                                        {currentPair.second}
                                    </p>
                                    {!hideExampleSentences && <p
                                        className={`text-lg text-indigo-100 transition-opacity duration-300 ${hideExampleSentences ? 'opacity-0' : 'opacity-100'
                                            }`}
                                    >
                                        {backSentence || "No example sentence"}
                                    </p>}
                                </div>
                                <div className='text-sm text-indigo-200'>
                                    Tap to hide
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
            </div>

            <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
                <div className='flex gap-2'>
                    <Button
                        variant='outline'
                        onClick={handlePrev}
                        disabled={deck.length < 2}
                        className='flex items-center gap-2'
                    >
                        <ArrowLeftIcon className='h-5 w-5' />
                        Previous
                    </Button>
                    <Button
                        onClick={handleNext}
                        className='flex items-center gap-2'
                    >
                        {currentIndex === deck.length - 1 ? "Finish" : "Next"}
                        <ArrowRightIcon className='h-5 w-5' />
                    </Button>
                </div>
                <div className='text-sm text-gray-500 text-center sm:text-right'>
                    Use Spacebar to flip, Arrow keys to navigate
                </div>
            </div>

            <div className='flex justify-center'>
                <Button variant='ghost' onClick={handleRestart}>
                    Restart
                </Button>
            </div>
        </div>
    )
}
