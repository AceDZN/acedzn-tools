"use client";

import { useState } from "react";
import { Button } from "@repo/ui/components/ui/button";
import { ShareIcon, CheckIcon } from "@heroicons/react/24/outline";
import { toast } from "sonner";
import { trackEvent } from "@repo/analytics";
import { EVENTS } from "../lib/analytics-events";

interface GameShareProps {
    dictationId: string;
    title: string;
}

export function GameShare({ dictationId, title }: GameShareProps) {
    const [copied, setCopied] = useState(false);

    const handleShare = async () => {
        const url = `${window.location.origin}/game/${dictationId}`;

        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setCopied(true);
            toast.success("Link copied to clipboard!");
            trackEvent(EVENTS.CLICK_SHARE, {
                dictation_id: dictationId,
                title: title
            });
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy", err);
            toast.error("Failed to copy link");
        }
    };

    return (
        <Button variant="outline" size="sm" onClick={handleShare}>
            {copied ? (
                <>
                    <CheckIcon className="w-4 h-4 mr-2" />
                    Copied
                </>
            ) : (
                <>
                    <ShareIcon className="w-4 h-4 mr-2" />
                    Share
                </>
            )}
        </Button>
    );
}
