"use client";

import { useClerk, useUser } from "@clerk/nextjs";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface ProfileMenuProps {
    profileUrl: string;
    signInUrl?: string;
}

export function ProfileMenu({ profileUrl, signInUrl = "/sign-in" }: ProfileMenuProps) {
    const { user, isLoaded, isSignedIn } = useUser();
    const { signOut } = useClerk();
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    if (!isLoaded) return <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse" />;

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="relative" ref={menuRef}>
            <button
                onClick={toggleMenu}
                className="flex items-center justify-center w-10 h-10 rounded-full overflow-hidden border border-gray-200 hover:border-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500"
            >
                {isSignedIn && user?.imageUrl ? (
                    <img src={user.imageUrl} alt={user.fullName || "User"} className="w-full h-full object-cover" />
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                    </svg>
                )}
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
                    {isSignedIn ? (
                        <>
                            <div className="px-4 py-3 border-b border-gray-100">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    {user.fullName || "User"}
                                </p>
                                <p className="text-xs text-gray-500 truncate">
                                    {user.primaryEmailAddress?.emailAddress}
                                </p>
                            </div>
                            <Link
                                href={profileUrl}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                onClick={() => setIsOpen(false)}
                            >
                                Profile
                            </Link>
                            <button
                                onClick={() => signOut()}
                                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                            >
                                Sign Out
                            </button>
                        </>
                    ) : (
                        <Link
                            href={signInUrl}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                            onClick={() => setIsOpen(false)}
                        >
                            Sign In
                        </Link>
                    )}
                </div>
            )}
        </div>
    );
}
