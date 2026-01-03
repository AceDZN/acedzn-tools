import { DictationForm } from "../../../../components/dictation-form";
import { getDictionary } from "../../../../lib/dictionary";
import { createTranslator } from "@repo/i18n";

export default async function EditPage({ params }: { params: Promise<{ lang: string; id: string }> }) {
    const { lang, id } = await params;
    const dict = await getDictionary(lang as any);
    const t = createTranslator((dict as any)?.Dictation?.edit);

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-8 text-indigo-700">{t('title') || "Edit Dictation"}</h1>
            <DictationForm dictationId={id} />
        </div>
    );
}
