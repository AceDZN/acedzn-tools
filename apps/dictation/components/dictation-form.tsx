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

import { useDictionary } from "./dictionary-provider";
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
    const createDictation = useAction(api.dictation.createDictation);
    // Wait, dictation.ts exported 'createDictation' as action, which calls mutation.
    // 'generateDictation' is action.

    // Actually, calling action from client is fine.
    const createAction = useAction(api.dictation.createDictation);
    const dict = useDictionary();
    const t = (dict as any)?.Dictation?.form;

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
            const response = await fetch('/api/dictation/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    topic: formData.title || "General",
                    sourceLanguage: formData.sourceLanguage,
                    targetLanguage: formData.targetLanguage,
                    model: "gpt-4o-mini",
                    amount: 5
                })
            });

            if (!response.ok) {
                const text = await response.text().catch(() => "Unknown error");
                throw new Error(text || "Failed to generate content");
            }

            const result = await response.json();

            setFormData(prev => ({
                ...prev,
                title: result.title || prev.title,
                description: result.description || prev.description,
                wordPairs: (result.wordPairs || []) as WordPair[]
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

    const handleFileUploadComplete = (data: { title?: string, description?: string, wordPairs: WordPair[] }) => {
        setFormData(prev => ({
            ...prev,
            title: data.title || prev.title,
            description: data.description || prev.description,
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
                <h2 className="text-xl font-semibold text-indigo-600">{t?.basicInfo || "Basic Info"}</h2>
                <div className="space-y-2">
                    <Label htmlFor="title">{t?.title || "Title"}</Label>
                    <Input
                        id="title"
                        value={formData.title}
                        onChange={e => setFormData({ ...formData, title: e.target.value })}
                        placeholder={t?.titlePlaceholder || "My Dictation"}
                        required
                        disabled={isLoadingState}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="description">{t?.description || "Description"}</Label>
                    <Input
                        id="description"
                        value={formData.description || ''}
                        onChange={e => setFormData({ ...formData, description: e.target.value })}
                        placeholder={t?.descriptionPlaceholder || "Optional description"}
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
                    <Label htmlFor="public">{t?.public || "Public"}</Label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <LanguageSelector
                        id="source-language"
                        label={t?.sourceLanguage || "Source Language"}
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
                            title={t?.swapLanguages || "Swap languages"}
                        >
                            <ArrowsRightLeftIcon className="h-4 w-4" />
                        </Button>
                    </div>
                    <LanguageSelector
                        id="target-language"
                        label={t?.targetLanguage || "Target Language"}
                        value={formData.targetLanguage}
                        onChange={value => setFormData({ ...formData, targetLanguage: value })}
                        excludeLanguage={formData.sourceLanguage}
                        disabled={isLoadingState}
                    />
                </div>
            </div>

            {/* Word Pairs */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-indigo-600">{t?.wordPairs || "Word Pairs"}</h2>
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
                <h2 className="text-xl font-semibold text-indigo-600">{t?.advancedOptions || "Options"}</h2>
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
                    disabled={isLoadingState}
                >
                    {isGenerating ? <Spinner size="sm" /> : (t?.populateData || "Populate with AI")}
                </Button>
                <Button
                    type="submit"
                    disabled={isLoadingState}
                    className="bg-indigo-600 text-white"
                >
                    {isSubmitting ? <Spinner size="sm" /> : (t?.createDictation || "Create Dictation")}
                </Button>
            </div>

        </form>
    )
}
