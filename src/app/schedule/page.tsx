import Link from 'next/link';

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-indigo-600">AI Influencer</Link>
        <div className="flex gap-6">
          <Link href="/dashboard" className="text-gray-600 hover:text-indigo-600">Dashboard</Link>
          <Link href="/generate" className="text-gray-600 hover:text-indigo-600">Gerar</Link>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">Agendar Publicações</h1>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <p className="text-gray-500 text-center py-12">
            Calendário de publicações em breve.
          </p>
          <div className="text-center">
            <Link
              href="/generate"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Criar Conteúdo
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
