import { GoogleGenAI } from "@google/genai";

// Initialize the client with the API key from the environment variable
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generatePostCaption = async (
  day: string,
  focus: string,
  tone: string = "amigável, local e convidativo"
): Promise<string> => {
  try {
    const prompt = `
      Atue como um especialista em marketing para redes sociais do "Mercado Pedroso", um mercado de bairro tradicional e acolhedor.
      
      Crie uma legenda para um post de Instagram para:
      Dia da semana: ${day}
      Foco do produto: ${focus}
      Tom de voz: ${tone}
      
      A legenda deve:
      1. Ser curta e envolvente.
      2. Usar emojis relevantes.
      3. Incluir uma chamada para ação (CTA) convidando para visitar o mercado.
      4. Não usar hashtags excessivas (máximo 3).
      
      Retorne apenas o texto da legenda.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Não foi possível gerar a legenda no momento.";
  } catch (error) {
    console.error("Erro ao gerar legenda:", error);
    return "Erro ao conectar com a IA. Verifique sua chave de API.";
  }
};
