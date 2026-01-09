export type SpanStyle = {
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strikethrough?: boolean;
    code?: boolean;
    color?: string; // e.g. "red", "blue-500", or hex
    highlight?: string; // e.g. "yellow"
};

export type SpanBlock = {
    type: "span";
    content: string;
    style?: SpanStyle;
};

/**
 * Parses a string containing merge tags like {b}bold{/b} into an array of SpanBlocks.
 *
 * Supported tags:
 * - {b}...{/b} -> bold
 * - {i}...{/i} -> italic
 * - {u}...{/u} -> underline
 * - {s}...{/s} -> strikethrough
 * - {code}...{/code} -> monospace
 * - {color:XXX}...{/color} -> color
 * - {highlight:XXX}...{/highlight} -> background color
 *
 * @param text The input string
 * @returns Array of SpanBlocks
 */
export function parseMergeTags(text: string): SpanBlock[] {
    if (!text) return [];

    const segments: SpanBlock[] = [];
    let currentIndex = 0;

    // Regex to match tags: {tag} or {tag:value} or {/tag}
    // Captures: 1=closing slash (optional), 2=tag name, 3=value (optional)
    const tagRegex = /\{(\/)?([a-z]+)(?::([^}]+))?\}/g;

    // Stack to keep track of active styles
    // Each item is the cumulative style object at that level
    const styleStack: SpanStyle[] = [{}];

    let match;
    while ((match = tagRegex.exec(text)) !== null) {
        const tagIndex = match.index;
        const tagFull = match[0];
        const isClosing = !!match[1];
        const tagName = match[2];
        const tagValue = match[3];

        // Push preceding text as a span with current styles
        if (tagIndex > currentIndex) {
            const content = text.slice(currentIndex, tagIndex);
            if (content.length > 0) {
                segments.push({
                    type: "span",
                    content,
                    style: { ...styleStack[styleStack.length - 1] }
                });
            }
        }

        if (isClosing) {
            // Closing tag: pop from stack if it matches the current expected style change
            // For simplicity/robustness, we just pop the last style if it's not the root
            if (styleStack.length > 1) {
                // In a more strict parser, we might verify we are closing the specific tag
                // checking tagName against strict logic, but for now we trust the nesting or simple pop
                // A simple improvement: map tag to style key and check
                styleStack.pop();
                // If we wanted to be stricter, we'd verify the top of stack has the style implied by tagName
            }
        } else {
            // Opening tag: push new style to stack
            const currentStyle = styleStack[styleStack.length - 1];
            const newStyle = { ...currentStyle };

            switch (tagName) {
                case "b": newStyle.bold = true; break;
                case "i": newStyle.italic = true; break;
                case "u": newStyle.underline = true; break;
                case "s": newStyle.strikethrough = true; break;
                case "code": newStyle.code = true; break;
                case "color": if (tagValue) newStyle.color = tagValue; break;
                case "highlight": if (tagValue) newStyle.highlight = tagValue || "yellow"; break;
            }
            styleStack.push(newStyle);
        }

        currentIndex = tagIndex + tagFull.length;
    }

    // Push remaining text
    if (currentIndex < text.length) {
        segments.push({
            type: "span",
            content: text.slice(currentIndex),
            style: { ...styleStack[styleStack.length - 1] }
        });
    }

    return cleanSegments(segments);
}

// Merge adjacent segments with identical styles and remove empty ones
function cleanSegments(segments: SpanBlock[]): SpanBlock[] {
    const cleaned: SpanBlock[] = [];

    for (const seg of segments) {
        if (!seg.content) continue;

        if (cleaned.length > 0) {
            const last = cleaned[cleaned.length - 1];
            if (stylesEqual(last.style, seg.style)) {
                last.content += seg.content;
                continue;
            }
        }
        cleaned.push(seg);
    }
    return cleaned;
}

function stylesEqual(a: SpanStyle = {}, b: SpanStyle = {}): boolean {
    const keysA = Object.keys(a).sort();
    const keysB = Object.keys(b).sort();
    if (keysA.length !== keysB.length) return false;

    for (const key of keysA) {
        // @ts-ignore
        if (a[key] !== b[key]) return false;
    }
    return true;
}
