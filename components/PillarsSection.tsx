import React from 'react';
import { MapPin, Instagram, MessageCircle, CheckCircle2, Lightbulb } from 'lucide-react';
import { PlanPillar } from '../types';

const pillars: PlanPillar[] = [
  {
    id: 'google',
    title: 'Google Meu Negócio',
    icon: MapPin,
    color: 'bg-blue-50 text-blue-600 border-blue-200',
    description: 'Foco em Localização: Ser encontrado por quem busca "mercado perto de mim".',
    actionItems: [
      'Mudar nome para "Mercado Pedroso"',
      'Atualizar horários (feriados/domingos)',
      'Adicionar WhatsApp (44 99765-6895)',
      'Responder avaliações',
      'Subir fotos novas do Instagram'
    ]
  },
  {
    id: 'instagram',
    title: 'Instagram',
    icon: Instagram,
    color: 'bg-pink-50 text-pink-600 border-pink-200',
    description: 'Foco em Desejo: Fotos bonitas de produtos e ofertas diárias.',
    actionItems: [
      'Stories diários pela manhã',
      'Reels de corte de carnes',
      'Foto de pão saindo do forno',
      'Mostrar "Ofertas Relâmpago"'
    ],
    tips: 'Dica de Ouro: Use os Stories todo dia!'
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp Marketing',
    icon: MessageCircle,
    color: 'bg-green-50 text-green-600 border-green-200',
    description: 'Foco em Venda Direta: Lista de transmissão e Status.',
    actionItems: [
      'Criar Lista de Transmissão (Não Grupo)',
      'Replicar Stories no Status do Zap',
      'Campanha de cadastro "Mande um OI"'
    ]
  }
];

export const PillarsSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {pillars.map((pillar) => (
        <div 
          key={pillar.id} 
          className={`rounded-2xl border p-6 hover:shadow-lg transition-shadow duration-300 ${pillar.color.replace('text-', 'border-').replace('bg-', 'bg-opacity-20 ')} bg-white`}
        >
          <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${pillar.color}`}>
            <pillar.icon size={24} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{pillar.title}</h3>
          <p className="text-sm text-gray-600 mb-4">{pillar.description}</p>
          
          <ul className="space-y-3">
            {pillar.actionItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 size={16} className="mt-0.5 text-green-500 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {pillar.tips && (
            <div className="mt-6 p-3 bg-yellow-50 rounded-lg border border-yellow-100 flex gap-2 text-sm text-yellow-800">
              <Lightbulb size={16} className="shrink-0 mt-0.5" />
              <span className="font-medium">{pillar.tips}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
