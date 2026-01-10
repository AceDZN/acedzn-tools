import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ name: string }> }
) {
    const { name } = await params;

    // Sanitize the name to prevent directory traversal
    const sanitizedName = name.replace(/[^a-zA-Z0-9-]/g, "");
    const fileName = `${sanitizedName}.svg`;
    const iconsDir = path.join(process.cwd(), "public", "icons");
    const filePath = path.join(iconsDir, fileName);

    // Ensure public/icons directory exists
    if (!fs.existsSync(iconsDir)) {
        fs.mkdirSync(iconsDir, { recursive: true });
    }

    // 1. Check if file exists locally
    if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        return new NextResponse(fileContent, {
            headers: {
                "Content-Type": "image/svg+xml",
                "Cache-Control": "public, max-age=31536000, immutable",
            },
        });
    }

    // 2. If not, fetch from Iconify (fluent-emoji)
    try {
        const remoteUrl = `https://api.iconify.design/fluent-emoji/${fileName}`;
        console.log(`[SmartIcon] Downloading: ${remoteUrl}`);

        const response = await fetch(remoteUrl);

        if (!response.ok) {
            return new NextResponse("Icon not found", { status: 404 });
        }

        const svgContent = await response.text();

        // 3. Save to local filesystem (Development Mode feature mostly)
        // In production (Vercel), this might fail or be ephemeral, but that's acceptable for this use case
        // as we intend to populate the repo during dev.
        try {
            fs.writeFileSync(filePath, svgContent);
            console.log(`[SmartIcon] Saved to: ${filePath}`);
        } catch (writeError) {
            console.error("[SmartIcon] Failed to write file:", writeError);
        }

        return new NextResponse(svgContent, {
            headers: {
                "Content-Type": "image/svg+xml",
                "Cache-Control": "public, max-age=31536000, immutable",
            },
        });

    } catch (error) {
        console.error("[SmartIcon] Error fetching icon:", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
