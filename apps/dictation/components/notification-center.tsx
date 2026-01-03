"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "@repo/db";
import { NotificationBell } from "@repo/ui/components/ui/notification-bell";

export function NotificationCenter() {
    const notifications = useQuery(api.notifications.list, { targetApp: "dictation" }) || [];
    const user = useQuery(api.users.current);
    const markAsRead = useMutation(api.notifications.markAsRead);

    const lastRead = user?.lastNotificationReadTime ?? 0;
    const unreadCount = notifications.filter(n => n.createdAt > lastRead).length;

    return (
        <NotificationBell
            notifications={notifications}
            unreadCount={unreadCount}
            onMarkAsRead={() => markAsRead()}
        />
    );
}
