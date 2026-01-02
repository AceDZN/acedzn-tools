import { SignIn } from "@clerk/nextjs";

export function SharedSignIn() {
    return (
        <div className="flex items-center justify-center min-h-screen py-12">
            <SignIn />
        </div>
    );
}
