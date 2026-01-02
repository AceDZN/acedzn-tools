import { SignUp } from "@clerk/nextjs";

export function SharedSignUp() {
    return (
        <div className="flex items-center justify-center min-h-screen py-12">
            <SignUp />
        </div>
    );
}
