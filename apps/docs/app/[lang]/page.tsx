import { getDictionary } from "../../lib/dictionary";
import { LanguageSelector } from "../../components/language-selector";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as any);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{(dict.home as any).title}</h1>
          <p className="text-lg text-gray-600">{(dict.home as any).subtitle}</p>
        </div>
        <LanguageSelector currentLang={lang} />
      </div>

      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">{(dict.home as any).installation.title}</h2>
        <p className="text-gray-600 mb-4">
          {(dict.home as any).installation.description}
        </p>
        <div className="bg-gray-800 text-white rounded p-4 font-mono text-sm" dir="ltr">
          {(dict.home as any).installation.command}
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">{(dict.home as any).usage.title}</h2>
        <p className="text-gray-600 mb-4">
          {(dict.home as any).usage.description}
        </p>
        <div className="bg-gray-800 text-white rounded p-4 font-mono text-sm" dir="ltr">
          {(dict.home as any).usage.code}
        </div>
      </div>
    </div>
  );
}
