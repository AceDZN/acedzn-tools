import { DictationForm } from "../../../components/dictation-form"
import { getDictionary } from "../../../lib/dictionary"
import { createTranslator } from "@repo/i18n"

export default async function CreatePage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params
    const dict = await getDictionary(lang as any)
    const t = createTranslator(dict?.CreatePage)

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-8 text-indigo-700">{t('title')}</h1>
            <DictationForm />
        </div>
    )
}
