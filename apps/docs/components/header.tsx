import { SharedHeader } from "@repo/ui/components/shared-header";
import { APP_URL, DICTATION_URL } from "../lib/constants";
import { ProfileMenu } from "@repo/auth/profile-menu";
import { NotificationCenter } from "./notification-center";
import { BookOpen } from "lucide-react";

export function Header() {
    return (
        <SharedHeader
            title={
                <>
                    <BookOpen className="h-6 w-6 text-blue-600" />
                    <span>AceDZN Docs</span>
                </>
            }
            links={[
                { label: "Web App", href: APP_URL },
                { label: "Dictation", href: DICTATION_URL },
                { label: "GitHub", href: "https://github.com/acedzn/acedzn-tools", target: "_blank" },
            ]}
            actions={
                <>
                    <NotificationCenter />
                    <ProfileMenu profileUrl="/settings" />
                </>
            }
        />
    );
}
