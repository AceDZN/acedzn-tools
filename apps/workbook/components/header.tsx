import { SharedHeader } from "@repo/ui/components/shared-header";
import { DICTATION_URL, APP_URL, SITE_NAME, SUBJECTS } from "../lib/constants/global";
import { ProfileMenu } from "@repo/auth/profile-menu";
import { NotificationCenter } from "./notification-center";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@repo/ui/components/ui/dropdown-menu";
import { Button } from "@repo/ui/components/ui/button";
import { ChevronDown, BookOpen, Mic, Home, GraduationCap } from "lucide-react";
import Link from "next/link";

export function Header() {
    const navContent = (
        <nav className="hidden md:flex items-center gap-6">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-1 font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50">
                        <BookOpen className="h-4 w-4" />
                        מקצועות
                        <ChevronDown className="h-4 w-4 opacity-50" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                    {SUBJECTS.map((subject) => (
                        <DropdownMenuItem key={subject.id} asChild>
                            <Link href={`/${subject.id}`} className="flex items-center gap-2 w-full cursor-pointer">
                                <span className="font-medium">{subject.title}</span>
                            </Link>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>

            <Link
                href={APP_URL}
                className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                target="_blank"
            >
                <Home className="h-4 w-4" />
                אתר ראשי
            </Link>

            <Link
                href={DICTATION_URL}
                className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                target="_blank"
            >
                <Mic className="h-4 w-4" />
                הכתבות
            </Link>
        </nav>
    );

    return (
        <SharedHeader
            className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md"
            title={
                <>
                    <GraduationCap className="h-6 w-6 text-blue-600" />
                    <span>{SITE_NAME}</span>
                </>
            }
            navContent={navContent}
            actions={
                <>
                    <NotificationCenter />
                    <ProfileMenu profileUrl="/profile" />
                </>
            }
        />
    );
}
