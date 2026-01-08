
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export async function askGemini(question: string, context: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `אתה עוזר הוראה מקצועי לכימיה. התלמיד לומד על "גוף וחומר". 
      הקשר: ${context}.
      שאלה: ${question}.
      ענה בעברית פשוטה, מקצועית ומעודדת.`,
      config: {
        systemInstruction: "You are a professional Hebrew chemistry tutor for middle school students."
      }
    });
    return response.text;
  } catch (error) {
    console.error("Error asking Gemini:", error);
    return "מצטער, הייתה לי תקלה קטנה. בוא ננסה שוב?";
  }
}
