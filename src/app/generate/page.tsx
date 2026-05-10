'use client';

import { useState } from 'react';
import Link from 'next/link';

const contentTypes = [
  { id: 'post', label: 'Post', icon: '📝' },
  { id: 'image', label: 'Imagem', icon: '🖼️' },
  { id: 'video', label: 'Vídeo', icon: '🎬' },
  { id: 'story', label: 'Story', icon: '📱' },
];

export default function GeneratePage() {
  const [selected, setSelected] = useState('post');
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-indigo-600">AI Influencer</Link>
        <div className="flex gap-6">
          <Link href="/dashboard" className="text-gray-600 hover:text-indigo-600">Dashboard</Link>
          <Link href="/schedule" className="text-gray-600 hover:text-indigo-600">Agendar</Link>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">Gerar Conteúdo</h1>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex gap-3 mb-6">
            {contentTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelected(type.id)}
                className={`flex-1 py-3 rounded-lg text-sm font-medium transition-colors ${
                  selected === type.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span className="block text-lg">{type.icon}</span>
                {type.label}
              </button>
            ))}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Descreva o conteúdo que você quer criar
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={4}
              placeholder="Ex: Um post motivacional sobre produtividade para empreendedores..."
              className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
            />
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Gerando...' : 'Gerar com IA ✨'}
          </button>
        </div>
      </main>
    </div>
  );
}
