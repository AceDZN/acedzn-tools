export function Sidebar() {
    return (
        <nav className="w-64 flex-shrink-0 border-r border-gray-200 bg-white min-h-screen py-6 px-4 hidden md:block">
            <div className="space-y-4">
                <div>
                    <h3 className="font-semibold text-gray-900">Getting Started</h3>
                    <ul className="mt-2 space-y-2">
                        <li>
                            <a href="#" className="block text-gray-600 hover:text-indigo-600">
                                Introduction
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block text-gray-600 hover:text-indigo-600">
                                Installation
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-900">Components</h3>
                    <ul className="mt-2 space-y-2">
                        <li>
                            <a href="#" className="block text-gray-600 hover:text-indigo-600">
                                Button
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block text-gray-600 hover:text-indigo-600">
                                Card
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block text-gray-600 hover:text-indigo-600">
                                Code
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
