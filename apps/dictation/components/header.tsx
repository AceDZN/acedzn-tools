import { SharedHeader } from "@repo/ui/components/shared-header";
import { MAIN_APP_URL, DOCS_URL, WORKBOOK_URL } from "../lib/constants";
import { ProfileMenu } from "@repo/auth/profile-menu";
import { NotificationCenter } from "./notification-center";
import { Mic } from "lucide-react";

export function Header() {
    return (
        <SharedHeader
            title={
                <>
                    <Mic className="h-6 w-6 text-blue-600" />
                    <span>AceDZN Dictation</span>
                </>
            }
            links={[
                { label: "Workbook", href: WORKBOOK_URL },
                { label: "Web App", href: MAIN_APP_URL },
                { label: "Docs", href: DOCS_URL },
                { label: "Create New", href: "/create" },
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
