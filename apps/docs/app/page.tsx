export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Getting Started with AceDZN Tools</h1>
      <p className="text-lg text-gray-600 mb-4">
        Welcome to the documentation for AceDZN Tools. This guide will help you get started with using our tools and libraries effectively.
      </p>

      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Installation</h2>
        <p className="text-gray-600 mb-4">
          To install the tools, you can use your preferred package manager.
        </p>
        <div className="bg-gray-800 text-white rounded p-4 font-mono text-sm">
          npm install @repo/ui
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Usage</h2>
        <p className="text-gray-600 mb-4">
          Import the components you need into your project.
        </p>
        <div className="bg-gray-800 text-white rounded p-4 font-mono text-sm">
          import &#123; Button &#125; from "@repo/ui/button";
        </div>
      </div>
    </div>
  );
}
