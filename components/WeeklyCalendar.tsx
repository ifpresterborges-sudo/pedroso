import React from 'react';
import { Calendar, Apple, Beef, Beer, Coffee, ShoppingBag } from 'lucide-react';
import { WeeklyScheduleItem } from '../types';

const schedule: WeeklyScheduleItem[] = [
  {
    day: 'Segunda & Terça',
    focus: 'Hortifruti & Despensa',
    postIdea: 'Foto bonita das frutas frescas',
    captionIdea: 'Comece a semana com saúde! Hortifruti fresquinho.'
  },
  {
    day: 'Quarta & Quinta',
    focus: 'Açougue',
    postIdea: 'Reels cortando carne ou balcão cheio',
    captionIdea: 'Aquele corte para o jantar ou churrasco.'
  },
  {
    day: 'Sexta & Sábado',
    focus: 'Bebidas, Churrasco & Padaria',
    postIdea: 'Pão saindo do forno (fumaça) + Ofertas Cerveja',
    captionIdea: 'Tudo pronto para o fim de semana!'
  },
  {
    day: 'Domingo',
    focus: 'Conveniência & Padaria',
    postIdea: 'Stories: "Estamos abertos!"',
    captionIdea: 'Venha buscar seu frango assado/pãozinho.'
  }
];

const getIconForFocus = (focus: string) => {
  if (focus.includes('Hortifruti')) return <Apple size={20} />;
  if (focus.includes('Açougue')) return <Beef size={20} />;
  if (focus.includes('Bebidas')) return <Beer size={20} />;
  if (focus.includes('Conveniência')) return <Coffee size={20} />;
  return <ShoppingBag size={20} />;
};

export const WeeklyCalendar: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm mb-12">
      <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
        <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
          <Calendar size={24} />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Agenda de Conteúdo Semanal</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {schedule.map((item, idx) => (
          <div key={idx} className="bg-gray-50 rounded-xl p-5 border border-gray-100 relative group hover:border-red-200 transition-colors">
            <div className="absolute top-4 right-4 text-gray-400 group-hover:text-red-500 transition-colors">
              {getIconForFocus(item.focus)}
            </div>
            <h4 className="text-red-600 font-bold mb-1">{item.day}</h4>
            <p className="font-semibold text-gray-800 mb-3 text-sm">{item.focus}</p>
            
            <div className="space-y-3">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">O que postar</p>
                <p className="text-sm text-gray-700">{item.postIdea}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Legenda Sugerida</p>
                <p className="text-sm text-gray-600 italic">"{item.captionIdea}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
