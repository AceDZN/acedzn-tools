"use client";

import { useState } from "react";
import { useAction } from "convex/react";
import { api } from "@repo/db";
import { Button } from "@repo/ui/components/ui/button";
import { Label } from "@repo/ui/components/ui/label";
import { Textarea } from "@repo/ui/components/ui/textarea";
import { Spinner } from "@repo/ui/components/ui/spinner";
import { DocumentTextIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { WordPair } from "../lib/types";

interface TextPromptInputProps {
    onStart: () => void;
    onComplete: (data: { wordPairs: WordPair[] }) => void;
    onError: (error: string) => void;
    disabled?: boolean;
    sourceLanguage: string;
    targetLanguage: string;
}

export function TextPromptInput({
    onStart,
    onComplete,
    onError,
    disabled = false,
    sourceLanguage,
    targetLanguage,
}: TextPromptInputProps) {
    const [text, setText] = useState("");
    const [isExtracting, setIsExtracting] = useState(false);
    const extractFromText = useAction(api.dictation.extractFromText);

    const handleExtract = async () => {
        if (!text.trim()) {
            onError("Please enter some text");
            return;
        }

        setIsExtracting(true);
        onStart();

        try {
            const result = await extractFromText({
                text: text.trim(),
                sourceLanguage,
                targetLanguage,
            });

            // The action returns array of objects with first, second, etc.
            // We need to map it to WordPair if needed, but it should match.
            onComplete({ wordPairs: result as WordPair[] });
            setText("");
        } catch (err) {
            onError(err instanceof Error ? err.message : "Failed to extract word pairs");
        } finally {
            setIsExtracting(false);
        }
    };

    const isDisabled = disabled || isExtracting;

    return (
        <div className="space-y-3">
            <div className="flex items-center gap-2">
                <DocumentTextIcon className="h-5 w-5 text-indigo-600" />
                <Label htmlFor="text-prompt" className="text-sm font-medium">
                    Extract from Text
                </Label>
            </div>
            <p className="text-xs text-gray-500">
                Paste a text to automatically extract word pairs and sentences using AI.
            </p>
            <Textarea
                id="text-prompt"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text here..."
                disabled={isDisabled}
                className="min-h-[120px] resize-y"
                maxLength={10000}
            />
            <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">
                    {text.length.toLocaleString()} / 10,000 characters
                </span>
                <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleExtract}
                    disabled={isDisabled || !text.trim()}
                    className="gap-2"
                >
                    {isExtracting ? (
                        <>
                            <Spinner size="sm" />
                            <span>Extracting...</span>
                        </>
                    ) : (
                        <>
                            <SparklesIcon className="h-4 w-4" />
                            <span>Extract Word Pairs</span>
                        </>
                    )}
                </Button>
            </div>
        </div>
    );
}
