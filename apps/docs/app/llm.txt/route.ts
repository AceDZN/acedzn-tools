import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET() {
    const content = `
# AceDZN Documentation

Documentation for AceDZN Tools and APIs.

## Sections

- Getting Started
- API Reference
- Guides

## Structure

- /: Home page
- /en: English documentation
- /he: Hebrew documentation

## Contact

For more information, visit https://docs.acedzn.dev
  `.trim();

    return new NextResponse(content, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
        },
    });
}
