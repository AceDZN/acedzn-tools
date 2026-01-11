import Link from 'next/link'
import { cn } from "../lib/utils";

export interface HeaderLink {
    label: string;
    href: string;
    target?: string;
    active?: boolean;
}

export interface SharedHeaderProps {
    title: React.ReactNode;
    logoHref?: string;
    links?: HeaderLink[];
    navContent?: React.ReactNode;
    actions?: React.ReactNode;
    className?: string;
}

export function SharedHeader({
    title,
    logoHref = "/",
    links = [],
    navContent,
    actions,
    className
}: SharedHeaderProps) {
    return (
        <header className={cn("border-b border-gray-200 bg-white relative z-10", className)}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center gap-8">
                        <Link href={logoHref} className="flex-shrink-0 flex items-center gap-2 font-bold text-xl text-gray-900 transition-colors hover:text-blue-600">
                            {title}
                        </Link>

                        {navContent ? (
                            navContent
                        ) : (
                            <nav className="hidden sm:flex sm:space-x-8">
                                {links.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        target={link.target}
                                        className={cn(
                                            "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors",
                                            link.active
                                                ? "border-primary text-gray-900"
                                                : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                        )}
                    </div>
                    <div className="flex items-center gap-4">
                        {actions}
                    </div>
                </div>
            </div>
        </header>
    );
}
