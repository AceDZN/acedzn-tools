import Link from "next/link";
import { ProfileMenu } from "@repo/auth/profile-menu";
import { DOCS_URL } from "../lib/constants";

export function Header() {
    return (
        <header className="border-b border-gray-200 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex">
                        <Link href="/" className="flex-shrink-0 flex items-center font-bold text-xl text-gray-900">
                            AceDZN Tools
                        </Link>
                        <Link href={DOCS_URL} className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                            Docs
                        </Link>
                        <Link href="https://github.com/acedzn/acedzn-tools" target="_blank" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                            GitHub
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <ProfileMenu profileUrl="/profile" />
                    </div>
                </div>
            </div>
        </header>
    );
}
