import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-indigo-700 mb-4">
            AI Influencer
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Crie e gerencie conteúdo para redes sociais com o poder da inteligência artificial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Link href="/dashboard" className="group">
            <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow border border-indigo-100 group-hover:border-indigo-300">
              <div className="text-4xl mb-4">📊</div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Dashboard</h2>
              <p className="text-gray-500">Veja métricas e performance do seu conteúdo.</p>
            </div>
          </Link>

          <Link href="/generate" className="group">
            <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow border border-indigo-100 group-hover:border-indigo-300">
              <div className="text-4xl mb-4">✨</div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Gerar Conteúdo</h2>
              <p className="text-gray-500">Crie posts, imagens e vídeos com IA.</p>
            </div>
          </Link>

          <Link href="/schedule" className="group">
            <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow border border-indigo-100 group-hover:border-indigo-300">
              <div className="text-4xl mb-4">📅</div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Agendar</h2>
              <p className="text-gray-500">Programe publicações nas suas redes sociais.</p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
