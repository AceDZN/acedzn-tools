
import { NextResponse } from 'next/server';
import { generateContent } from '../../../../lib/ai/service';
import { auth } from '@clerk/nextjs/server';

export async function POST(req: Request) {
    const { userId } = await auth();
    if (!userId) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    try {
        const body = await req.json();
        const { topic, sourceLanguage, targetLanguage, model, amount } = body;

        const result = await generateContent({
            topic,
            sourceLanguage,
            targetLanguage,
            model,
            amount: Number(amount) || 5
        });

        return NextResponse.json(result);
    } catch (error) {
        console.error('[DICTATION_GENERATE]', error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
