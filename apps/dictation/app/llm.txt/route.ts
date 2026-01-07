import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET() {
    const content = `
# AceDZN Dictation

AceDZN Dictation is an AI-powered language learning tool.

## Features

- Create dictations from text, images, or files
- Practice listening and typing in multiple languages
- AI-generated word pairs for vocabulary expansion
- Gamified learning experience

## Structure

- /: Home page listing dictations
- /en/dictation/create: Create a new dictation (English)
- /he/dictation/create: Create a new dictation (Hebrew)
- /en/profile: User profile
- /he/profile: User profile

## Contact

For more information, visit https://dictation.acedzn.dev
  `.trim();

    return new NextResponse(content, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
        },
    });
}
