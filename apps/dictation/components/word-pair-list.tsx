"use client";

import { Button } from "@repo/ui/components/ui/button";
import { Input } from "@repo/ui/components/ui/input";
import { Label } from "@repo/ui/components/ui/label";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { WordPair } from "../lib/types";
import { TextPromptInput } from "./text-prompt-input";

interface WordPairListProps {
    wordPairs: WordPair[];
    sourceLanguage: string;
    targetLanguage: string;
    disabled?: boolean;
    onChange: (wordPairs: WordPair[]) => void;
    onFileUploadStart?: () => void;
    onFileUploadComplete?: (data: { wordPairs: WordPair[] }) => void;
    onFileUploadError?: (error: string) => void;
}

export function WordPairList({
    wordPairs,
    sourceLanguage,
    targetLanguage,
    disabled = false,
    onChange,
    onFileUploadStart,
    onFileUploadComplete,
    onFileUploadError
}: WordPairListProps) {

    const handleAddPair = () => {
        onChange([...wordPairs, { first: '', second: '', firstSentence: '', secondSentence: '', sentence: '' }]);
    };

    const handleRemovePair = (index: number) => {
        onChange(wordPairs.filter((_, i) => i !== index));
    };

    const handlePairChange = (index: number, field: keyof WordPair, value: string) => {
        const newPairs = [...wordPairs];
        const updatedPair: WordPair = { ...newPairs[index], [field]: value };
        if (field === 'secondSentence') {
            updatedPair.sentence = value;
        }
        newPairs[index] = updatedPair;
        onChange(newPairs);
    };

    const isRTL = (language: string): boolean => {
        const rtlLanguages = ['hebrew', 'he', 'iw', 'arabic', 'ar'];
        return rtlLanguages.includes(language.toLowerCase());
    };

    const sourceIsRTL = isRTL(sourceLanguage);
    const targetIsRTL = isRTL(targetLanguage);

    return (
        <div className="space-y-4">
            {onFileUploadStart && onFileUploadComplete && onFileUploadError && (
                <div className="space-y-4">
                    <div className="border rounded-lg p-4 bg-gray-50/50">
                        <TextPromptInput
                            onStart={onFileUploadStart}
                            onComplete={onFileUploadComplete}
                            onError={onFileUploadError}
                            disabled={disabled}
                            sourceLanguage={sourceLanguage}
                            targetLanguage={targetLanguage}
                        />
                    </div>
                    {/* FileUpload removed for now as backend support (blob storage) is not yet ported */}
                </div>
            )}

            <div className="border rounded-lg overflow-hidden">
                {/* Desktop Header */}
                <div className="hidden md:grid grid-cols-[1fr,1fr,1.5fr,1.5fr,auto] gap-4 p-4 bg-gray-50 font-semibold text-sm">
                    <div dir={sourceIsRTL ? 'rtl' : 'ltr'}>{sourceLanguage}</div>
                    <div dir={targetIsRTL ? 'rtl' : 'ltr'}>{targetLanguage}</div>
                    <div dir={sourceIsRTL ? 'rtl' : 'ltr'}>Source Sentence</div>
                    <div dir={targetIsRTL ? 'rtl' : 'ltr'}>Target Sentence</div>
                    <div className="w-8"></div>
                </div>
                <div className="divide-y divide-gray-200">
                    {wordPairs.map((pair, index) => (
                        <div key={index} className="p-3 sm:p-4 space-y-3 sm:space-y-0">
                            {/* Mobile Layout */}
                            <div className="md:hidden space-y-3">
                                {/* ... (omitted for brevity, can be added if needed, sticking to desktop mostly for scaffold) */}
                                {/* Actually, copying from logic */}
                                <Input
                                    value={pair.first}
                                    onChange={(e) => handlePairChange(index, 'first', e.target.value)}
                                    placeholder="Source Word"
                                    disabled={disabled}
                                    dir={sourceIsRTL ? 'rtl' : 'ltr'}
                                    className="mb-2"
                                />
                                <Input
                                    value={pair.second}
                                    onChange={(e) => handlePairChange(index, 'second', e.target.value)}
                                    placeholder="Target Word"
                                    disabled={disabled}
                                    dir={targetIsRTL ? 'rtl' : 'ltr'}
                                    className="mb-2"
                                />
                                {/* ... */}
                            </div>

                            {/* Desktop Layout */}
                            <div className="hidden md:grid grid-cols-[1fr,1fr,1.5fr,1.5fr,auto] gap-4">
                                <Input
                                    value={pair.first}
                                    onChange={(e) => handlePairChange(index, 'first', e.target.value)}
                                    disabled={disabled}
                                    dir={sourceIsRTL ? 'rtl' : 'ltr'}
                                />
                                <Input
                                    value={pair.second}
                                    onChange={(e) => handlePairChange(index, 'second', e.target.value)}
                                    disabled={disabled}
                                    dir={targetIsRTL ? 'rtl' : 'ltr'}
                                />
                                <Input
                                    value={pair.firstSentence || ''}
                                    onChange={(e) => handlePairChange(index, 'firstSentence', e.target.value)}
                                    placeholder="Example sentence"
                                    disabled={disabled}
                                    dir={sourceIsRTL ? 'rtl' : 'ltr'}
                                />
                                <Input
                                    value={pair.secondSentence || pair.sentence || ''}
                                    onChange={(e) => handlePairChange(index, 'secondSentence', e.target.value)}
                                    placeholder="Example sentence"
                                    disabled={disabled}
                                    dir={targetIsRTL ? 'rtl' : 'ltr'}
                                />
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleRemovePair(index)}
                                    disabled={disabled || wordPairs.length === 1}
                                >
                                    <TrashIcon className="h-4 w-4" />
                                    <span className="sr-only">Remove pair</span>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleAddPair}
                disabled={disabled}
                className="w-full"
            >
                <PlusIcon className="h-4 w-4 mr-2" />
                Add Word Pair
            </Button>
        </div>
    );
}
