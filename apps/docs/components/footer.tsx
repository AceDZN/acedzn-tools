export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 mt-auto">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
                <div className="md:order-1">
                    <p className="text-center text-sm text-gray-400">&copy; {new Date().getFullYear()} AceDZN Tools Docs. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
