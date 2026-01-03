import { getDictionary } from "../../../lib/dictionary";
import { NotificationsContent } from "../../../components/notifications-content";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang as any);

    return <NotificationsContent lang={lang} dict={dict} />;
}
