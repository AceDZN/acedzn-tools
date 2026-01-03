import Link from "next/link";

export default function AdminDashboard() {
    return (
        <div className="flex h-screen">
            {/* Sidebar - Simple implementation for now */}
            <aside className="w-64 bg-gray-800 border-r border-gray-700 p-6 flex flex-col">
                <h1 className="text-2xl font-bold mb-8 text-white">Admin</h1>
                <nav className="flex-1 space-y-2">
                    <Link href="/" className="block px-4 py-2 rounded bg-gray-700 text-white font-medium">
                        Overview
                    </Link>
                    <Link href="/notifications" className="block px-4 py-2 rounded hover:bg-gray-700 text-gray-300 transition-colors">
                        Notifications
                    </Link>
                </nav>
                <div className="mt-auto pt-6 border-t border-gray-700">
                    <span className="text-xs text-gray-500">v0.1.0</span>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">
                <h2 className="text-3xl font-bold mb-6">Dashboard Overview</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {[
                        { label: "Total Users", value: "24.5k", change: "+5%" },
                        { label: "Active Now", value: "1,245", change: "+12%" },
                        { label: "New Signups", value: "350", change: "+2%" },
                        { label: "Server Load", value: "18%", change: "-1%" },
                    ].map((stat, i) => (
                        <div key={i} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                            <p className="text-sm text-gray-400 mb-1">{stat.label}</p>
                            <p className="text-3xl font-bold text-white mb-2">{stat.value}</p>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${stat.change.startsWith('+') ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'}`}>
                                {stat.change}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
                    <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
                    <div className="space-y-4">
                        <p className="text-gray-400">Activity feed placeholder...</p>
                    </div>
                </div>
            </main>
        </div>
    );
}
