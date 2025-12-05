import React, { useState } from 'react';
import { Sparkles, Loader2, Copy, Check } from 'lucide-react';
import { generatePostCaption } from '../services/geminiService';

export const ContentGenerator: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const [copied, setCopied] = useState(false);
  const [selectedDay, setSelectedDay] = useState('Segunda-feira');
  const [selectedFocus, setSelectedFocus] = useState('Hortifruti');

  const handleGenerate = async () => {
    setLoading(true);
    setCopied(false);
    const caption = await generatePostCaption(selectedDay, selectedFocus);
    setResult(caption);
    setLoading(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl border border-red-100 p-6 md:p-8 mb-12">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="text-red-500" size={24} />
            <h3 className="text-xl font-bold text-gray-900">Assistente Criativo IA</h3>
          </div>
          <p className="text-gray-600 mb-6">
            Está sem criatividade hoje? Use a Inteligência Artificial do Google para criar uma legenda nova e única baseada no seu plano de marketing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Dia da Semana</label>
              <select 
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value)}
                className="w-full rounded-lg border-gray-300 border p-2.5 bg-white focus:ring-2 focus:ring-red-500 focus:outline-none"
              >
                <option>Segunda-feira</option>
                <option>Terça-feira</option>
                <option>Quarta-feira</option>
                <option>Quinta-feira</option>
                <option>Sexta-feira</option>
                <option>Sábado</option>
                <option>Domingo</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Foco do Produto</label>
              <select 
                value={selectedFocus}
                onChange={(e) => setSelectedFocus(e.target.value)}
                className="w-full rounded-lg border-gray-300 border p-2.5 bg-white focus:ring-2 focus:ring-red-500 focus:outline-none"
              >
                <option>Hortifruti (Frutas e Verduras)</option>
                <option>Açougue (Carnes)</option>
                <option>Padaria (Pães e Bolos)</option>
                <option>Bebidas e Churrasco</option>
                <option>Conveniência</option>
                <option>Oferta Relâmpago</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : <Sparkles size={20} />}
            {loading ? 'Criando mágica...' : 'Gerar Legenda Agora'}
          </button>
        </div>

        <div className="w-full md:w-96">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm h-full min-h-[250px] p-4 relative flex flex-col">
            <div className="flex items-center justify-between mb-2 pb-2 border-b border-gray-100">
              <span className="text-xs font-bold text-gray-400 uppercase">Resultado</span>
              {result && (
                <button 
                  onClick={handleCopy} 
                  className="text-gray-400 hover:text-red-600 transition-colors"
                  title="Copiar texto"
                >
                  {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                </button>
              )}
            </div>
            
            <div className="flex-1 overflow-y-auto">
              {result ? (
                <p className="text-gray-800 whitespace-pre-wrap text-sm leading-relaxed">{result}</p>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-gray-400 text-center p-4">
                  <Sparkles size={32} className="mb-2 opacity-20" />
                  <p className="text-sm">Selecione as opções e clique em gerar para ver a mágica acontecer.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
