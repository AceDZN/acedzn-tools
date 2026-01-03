"use client";

import { useState, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useMutation, useAction } from "convex/react";
import { api } from "@repo/db";
import { Input } from "@repo/ui/components/ui/input";
import { Label } from "@repo/ui/components/ui/label";
import { Button } from "@repo/ui/components/ui/button";
import { Switch } from "@repo/ui/components/ui/switch";
import { Spinner } from "@repo/ui/components/ui/spinner";
import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";

import { LanguageSelector } from "./language-selector";
import { WordPairList } from "./word-pair-list";
import { AdvancedQuizOptions } from "./advanced-quiz-options";
import { WordPair, QuizParameters } from "../lib/types";

const DEFAULT_LANGUAGES = {
    source: 'Hebrew',
    target: 'English'
} as const;

interface FormData {
    id?: string;
    title: string;
    description?: string;
    sourceLanguage: string;
    targetLanguage: string;
    wordPairs: WordPair[];
    quizParameters: QuizParameters;
    isPublic: boolean;
}

export function DictationForm() {
    const router = useRouter();
    const createDictation = useAction(api.db.dictation.createDictation); // This is actually an action mock in db/convex/dictation.ts which calls mutation
    // Wait, dictation.ts exported 'createDictation' as action, which calls mutation.
    // 'generateDictation' is action.

    // Actually, calling action from client is fine.
    const createAction = useAction(api.dictation.createDictation);
    const generateAction = useAction(api.dictation.generateDictation);

    const [formData, setFormData] = useState<FormData>({
        title: '',
        description: '',
        sourceLanguage: DEFAULT_LANGUAGES.source,
        targetLanguage: DEFAULT_LANGUAGES.target,
        wordPairs: [{ first: '', second: '', firstSentence: '', secondSentence: '', sentence: '' }],
        quizParameters: {
            globalTimeLimit: 0,
            globalLivesLimit: 3,
            activityTimeLimit: 30,
            quizModeEnabled: true,
        },
        isPublic: true,
    });

    const [error, setError] = useState<string>();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);
    const [isProcessingFile, setIsProcessingFile] = useState(false);

    const handleGenerateContent = async () => {
        setIsGenerating(true);
        setError(undefined);
        try {
            const result = await generateAction({
                topic: formData.title || "General",
                sourceLanguage: formData.sourceLanguage,
                targetLanguage: formData.targetLanguage,
                model: "gpt-4o-mini", // user can select if we add UI, default for now
                amount: 5
            });
            // result is array of objects
            setFormData(prev => ({
                ...prev,
                wordPairs: result as WordPair[] // Assuming safe cast
            }));
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to generate content");
        } finally {
            setIsGenerating(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(undefined);

        try {
            await createAction({
                ...formData,
                description: formData.description || undefined,
            });
            router.push('/dashboard'); // or profile
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to create dictation");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleFileUploadStart = () => {
        setIsProcessingFile(true);
        setError(undefined);
    };

    const handleFileUploadComplete = (data: { wordPairs: WordPair[] }) => {
        setFormData(prev => ({
            ...prev,
            wordPairs: data.wordPairs
        }));
        setIsProcessingFile(false);
    };

    const handleFileUploadError = (error: string) => {
        setError(error);
        setIsProcessingFile(false);
    };

    const handleLanguageSwap = useCallback(() => {
        setFormData(prev => {
            const newWordPairs = prev.wordPairs.map(pair => {
                const firstSentence = pair.firstSentence || '';
                const secondSentence = pair.secondSentence || pair.sentence || '';
                return {
                    first: pair.second,
                    second: pair.first,
                    firstSentence: secondSentence,
                    secondSentence: firstSentence,
                    sentence: firstSentence,
                    firstAudioUrl: pair.secondAudioUrl,
                    secondAudioUrl: pair.firstAudioUrl,
                };
            });

            return {
                ...prev,
                sourceLanguage: prev.targetLanguage,
                targetLanguage: prev.sourceLanguage,
                wordPairs: newWordPairs
            };
        });
    }, []);

    const isLoadingState = isSubmitting || isGenerating || isProcessingFile;

    return (
        <form onSubmit={handleSubmit} className="space-y-8 bg-white shadow-md rounded-lg p-6">
            {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
                    {error}
                </div>
            )}

            {/* Basic Info */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-indigo-600">Basic Info</h2>
                <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                        id="title"
                        value={formData.title}
                        onChange={e => setFormData({ ...formData, title: e.target.value })}
                        placeholder="My Dictation"
                        required
                        disabled={isLoadingState}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Input
                        id="description"
                        value={formData.description || ''}
                        onChange={e => setFormData({ ...formData, description: e.target.value })}
                        placeholder="Optional description"
                        disabled={isLoadingState}
                    />
                </div>
                <div className="flex items-center space-x-2 gap-2">
                    <Switch
                        id="public"
                        checked={formData.isPublic}
                        onCheckedChange={checked => setFormData({ ...formData, isPublic: checked })}
                        disabled={isLoadingState}
                    />
                    <Label htmlFor="public">Public</Label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <LanguageSelector
                        id="source-language"
                        label="Source Language"
                        value={formData.sourceLanguage}
                        onChange={value => setFormData({ ...formData, sourceLanguage: value })}
                        excludeLanguage={formData.targetLanguage}
                        disabled={isLoadingState}
                    />
                    <div className="flex items-end justify-center">
                        <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={handleLanguageSwap}
                            disabled={isLoadingState}
                            className="mb-[2px]"
                        >
                            <ArrowsRightLeftIcon className="h-4 w-4" />
                        </Button>
                    </div>
                    <LanguageSelector
                        id="target-language"
                        label="Target Language"
                        value={formData.targetLanguage}
                        onChange={value => setFormData({ ...formData, targetLanguage: value })}
                        excludeLanguage={formData.sourceLanguage}
                        disabled={isLoadingState}
                    />
                </div>
            </div>

            {/* Word Pairs */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-indigo-600">Word Pairs</h2>
                <WordPairList
                    wordPairs={formData.wordPairs}
                    onChange={wordPairs => setFormData({ ...formData, wordPairs })}
                    sourceLanguage={formData.sourceLanguage}
                    targetLanguage={formData.targetLanguage}
                    disabled={isLoadingState}
                    onFileUploadStart={handleFileUploadStart}
                    onFileUploadComplete={handleFileUploadComplete}
                    onFileUploadError={handleFileUploadError}
                />
            </div>

            {/* Advanced Quiz Options */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-indigo-600">Options</h2>
                <AdvancedQuizOptions
                    value={formData.quizParameters}
                    onChange={quizParameters => setFormData({ ...formData, quizParameters })}
                    disabled={isLoadingState}
                />
            </div>

            <div className="flex justify-end gap-4">
                <Button
                    type="button"
                    variant="outline"
                    onClick={handleGenerateContent}
                    disabled={isLoadingState || !formData.title}
                >
                    {isGenerating ? <Spinner size="sm" /> : "Populate with AI"}
                </Button>
                <Button
                    type="submit"
                    disabled={isLoadingState}
                    className="bg-indigo-600 text-white"
                >
                    {isSubmitting ? <Spinner size="sm" /> : "Create Dictation"}
                </Button>
            </div>

        </form>
    )
}
