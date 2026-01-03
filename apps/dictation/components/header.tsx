import Link from "next/link";
import { MAIN_APP_URL, DOCS_URL } from "../lib/constants";
import { ProfileMenu } from "@repo/auth/profile-menu";
import { NotificationCenter } from "./notification-center";

export function Header() {
    return (
        <header className="border-b border-gray-200 bg-white relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex">
                        <Link href="/" className="flex-shrink-0 flex items-center font-bold text-xl text-gray-900">
                            AceDZN Dictation
                        </Link>
                        <div className="hidden sm:ms-6 sm:flex sm:space-x-8">
                            <Link href={MAIN_APP_URL} className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                Web App
                            </Link>
                            <Link href={DOCS_URL} className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                Docs
                            </Link>
                            <Link href="https://github.com/acedzn/acedzn-tools" target="_blank" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                GitHub
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <NotificationCenter />
                        <ProfileMenu profileUrl="/settings" />
                    </div>
                </div>
            </div>
        </header>
    );
}
