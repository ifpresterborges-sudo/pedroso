import React from 'react';
import { Target, Megaphone, Users, Map } from 'lucide-react';

export const PaidTrafficSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
            <Map size={24} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Campanha 1: Vizinho Preferencial</h3>
            <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Objetivo: Alcance/Reconhecimento</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex gap-3">
            <Users size={18} className="text-gray-400 shrink-0 mt-1" />
            <div>
              <span className="block text-sm font-semibold text-gray-700">Público Alvo</span>
              <span className="text-sm text-gray-600">Raio de 1km a 2km do mercado (Av. Tupãssi, 44).</span>
            </div>
          </div>
          <div className="flex gap-3">
            <Megaphone size={18} className="text-gray-400 shrink-0 mt-1" />
            <div>
              <span className="block text-sm font-semibold text-gray-700">Criativo</span>
              <span className="text-sm text-gray-600">Foto da fachada nova ou balcão de carnes.</span>
            </div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
            <p className="text-xs font-bold text-gray-400 mb-1">Copy (Texto)</p>
            <p className="text-sm text-gray-700 italic">"Mora no Centro de Assis? O Mercado Pedroso é seu vizinho! Pão quentinho, açougue de primeira e o melhor hortifruti da região. Venha nos visitar."</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-green-100 text-green-600 rounded-lg">
            <Target size={24} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Campanha 2: Dia de Ofertas</h3>
            <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Objetivo: Mensagens WhatsApp</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex gap-3">
            <Users size={18} className="text-gray-400 shrink-0 mt-1" />
            <div>
              <span className="block text-sm font-semibold text-gray-700">Quando Rodar</span>
              <span className="text-sm text-gray-600">Apenas Quinta e Sexta-feira.</span>
            </div>
          </div>
          <div className="flex gap-3">
            <Megaphone size={18} className="text-gray-400 shrink-0 mt-1" />
            <div>
              <span className="block text-sm font-semibold text-gray-700">Criativo</span>
              <span className="text-sm text-gray-600">Imagem do Encarte da Semana.</span>
            </div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
            <p className="text-xs font-bold text-gray-400 mb-1">Chamada para Ação</p>
            <p className="text-sm text-gray-700 italic">"Clique e peça pelo WhatsApp ou venha aproveitar!"</p>
          </div>
        </div>
      </div>
    </div>
  );
};
