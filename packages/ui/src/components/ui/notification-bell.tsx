'use client';

import { Bell } from 'lucide-react';
import { useState } from 'react';

export interface Notification {
    _id: string;
    title: string;
    message: string;
    createdAt: number;
}

interface NotificationBellProps {
    notifications: Notification[];
    unreadCount?: number;
    onMarkAsRead?: () => void;
}

export function NotificationBell({ notifications, unreadCount = 0, onMarkAsRead }: NotificationBellProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        if (!isOpen && onMarkAsRead && unreadCount > 0) {
            onMarkAsRead();
        }
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button
                onClick={handleToggle}
                className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Notifications"
            >
                <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                {unreadCount > 0 && (
                    <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white dark:border-gray-900" />
                )}
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50 overflow-hidden">
                    <div className="p-3 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-gray-50 dark:bg-gray-800/50">
                        <h3 className="font-semibold text-sm text-gray-900 dark:text-gray-100">Notifications</h3>
                        {unreadCount > 0 && (
                            <span className="text-xs text-blue-500 font-medium px-2 py-0.5 bg-blue-50 dark:bg-blue-900/30 rounded-full">
                                {unreadCount} new
                            </span>
                        )}
                    </div>
                    <div className="max-h-[400px] overflow-y-auto">
                        {notifications.length === 0 ? (
                            <div className="p-8 text-center text-gray-500 text-sm">
                                No notifications yet
                            </div>
                        ) : (
                            <div className="divide-y divide-gray-100 dark:divide-gray-800">
                                {notifications.map((notification) => (
                                    <div key={notification._id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                        <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">
                                            {notification.title}
                                        </h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {notification.message}
                                        </p>
                                        <span className="text-xs text-gray-400 mt-2 block">
                                            {new Date(notification.createdAt).toLocaleDateString()}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Backdrop to close */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsOpen(false)}
                    aria-hidden="true"
                />
            )}
        </div>
    );
}
