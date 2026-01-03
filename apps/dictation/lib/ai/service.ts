
import OpenAI from "openai";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function generateContent(args: {
    topic: string;
    sourceLanguage: string;
    targetLanguage: string;
    model: string;
    amount?: number;
}) {
    const count = args.amount || 5;
    const prompt = `Generate ${count} word pairs and sentences for a dictation game.
    Topic: "${args.topic}"
    Source Language: ${args.sourceLanguage} (term 1)
    Target Language: ${args.targetLanguage} (term 2)
    
    Return ONLY a JSON object with this structure. Ensure ALL fields are populated with meaningful content.
    {
        "title": "A creative title for the dictation about the topic",
        "description": "A short, engaging description of what this dictation covers",
        "wordPairs": [
            {
                "first": "word in source language",
                "second": "word in target (translated)",
                "firstSentence": "sentence using the first word in source language",
                "secondSentence": "sentence using the second word in target language",
                "sentence": "context sentence (can be same as secondSentence)"
            }
        ]
    }
    `;

    let resultText = "";

    if (args.model.toLowerCase().includes("gemini")) {
        const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || process.env.GOOGLE_API_KEY || "");
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });
        const result = await model.generateContent(prompt);
        resultText = result.response.text();
    } else {
        const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
        const completion = await openai.chat.completions.create({
            messages: [{ role: "user", content: prompt }],
            model: "gpt-4o-mini",
            response_format: { type: "json_object" },
        });
        resultText = completion.choices[0].message.content || "[]";
    }

    // Clean up markdown code blocks if present
    resultText = resultText.replace(/```json/g, "").replace(/```/g, "").trim();

    try {
        const parsed = JSON.parse(resultText);
        if (parsed.wordPairs && Array.isArray(parsed.wordPairs)) return parsed;
        if (parsed.data && parsed.data.wordPairs) return parsed.data;
        if (Array.isArray(parsed)) return { title: args.topic, description: "", wordPairs: parsed };
        return { title: args.topic, description: "", wordPairs: [] };
    } catch (e) {
        console.error("Failed to parse AI response", resultText);
        throw new Error("Failed to generate dictation content");
    }
}

export async function extractContent(args: {
    text?: string;
    image?: string; // base64 string
    sourceLanguage: string;
    targetLanguage: string;
    model?: string;
}) {
    const isImage = !!args.image;
    const prompt = `Extract word pairs from the provided ${isImage ? "image" : "text"}.
    Source Language: ${args.sourceLanguage} (term 1)
    Target Language: ${args.targetLanguage} (term 2)
    
    Return ONLY a JSON object with this structure:
    {
        "title": "A suitable title for the content",
        "description": "Brief description of the content",
        "wordPairs": [
            {
                "first": "word in source language",
                "second": "word in target (translated)",
                "firstSentence": "sentence using first word",
                "secondSentence": "sentence using second word",
                "sentence": "context sentence in target language"
            }
        ]
    }

    ${!isImage ? `Text:\n"${args.text}"` : ""}
    `;

    let resultText = "";

    // Default to Gemini for images if not specified
    const modelName = args.model || (isImage ? "gemini-2.5-flash-lite" : "gemini-2.5-flash-lite");

    if (modelName.toLowerCase().includes("gemini")) {
        const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || process.env.GOOGLE_API_KEY || "");
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

        let result;
        if (isImage && args.image) {
            // Remove data prefix if present (e.g. data:image/png;base64,)
            const base64Data = args.image.split(',')[1] || args.image;
            const imagePart = {
                inlineData: {
                    data: base64Data,
                    mimeType: "image/jpeg", // Gemini is flexible, or parse from input
                },
            };
            result = await model.generateContent([prompt, imagePart]);
        } else {
            result = await model.generateContent(prompt);
        }
        resultText = result.response.text();
    } else {
        const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

        if (isImage && args.image) {
            // OpenAI Vision
            const completion = await openai.chat.completions.create({
                messages: [
                    {
                        role: "user",
                        content: [
                            { type: "text", text: prompt },
                            { type: "image_url", image_url: { url: args.image } }
                        ]
                    }
                ],
                model: "gpt-4o", // Vision require 4o
                max_tokens: 1000,
            });
            resultText = completion.choices[0]?.message?.content || "[]";
        } else {
            const completion = await openai.chat.completions.create({
                messages: [{ role: "user", content: prompt }],
                model: "gpt-4o-mini",
                response_format: { type: "json_object" },
            });
            resultText = completion.choices[0]?.message?.content || "[]";
        }
    }

    resultText = resultText.replace(/```json/g, "").replace(/```/g, "").trim();

    try {
        const parsed = JSON.parse(resultText);
        if (parsed.wordPairs && Array.isArray(parsed.wordPairs)) return parsed;
        if (parsed.data && parsed.data.wordPairs) return parsed.data;
        if (Array.isArray(parsed)) return { title: "Extracted Content", description: "", wordPairs: parsed };
        return { title: "Extracted Content", description: "", wordPairs: [] };
    } catch (e) {
        console.error("Failed to parse AI response", resultText);
        throw new Error("Failed to extract content");
    }
}
