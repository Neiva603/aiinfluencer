import Link from 'next/link';

const stats = [
  { label: 'Posts Criados', value: '128', change: '+12%' },
  { label: 'Seguidores', value: '24.5K', change: '+8%' },
  { label: 'Engajamento', value: '4.7%', change: '+1.2%' },
  { label: 'Alcance', value: '180K', change: '+22%' },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-indigo-600">AI Influencer</Link>
        <div className="flex gap-6">
          <Link href="/generate" className="text-gray-600 hover:text-indigo-600">Gerar</Link>
          <Link href="/schedule" className="text-gray-600 hover:text-indigo-600">Agendar</Link>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">Dashboard</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              <p className="text-sm text-green-500 mt-1">{stat.change}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Atividade Recente</h2>
          <p className="text-gray-400 text-sm">Nenhuma atividade ainda. Comece gerando conteúdo!</p>
          <Link
            href="/generate"
            className="mt-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition-colors"
          >
            Criar Conteúdo
          </Link>
        </div>
      </main>
    </div>
  );
}
