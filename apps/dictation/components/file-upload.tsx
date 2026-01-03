"use client";

import { useState, useRef } from "react";
import { Button } from "@repo/ui/components/ui/button";
import { Spinner } from "@repo/ui/components/ui/spinner";
import { CloudArrowUpIcon, DocumentTextIcon } from "@heroicons/react/24/outline";
import { useDictionary } from "./dictionary-provider";
import { WordPair } from "../lib/types";
import { toast } from "sonner";

interface FileUploadProps {
    onStart: () => void;
    onComplete: (data: { title?: string, description?: string, wordPairs: WordPair[] }) => void;
    onError: (error: string) => void;
    disabled?: boolean;
    sourceLanguage: string;
    targetLanguage: string;
}

export function FileUpload({
    onStart,
    onComplete,
    onError,
    disabled = false,
    sourceLanguage,
    targetLanguage,
}: FileUploadProps) {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isUploading, setIsUploading] = useState(false);
    const dict = useDictionary();
    const t = (dict as any)?.Dictation?.form;
    const tWizard = (dict as any)?.Dictation?.wizard;

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        // Reset input value so same file can be selected again if needed
        event.target.value = '';

        const isImage = file.type.startsWith('image/');
        const isText = file.type.startsWith('text/') || file.name.endsWith('.txt') || file.name.endsWith('.md');

        if (!isImage && !isText) {
            onError(t?.uploadFileError || "Please upload a text file or an image");
            return;
        }

        setIsUploading(true);
        onStart();

        try {
            let payload: any = {
                sourceLanguage,
                targetLanguage,
            };

            if (isImage) {
                const buffer = await file.arrayBuffer();
                const base64 = Buffer.from(buffer).toString('base64');
                payload.image = `data:${file.type};base64,${base64}`;
            } else {
                const text = await file.text();
                if (!text.trim()) throw new Error(t?.fileEmptyError || "File is empty");
                payload.text = text.trim();
            }

            const response = await fetch('/api/dictation/extract', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const errorText = await response.text().catch(() => "Unknown error");
                throw new Error(errorText || t?.extractContentError || "Failed to extract content");
            }

            const result = await response.json();
            onComplete({
                title: result.title,
                description: result.description,
                wordPairs: result.wordPairs as WordPair[]
            });
            toast.success(t?.extractedWordPairsSuccess?.replace('{count}', result.wordPairs?.length || 0) || `Extracted ${result.wordPairs?.length || 0} word pairs from file`);

        } catch (err) {
            console.error(err);
            onError(err instanceof Error ? err.message : (t?.processFileError || "Failed to process file"));
        } finally {
            setIsUploading(false);
        }
    };

    const isDisabled = disabled || isUploading;

    return (
        <div className="space-y-3">
            <div className="flex items-center gap-2">
                <CloudArrowUpIcon className="h-5 w-5 text-indigo-600" />
                <span className="text-sm font-medium text-gray-700">
                    {t?.uploadWordPairs || "Upload File or Image"}
                </span>
            </div>
            <p className="text-xs text-gray-500">
                {tWizard?.uploadImageDescription || "Upload a text file or image to automatically extract word pairs."}
            </p>

            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".txt,.md,text/*,image/*"
                className="hidden"
                disabled={isDisabled}
            />

            <Button
                type="button"
                variant="outline"
                className="w-full h-24 border-dashed border-2 flex flex-col gap-2 hover:bg-gray-50 hover:border-indigo-300 transition-colors"
                onClick={() => fileInputRef.current?.click()}
                disabled={isDisabled}
            >
                {isUploading ? (
                    <Spinner />
                ) : (
                    <>
                        <DocumentTextIcon className="h-8 w-8 text-gray-400" />
                        <span className="text-sm text-gray-600">Click to select file</span>
                    </>
                )}
            </Button>
        </div>
    );
}
