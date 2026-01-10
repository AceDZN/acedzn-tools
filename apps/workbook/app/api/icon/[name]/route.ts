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
    const svgFileName = `${sanitizedName}.svg`;
    const pngFileName = `${sanitizedName}.png`;
    const iconsDir = path.join(process.cwd(), "public", "icons");

    const svgFilePath = path.join(iconsDir, svgFileName);
    const pngFilePath = path.join(iconsDir, pngFileName);

    // Ensure public/icons directory exists
    if (!fs.existsSync(iconsDir)) {
        fs.mkdirSync(iconsDir, { recursive: true });
    }

    // 1. Check if SVG exists locally
    if (fs.existsSync(svgFilePath)) {
        const fileContent = fs.readFileSync(svgFilePath, "utf-8");
        return new NextResponse(fileContent, {
            headers: {
                "Content-Type": "image/svg+xml",
                "Cache-Control": "public, max-age=31536000, immutable",
            },
        });
    }

    // 2. Check if PNG exists locally (Fallback)
    if (fs.existsSync(pngFilePath)) {
        const fileBuffer = fs.readFileSync(pngFilePath);
        return new NextResponse(fileBuffer, {
            headers: {
                "Content-Type": "image/png",
                "Cache-Control": "public, max-age=31536000, immutable",
            },
        });
    }

    // 3. If not, fetch from Iconify (fluent-emoji)
    try {
        const remoteUrl = `https://api.iconify.design/fluent-emoji/${svgFileName}`;
        console.log(`[SmartIcon] Downloading: ${remoteUrl}`);

        const response = await fetch(remoteUrl);

        if (!response.ok) {
            return new NextResponse("Icon not found", { status: 404 });
        }

        const svgContent = await response.text();

        // 4. Save to local filesystem (Development Mode property)
        try {
            fs.writeFileSync(svgFilePath, svgContent);
            console.log(`[SmartIcon] Saved to: ${svgFilePath}`);
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
