"use client";

import { useState, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useMutation, useAction, useQuery } from "convex/react";
import { api } from "@repo/db";
import { Input } from "@repo/ui/components/ui/input";
import { Label } from "@repo/ui/components/ui/label";
import { Button } from "@repo/ui/components/ui/button";
import { Switch } from "@repo/ui/components/ui/switch";
import { Spinner } from "@repo/ui/components/ui/spinner";
import { Textarea } from "@repo/ui/components/ui/textarea";
import { ArrowsRightLeftIcon, DocumentTextIcon, SparklesIcon, CommandLineIcon, PencilIcon } from "@heroicons/react/24/outline";

import { useDictionary } from "./dictionary-provider";
import { LanguageSelector } from "./language-selector";
import { WordPairList } from "./word-pair-list";
import { AdvancedQuizOptions } from "./advanced-quiz-options";
import { WordPair, QuizParameters } from "../lib/types";
import { toast } from "sonner";

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

type InputMode = 'manual' | 'ai-prompt' | 'from-text' | 'file-upload';

export function DictationForm({ dictationId }: { dictationId?: string }) {
    const router = useRouter();
    const createAction = useAction(api.dictation.createDictation);
    const updateAction = useAction(api.dictation.updateDictation);

    // AI Actions
    const generateFromText = useAction(api.dictation.generateFromText);
    const generateFromPrompt = useAction(api.dictation.generateFromPrompt);

    const existingDictation = useQuery(api.dictation.getDictation,
        dictationId ? { dictationId: dictationId as any } : "skip"
    );

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

    const [mode, setMode] = useState<InputMode>('manual');
    const [aiInput, setAiInput] = useState('');
    const [isInitialized, setIsInitialized] = useState(false);
    const [error, setError] = useState<string>();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);

    // Populate form when data loads
    useMemo(() => {
        if (existingDictation && !isInitialized) {
            setFormData({
                id: existingDictation._id,
                title: existingDictation.title,
                description: existingDictation.description,
                sourceLanguage: existingDictation.sourceLanguage,
                targetLanguage: existingDictation.targetLanguage,
                wordPairs: existingDictation.wordPairs.map(wp => ({
                    ...wp,
                    firstSentence: wp.firstSentence || '',
                    secondSentence: wp.secondSentence || '',
                    sentence: wp.sentence || '',
                })),
                quizParameters: existingDictation.quizParameters,
                isPublic: existingDictation.isPublic,
            });
            setIsInitialized(true);
        }
    }, [existingDictation, isInitialized]);

    const handleGenerate = async () => {
        if (!aiInput.trim()) return;
        setIsGenerating(true);
        setError(undefined);

        try {
            let pairs: any[] = [];

            if (mode === 'ai-prompt') {
                pairs = await generateFromPrompt({
                    prompt: aiInput,
                    sourceLanguage: formData.sourceLanguage,
                    targetLanguage: formData.targetLanguage
                });
            } else if (mode === 'from-text') {
                pairs = await generateFromText({
                    text: aiInput,
                    sourceLanguage: formData.sourceLanguage,
                    targetLanguage: formData.targetLanguage
                });
            }

            if (pairs && pairs.length > 0) {
                setFormData(prev => ({
                    ...prev,
                    wordPairs: pairs as WordPair[]
                }));
                toast.success(`Generated ${pairs.length} word pairs`);
                setMode('manual'); // Switch back to review
            } else {
                toast.error("No pairs generated. Try a different prompt.");
            }
        } catch (err) {
            console.error(err);
            setError("Failed to generate content. Please try again.");
        } finally {
            setIsGenerating(false);
        }
    };

    const generateUploadUrl = useMutation(api.dictation.generateUploadUrl);
    const generateFromImage = useAction(api.dictation.generateFromImage);

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setIsGenerating(true);
        try {
            // Image handling
            if (file.type.startsWith('image/')) {
                // 1. Get upload URL
                const postUrl = await generateUploadUrl();

                // 2. Upload file
                const result = await fetch(postUrl, {
                    method: "POST",
                    headers: { "Content-Type": file.type },
                    body: file,
                });
                const { storageId } = await result.json();

                // 3. Generate content
                const pairs = await generateFromImage({
                    storageId,
                    mimeType: file.type,
                    sourceLanguage: formData.sourceLanguage,
                    targetLanguage: formData.targetLanguage
                });

                if (pairs && pairs.length > 0) {
                    setFormData(prev => ({ ...prev, wordPairs: pairs as WordPair[] }));
                    toast.success(`Extracted ${pairs.length} pairs from image`);
                    setMode('manual');
                } else {
                    toast.error("Could not find any words in the image.");
                }

            } else {
                // Text handling
                const text = await file.text();

                // If it's a CSV, parse it directly
                if (file.name.endsWith('.csv')) {
                    const lines = text.split('\n');
                    const pairs: WordPair[] = lines.filter(l => l.includes(',')).map(line => {
                        const [first, second, s1, s2] = line.split(',').map(s => s.trim());
                        return {
                            first: first || '',
                            second: second || '',
                            firstSentence: s1 || '',
                            secondSentence: s2 || '',
                            sentence: s1 || ''
                        };
                    });
                    if (pairs.length > 0) {
                        setFormData(prev => ({ ...prev, wordPairs: pairs }));
                        toast.success(`Parsed ${pairs.length} pairs from CSV`);
                        setMode('manual');
                    }
                } else {
                    // Treat as text content for AI extraction
                    const pairs = await generateFromText({
                        text: text,
                        sourceLanguage: formData.sourceLanguage,
                        targetLanguage: formData.targetLanguage
                    });
                    if (pairs && pairs.length > 0) {
                        setFormData(prev => ({ ...prev, wordPairs: pairs as WordPair[] }));
                        toast.success(`Extracted ${pairs.length} pairs from file`);
                        setMode('manual');
                    } else {
                        toast.error("Could not extract any words from text.");
                    }
                }
            }
        } catch (err) {
            console.error(err);
            toast.error("Failed to process file");
        } finally {
            setIsGenerating(false);
            e.target.value = ''; // Reset
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(undefined);

        try {
            if (dictationId) {
                await updateAction({
                    id: dictationId as any,
                    title: formData.title,
                    description: formData.description,
                    sourceLanguage: formData.sourceLanguage,
                    targetLanguage: formData.targetLanguage,
                    wordPairs: formData.wordPairs,
                    quizParameters: formData.quizParameters,
                    isPublic: formData.isPublic,
                });
            } else {
                await createAction({
                    title: formData.title,
                    description: formData.description || undefined,
                    sourceLanguage: formData.sourceLanguage,
                    targetLanguage: formData.targetLanguage,
                    wordPairs: formData.wordPairs,
                    quizParameters: formData.quizParameters,
                    isPublic: formData.isPublic,
                });
            }
            router.push('/dashboard');
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to save dictation");
        } finally {
            setIsSubmitting(false);
        }
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

    const isLoadingState = isSubmitting || isGenerating;

    if (dictationId && existingDictation === undefined) {
        return <div className="flex justify-center p-8"><Spinner size="lg" /></div>;
    }

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

            {/* Content Generation Modes */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-indigo-600">Content</h2>

                <div className="flex gap-2 border-b pb-2 overflow-x-auto">
                    <Button
                        type="button"
                        variant={mode === 'manual' ? 'default' : 'ghost'}
                        onClick={() => setMode('manual')}
                        size="sm"
                        className="gap-2"
                    >
                        <PencilIcon className="w-4 h-4" /> Manual
                    </Button>
                    <Button
                        type="button"
                        variant={mode === 'ai-prompt' ? 'default' : 'ghost'}
                        onClick={() => setMode('ai-prompt')}
                        size="sm"
                        className="gap-2"
                    >
                        <SparklesIcon className="w-4 h-4" /> AI Topic
                    </Button>
                    <Button
                        type="button"
                        variant={mode === 'from-text' ? 'default' : 'ghost'}
                        onClick={() => setMode('from-text')}
                        size="sm"
                        className="gap-2"
                    >
                        <DocumentTextIcon className="w-4 h-4" /> From Text
                    </Button>
                    <Button
                        type="button"
                        variant={mode === 'file-upload' ? 'default' : 'ghost'}
                        onClick={() => setMode('file-upload')}
                        size="sm"
                        className="gap-2"
                    >
                        <CommandLineIcon className="w-4 h-4" /> Upload File
                    </Button>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg border">
                    {mode === 'manual' && (
                        <WordPairList
                            wordPairs={formData.wordPairs}
                            onChange={wordPairs => setFormData({ ...formData, wordPairs })}
                            sourceLanguage={formData.sourceLanguage}
                            targetLanguage={formData.targetLanguage}
                            disabled={isLoadingState}
                        />
                    )}

                    {mode === 'ai-prompt' && (
                        <div className="space-y-4">
                            <Label>What is this dictation about?</Label>
                            <Input
                                placeholder="e.g. Travel vocabulary, Business meeting terms..."
                                value={aiInput}
                                onChange={e => setAiInput(e.target.value)}
                            />
                            <Button type="button" onClick={handleGenerate} disabled={isLoadingState || !aiInput}>
                                {isGenerating ? <Spinner size="sm" /> : "Generate Pairs"}
                            </Button>
                        </div>
                    )}

                    {mode === 'from-text' && (
                        <div className="space-y-4">
                            <Label>Paste your text here</Label>
                            <Textarea
                                placeholder="Paste a story, article, or list..."
                                className="min-h-[200px]"
                                value={aiInput}
                                onChange={e => setAiInput(e.target.value)}
                            />
                            <Button type="button" onClick={handleGenerate} disabled={isLoadingState || !aiInput}>
                                {isGenerating ? <Spinner size="sm" /> : "Extract Pairs"}
                            </Button>
                        </div>
                    )}

                    {mode === 'file-upload' && (
                        <div className="space-y-4 text-center py-8">
                            <Label className="block mb-4">Upload a .txt, .md (processed by AI) or .csv (parsed directly)</Label>
                            <div className="flex justify-center">
                                <Input
                                    type="file"
                                    accept=".txt,.md,.csv,image/*"
                                    onChange={handleFileUpload}
                                    className="max-w-xs"
                                    disabled={isLoadingState}
                                />
                            </div>
                            {isGenerating && <Spinner className="mx-auto mt-4" />}
                        </div>
                    )}
                </div>
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
                    type="submit"
                    disabled={isLoadingState}
                    className="bg-indigo-600 text-white"
                >
                    {isSubmitting ? <Spinner size="sm" /> : (dictationId ? (t?.saveChanges || "Save Changes") : (t?.createDictation || "Create Dictation"))}
                </Button>
            </div>
        </form>
    )
}
