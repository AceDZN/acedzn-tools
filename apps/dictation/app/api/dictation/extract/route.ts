
import { NextResponse } from 'next/server';
import { extractContent } from '../../../../lib/ai/service';
import { auth } from '@clerk/nextjs/server';

export async function POST(req: Request) {
    const { userId } = await auth();
    if (!userId) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    try {
        const body = await req.json();
        const { text, image, sourceLanguage, targetLanguage, model } = body;

        // Validate: need either text or image
        if (!text && !image) {
            return new NextResponse('Text or Image is required', { status: 400 });
        }

        const result = await extractContent({
            text,
            image,
            sourceLanguage,
            targetLanguage,
            model
        });

        return NextResponse.json(result);
    } catch (error) {
        console.error('[DICTATION_EXTRACT]', error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
