"use client";

import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "@repo/db";
import Link from "next/link";
import { Loader2, ArrowLeft } from "lucide-react";

export default function NotificationsPage() {
    const sendNotification = useMutation(api.notifications.send);
    const deleteNotification = useMutation(api.notifications.deleteNotification);
    const notifications = useQuery(api.notifications.list, {}) || [];

    // Form state
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [targetApp, setTargetApp] = useState<string>("all");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSuccessMessage("");

        try {
            await sendNotification({
                title,
                message,
                targetApp: targetApp === "all" ? undefined : targetApp,
            });
            setTitle("");
            setMessage("");
            setSuccessMessage("Notification sent successfully!");
            setTimeout(() => setSuccessMessage(""), 3000);
        } catch (error) {
            console.error(error);
            alert("Failed to send notification");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex bg-gray-900 min-h-screen">
            <aside className="w-64 bg-gray-800 border-r border-gray-700 p-6 flex flex-col fixed h-full">
                <Link href="/" className="mb-8 text-gray-400 hover:text-white flex items-center gap-2">
                    <ArrowLeft size={16} /> Back to Dashboard
                </Link>
                <h1 className="text-2xl font-bold mb-4 text-white">Notifications</h1>
                <p className="text-sm text-gray-400 mb-6">
                    Manage and send notifications to your users.
                </p>
            </aside>

            <main className="flex-1 p-8 ml-64 overflow-y-auto">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 mb-8">
                        <h2 className="text-xl font-bold mb-6">Create Notification</h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Title</label>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="e.g. Scheduled Maintenance"
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="e.g. We will be performing updates on..."
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 h-32 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Target Application</label>
                                <select
                                    value={targetApp}
                                    onChange={(e) => setTargetApp(e.target.value)}
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                >
                                    <option value="all">All Apps</option>
                                    <option value="web">Web App (acedzn.dev)</option>
                                    <option value="docs">Docs (docs.acedzn.dev)</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-2 rounded-lg flex items-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? <Loader2 className="animate-spin" /> : "Send Notification"}
                            </button>

                            {successMessage && (
                                <p className="text-green-400 text-sm mt-2">{successMessage}</p>
                            )}
                        </form>
                    </div>

                    <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
                        <h2 className="text-xl font-bold mb-6">Recent Notifications</h2>
                        <div className="space-y-4">
                            {notifications.length === 0 ? (
                                <p className="text-gray-500 text-sm">No recent notifications found.</p>
                            ) : (
                                notifications.map((notification) => (
                                    <div key={notification._id} className="p-4 bg-gray-900 rounded-lg border border-gray-700 flex justify-between items-start">
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="font-semibold">{notification.title}</h3>
                                                <span className="text-xs text-gray-500">
                                                    {new Date(notification.createdAt).toLocaleString()}
                                                </span>
                                            </div>
                                            <p className="text-gray-400 text-sm mb-3">{notification.message}</p>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs px-2 py-1 bg-gray-800 rounded border border-gray-600">
                                                    Target: {notification.targetApp || "All"}
                                                </span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={async () => {
                                                if (confirm("Are you sure you want to delete this notification?")) {
                                                    await deleteNotification({ id: notification._id });
                                                }
                                            }}
                                            className="ml-4 text-red-500 hover:text-red-400 p-2"
                                            title="Delete Notification"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M3 6h18"></path>
                                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                            </svg>
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
