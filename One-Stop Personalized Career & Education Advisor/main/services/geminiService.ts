
import { GoogleGenAI, Type, Chat } from '@google/genai';
import { UserProfile, QuizResult, AISuggestions } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const responseSchema = {
    type: Type.OBJECT,
    properties: {
        recommendedStream: {
            type: Type.STRING,
            description: "The most suitable stream (Science, Arts, Commerce, or Vocational) based on the quiz.",
        },
        suggestedCourses: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "A list of 3-5 specific degree or diploma courses that align with the user's profile and recommended stream.",
        },
        careerOutlook: {
            type: Type.STRING,
            description: "A brief paragraph summarizing potential career paths and opportunities related to the suggested courses.",
        },
        collegeTips: {
            type: Type.STRING,
            description: "Actionable advice on how the student should go about selecting colleges and preparing applications.",
        },
    },
    required: ["recommendedStream", "suggestedCourses", "careerOutlook", "collegeTips"],
};

export const getPersonalizedAdvice = async (
  profile: UserProfile,
  quizResult: QuizResult
): Promise<AISuggestions | null> => {
  try {
    const sortedStreams = Object.entries(quizResult)
        .sort(([, a], [, b]) => b - a)
        .map(([stream]) => stream);

    const prompt = `
      You are a career and education advisor for a student in India.
      Analyze the student's profile and their aptitude quiz results to provide personalized guidance tailored to their academic stage.

      Student Profile:
      - Name: ${profile.name}
      - Age: ${profile.age}
      - Current Class: ${profile.currentClass} // This is the student's current academic stage.
      - Interests: ${profile.interests}

      Aptitude Quiz Results (score indicates preference):
      - Science: ${quizResult.Science}
      - Arts: ${quizResult.Arts}
      - Commerce: ${quizResult.Commerce}
      - Vocational: ${quizResult.Vocational}
      - Top recommended stream based on score: ${sortedStreams[0]}

      Based on this information, provide clear, encouraging, and actionable advice.
      IMPORTANT: Tailor your advice specifically for a student who is in or has just finished class ${profile.currentClass}.
      - If the student is from class 10, focus your recommendations on choosing a stream for classes 11 and 12, and the long-term benefits of that stream.
      - If the student is from class 12, focus your recommendations on specific undergraduate degree courses, entrance exams, and career paths after graduation.

      Generate a response in JSON format according to the provided schema.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
          responseMimeType: "application/json",
          responseSchema: responseSchema,
      }
    });

    const jsonText = response.text.trim();
    return JSON.parse(jsonText) as AISuggestions;

  } catch (error) {
    console.error("Error fetching personalized advice from Gemini API:", error);
    return null;
  }
};

export const startChatSession = (): Chat => {
    const chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: `You are a friendly and knowledgeable career and education advisor for students in India who have completed class 10 or 12.
            Your goal is to answer their questions about subject streams (Arts, Science, Commerce, Vocational), degree programs, career opportunities, and government colleges.
            Keep your answers concise, encouraging, and easy to understand.
            If a question is outside of this scope, politely state that you can only answer questions related to careers and education.`,
        },
    });
    return chat;
};