import { SharedHeader } from "@repo/ui/components/shared-header";
import { DICTATION_URL, DOCS_URL } from "../lib/constants";
import { ProfileMenu } from "@repo/auth/profile-menu";
import { NotificationCenter } from "./notification-center";
import { LayoutGrid } from "lucide-react";

export function Header() {
    return (
        <SharedHeader
            title={
                <>
                    <LayoutGrid className="h-6 w-6 text-blue-600" />
                    <span>AceDZN Tools</span>
                </>
            }
            links={[
                { label: "Docs", href: DOCS_URL },
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
