"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "@repo/db";
import { useUser } from "@clerk/nextjs";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function ProfilePage() {
    const { user: clerkUser, isLoaded } = useUser();
    const user = useQuery(api.users.current);
    const update = useMutation(api.users.update);
    const generateUploadUrl = useMutation(api.users.generateUploadUrl);
    // const getImageUrl = useQuery(api.users.getImageUrl, user?.imageId ? { storageId: user.imageId } : "skip");
    // Since we don't have getImageUrl exported effectively yet (hooks rules), let's rely on storageId or just display what we have.
    // Actually, to display the image from storageId, we need a query that returns the URL. 
    // `api.users.getImageUrl` was added in my earlier plan, let's use it.

    // We can't conditionally call useQuery easily.
    // Better pattern: return the url in the `current` query? 
    // Or just use a separate component for the image that triggers the query.
    // For now, let's just show the image if we have the URL.

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [isSaving, setIsSaving] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Sync state with DB user when loaded
    useEffect(() => {
        if (user) {
            setName(user.name || "");
            setDescription(user.description || "");
        }
    }, [user]);

    // Handle Image Selection
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedImage(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);
        try {
            let imageId = user?.imageId;

            if (selectedImage) {
                // 1. Get upload URL
                const postUrl = await generateUploadUrl();

                // 2. Upload file
                const result = await fetch(postUrl, {
                    method: "POST",
                    headers: { "Content-Type": selectedImage.type },
                    body: selectedImage,
                });

                if (!result.ok) throw new Error("Upload failed");

                const { storageId } = await result.json();
                imageId = storageId;
            }

            // 3. Update user
            await update({
                name,
                description,
                imageId,
            });

            // Optional: reset selected image state but keep preview until refresh? 
            // Better to clear selection.
            setSelectedImage(null);

            alert("Profile updated!");
        } catch (error) {
            console.error(error);
            alert("Failed to update profile");
        } finally {
            setIsSaving(false);
        }
    };

    if (!isLoaded) return <div className="p-8 text-center">Loading...</div>;
    if (!clerkUser) return <div className="p-8 text-center">Please sign in to view your profile.</div>;

    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="bg-white shadow rounded-lg p-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Edit Profile</h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Profile Image */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Profile Image</label>
                        <div className="mt-2 flex items-center gap-x-3">
                            {previewUrl ? (
                                <img src={previewUrl} alt="Profile" className="h-16 w-16 rounded-full object-cover text-gray-300" />
                            ) : user?.imageId ? (
                                <StorageImage storageId={user.imageId} />
                            ) : (
                                <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
                                    <span className="text-xs">No Img</span>
                                </div>
                            )}
                            <button
                                type="button"
                                onClick={() => fileInputRef.current?.click()}
                                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            >
                                Change
                            </button>
                            <input
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </div>
                    </div>

                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                            Name
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                            Description
                        </label>
                        <div className="mt-2">
                            <textarea
                                id="description"
                                name="description"
                                rows={4}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-end gap-x-4">
                        <button
                            type="button"
                            className="text-sm font-semibold leading-6 text-gray-900"
                            onClick={() => {
                                // Reset to server values
                                if (user) {
                                    setName(user.name || "");
                                    setDescription(user.description || "");
                                    setPreviewUrl(null);
                                    setSelectedImage(null);
                                }
                            }}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isSaving}
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
                        >
                            {isSaving ? "Saving..." : "Save"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

function StorageImage({ storageId }: { storageId: string }) {
    // This assumes api.users.getImageUrl exists and works
    const url = useQuery(api.users.getImageUrl, { storageId });
    if (!url) return <div className="h-16 w-16 rounded-full bg-gray-200 animate-pulse" />;
    return <img src={url} alt="Profile" className="h-16 w-16 rounded-full object-cover" />;
}
