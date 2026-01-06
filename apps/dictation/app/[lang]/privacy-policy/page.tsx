export default function PrivacyPolicy() {
    return (
        <div className="container mx-auto py-12 px-4 max-w-3xl">
            <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

            <div className="prose prose-indigo">
                <p>Last updated: {new Date().toLocaleDateString()}</p>

                <h2>1. Introduction</h2>
                <p>Welcome to Dictation Master. We respect your privacy and are committed to protecting your personal data.</p>

                <h2>2. Data We Collect</h2>
                <p>When you use our service, we may collect the following types of information:</p>
                <ul>
                    <li>Account information (via Clerk authentication)</li>
                    <li>Dictation content you create</li>
                    <li>Usage data and game progress</li>
                </ul>

                <h2>3. How We Use Your Data</h2>
                <p>We use your data to:</p>
                <ul>
                    <li>Provide and maintain the service</li>
                    <li>Track your progress in games</li>
                    <li>Improve our AI generation features</li>
                </ul>

                <h2>4. AI Processing</h2>
                <p>We use OpenAI's API to generate dictation content and text-to-speech audio. The text you process through our AI features is sent to OpenAI for this purpose. We do not use your data to train OpenAI's models.</p>

                <h2>5. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us.</p>
            </div>
        </div>
    );
}
