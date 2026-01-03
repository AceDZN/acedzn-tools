"use client";

import { useMutation } from "convex/react";
import { api } from "@repo/db";
import { useEffect } from "react";
import { useAuth } from "@clerk/nextjs";

export function UserSync() {
    const { isSignedIn, userId } = useAuth();
    const store = useMutation(api.users.store);

    useEffect(() => {
        if (isSignedIn && userId) {
            void store();
        }
    }, [isSignedIn, userId, store]);

    return null;
}
