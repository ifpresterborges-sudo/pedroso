import React from 'react';
import { Gift, Utensils, ShoppingBasket } from 'lucide-react';

export const CreativitySection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
      <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-xl p-5 text-white shadow-md">
        <div className="bg-white/20 w-10 h-10 rounded-lg flex items-center justify-center mb-3 backdrop-blur-sm">
          <ShoppingBasket size={20} className="text-white" />
        </div>
        <h4 className="font-bold text-lg mb-1">Kit Churrasco</h4>
        <p className="text-white/90 text-sm">Monte um kit pronto (Carne + Carvão + Cerveja + Sal) com preço fechado na sexta-feira.</p>
      </div>

      <div className="bg-gradient-to-br from-indigo-400 to-blue-500 rounded-xl p-5 text-white shadow-md">
        <div className="bg-white/20 w-10 h-10 rounded-lg flex items-center justify-center mb-3 backdrop-blur-sm">
          <Utensils size={20} className="text-white" />
        </div>
        <h4 className="font-bold text-lg mb-1">Receita Rápida</h4>
        <p className="text-white/90 text-sm">Reels ensinando receita simples usando produtos em promoção. Ex: "Carne de panela perfeita".</p>
      </div>

      <div className="bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl p-5 text-white shadow-md">
        <div className="bg-white/20 w-10 h-10 rounded-lg flex items-center justify-center mb-3 backdrop-blur-sm">
          <Gift size={20} className="text-white" />
        </div>
        <h4 className="font-bold text-lg mb-1">Sorteio de Cesta</h4>
        <p className="text-white/90 text-sm">Sorteie uma cesta de café da manhã. Regra: marcar 2 amigos de Assis Chateaubriand.</p>
      </div>
    </div>
  );
};
