import { GeneratePostForm } from "@/components/forms/generate-post-form";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            LinkedIn Post Generator
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Create engaging LinkedIn posts with AI assistance
          </p>
        </div>

        <GeneratePostForm />
      </div>
    </main>
  );
}