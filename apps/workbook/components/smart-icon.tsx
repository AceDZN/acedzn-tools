import Image from "next/image";
import { cn } from "@repo/ui/lib/utils";

interface SmartIconProps {
    name: string;
    alt?: string;
    className?: string;
    size?: number;
}

export const SmartIcon: React.FC<SmartIconProps> = ({
    name,
    alt,
    className,
    size = 32,
}) => {
    // If name is empty, don't render anything
    if (!name) return null;

    return (
        <div className={cn("relative flex items-center justify-center content-center", className)} style={{ width: size, height: size }}>
            <Image
                src={`/api/icon/${name}`}
                alt={alt || name}
                width={size}
                height={size}
                className="object-contain" // Preserves aspect ratio
                unoptimized // Important for SVGs since we don't need Next.js image optimization
            />
        </div>
    );
};
