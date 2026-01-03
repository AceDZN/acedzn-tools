"use client";

import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "@repo/db";
import Link from "next/link";
import { Loader2, ArrowLeft } from "lucide-react";

export function NotificationsContent({ lang, dict }: { lang: string, dict: any }) {
    const sendNotification = useMutation(api.notifications.send);
    const deleteNotification = useMutation(api.notifications.deleteNotification);
    const notifications = useQuery(api.notifications.list, {}) || [];

    // Form state
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [targetApp, setTargetApp] = useState<string>("all");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const t = dict.notifications;

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
            setSuccessMessage(t.success);
            setTimeout(() => setSuccessMessage(""), 3000);
        } catch (error) {
            console.error(error);
            alert(t.error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex bg-gray-900 min-h-screen">
            <aside className="w-64 bg-gray-800 border-e border-gray-700 p-6 flex flex-col fixed h-full">
                <Link href={`/${lang}`} className="mb-8 text-gray-400 hover:text-white flex items-center gap-2">
                    {lang === 'he' ? <ArrowLeft className="rotate-180" size={16} /> : <ArrowLeft size={16} />}
                    {t.back_to_dashboard}
                </Link>
                <h1 className="text-2xl font-bold mb-4 text-white">{t.title}</h1>
                <p className="text-sm text-gray-400 mb-6">
                    {t.description}
                </p>
            </aside>

            <main className="flex-1 p-8 ml-64 overflow-y-auto ltr:ml-64 rtl:mr-64 rtl:ml-0">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 mb-8">
                        <h2 className="text-xl font-bold mb-6">{t.create_title}</h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">{t.form.title}</label>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder={t.form.title_placeholder}
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">{t.form.message}</label>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder={t.form.message_placeholder}
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 h-32 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">{t.form.target}</label>
                                <select
                                    value={targetApp}
                                    onChange={(e) => setTargetApp(e.target.value)}
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                >
                                    <option value="all">{t.form.targets.all}</option>
                                    <option value="web">{t.form.targets.web}</option>
                                    <option value="docs">{t.form.targets.docs}</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-2 rounded-lg flex items-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? <Loader2 className="animate-spin" /> : t.form.send_btn}
                            </button>

                            {successMessage && (
                                <p className="text-green-400 text-sm mt-2">{successMessage}</p>
                            )}
                        </form>
                    </div>

                    <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
                        <h2 className="text-xl font-bold mb-6">{t.recent_title}</h2>
                        <div className="space-y-4">
                            {notifications.length === 0 ? (
                                <p className="text-gray-500 text-sm">{t.no_notifications}</p>
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
                                                if (confirm(t.delete_confirm)) {
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
