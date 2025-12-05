import React, { useState, useEffect } from 'react';
import { LayoutDashboard, CheckSquare, Zap, Megaphone } from 'lucide-react';

// Components
import { SectionHeader } from './components/SectionHeader';
import { PillarsSection } from './components/PillarsSection';
import { WeeklyCalendar } from './components/WeeklyCalendar';
import { ContentGenerator } from './components/ContentGenerator';
import { PaidTrafficSection } from './components/PaidTrafficSection';
import { CreativitySection } from './components/CreativitySection';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'traffic'>('overview');

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="bg-red-600 w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-lg">P</div>
              <h1 className="text-xl font-bold text-gray-900 tracking-tight">Mercado Pedroso <span className="text-gray-400 font-normal text-sm ml-2 hidden sm:inline-block">| Plano de Marketing</span></h1>
            </div>
            <nav className="flex gap-4">
              <button 
                onClick={() => setActiveTab('overview')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'overview' ? 'bg-red-50 text-red-700' : 'text-gray-500 hover:text-gray-900'}`}
              >
                Visão Geral
              </button>
              <button 
                onClick={() => setActiveTab('traffic')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'traffic' ? 'bg-red-50 text-red-700' : 'text-gray-500 hover:text-gray-900'}`}
              >
                Tráfego Pago
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Welcome Hero */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            O Plano de Ação <span className="text-red-600">🚀</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Estratégia dividida em 3 pilares principais: Atração (Google), Relacionamento (Instagram) e Venda (WhatsApp).
          </p>
        </div>

        {/* Action Checklist - Immediate Items */}
        <div className="bg-indigo-900 rounded-xl p-6 text-white mb-12 shadow-lg">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <CheckSquare className="text-indigo-300" />
            Resumo: Ações para Hoje
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
              <div className="w-6 h-6 rounded-full border-2 border-indigo-300 flex items-center justify-center text-xs font-bold text-indigo-300">1</div>
              <span className="text-sm font-medium">Atualizar Google (trocar Paraná por Pedroso)</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
              <div className="w-6 h-6 rounded-full border-2 border-indigo-300 flex items-center justify-center text-xs font-bold text-indigo-300">2</div>
              <span className="text-sm font-medium">Tirar foto bonita do pão ou carne</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
              <div className="w-6 h-6 rounded-full border-2 border-indigo-300 flex items-center justify-center text-xs font-bold text-indigo-300">3</div>
              <span className="text-sm font-medium">Postar no Insta e Status (Convite FDS)</span>
            </div>
          </div>
        </div>

        {activeTab === 'overview' && (
          <div className="space-y-12">
            <section>
              <SectionHeader title="Os 3 Pilares" icon={LayoutDashboard} subtitle="A base da estratégia para fortalecer a marca localmente." />
              <PillarsSection />
            </section>

            <section>
              <SectionHeader title="Calendário de Conteúdo" icon={CheckSquare} subtitle="O que postar em cada dia da semana para engajar clientes." />
              <WeeklyCalendar />
            </section>

            <section>
               <SectionHeader title="Ideias Criativas" icon={Zap} subtitle="Diferenciais para se destacar da concorrência." />
               <CreativitySection />
            </section>

            <section>
              <SectionHeader title="Gerador de Legendas IA" icon={Zap} subtitle="Economize tempo criando legendas com inteligência artificial." />
              <ContentGenerator />
            </section>
          </div>
        )}

        {activeTab === 'traffic' && (
          <div>
            <div className="mb-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 text-sm">
              <strong>Dica:</strong> Para um mercado de bairro, o segredo não é gastar muito, mas sim usar a Geolocalização (raio de 1-2km) corretamente.
            </div>
            <SectionHeader title="Estratégia de Anúncios" icon={Megaphone} subtitle="Como investir para trazer clientes para a loja e para o WhatsApp." />
            <PaidTrafficSection />
          </div>
        )}

      </main>
    </div>
  );
};

export default App;
