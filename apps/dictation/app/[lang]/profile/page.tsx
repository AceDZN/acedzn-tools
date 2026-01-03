import { ProfileView } from "../../../components/profile-view";
import { Metadata } from "next";
import { getDictionary } from "../../../lib/dictionary";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const dict = await getDictionary(lang as any);
    return {
        title: `${(dict as any).Profile.title} | AceDZN Dictation`,
    };
}

export default async function ProfilePage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;

    return <ProfileView lang={lang} />;
}
