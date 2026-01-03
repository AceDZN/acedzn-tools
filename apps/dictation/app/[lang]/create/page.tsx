import { DictationForm } from "../../../components/dictation-form"

export default function CreatePage() {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-8 text-indigo-700">Create New Dictation</h1>
            <DictationForm />
        </div>
    )
}
