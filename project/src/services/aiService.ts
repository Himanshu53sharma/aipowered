import { HealthData, ChatMessage, HealthSuggestion } from '../types/health';
import { openai } from '@ai-sdk/openai';
import { generateText, streamText } from 'ai';
import { createOpenRouter } from '@openrouter/ai-sdk-provider';

// Initialize OpenRouter
const openrouter = createOpenRouter({
  apiKey: import.meta.env.VITE_OPENROUTER_API_KEY,
});

export class AIHealthService {
  private chatHistory: ChatMessage[] = [];
  private systemPrompt = `You are a helpful AI health assistant. Your role is to:

1. Provide general health information and guidance
2. Help users understand their symptoms
3. Suggest when to seek professional medical care
4. ALWAYS emphasize that you are not a substitute for professional medical advice
5. Be empathetic and supportive
6. Ask clarifying questions when needed
7. Provide practical self-care suggestions when appropriate

IMPORTANT DISCLAIMERS:
- You are not a doctor and cannot provide medical diagnoses
- Always recommend consulting healthcare professionals for serious concerns
- In emergencies, direct users to call emergency services immediately
- Your responses are for informational purposes only

Keep responses concise, helpful, and easy to understand. Use a caring but professional tone.`;

  async processHealthData(data: HealthData): Promise<HealthSuggestion[]> {
    try {
      const prompt = `Analyze the following health information and provide 1-3 possible conditions or explanations:

Patient Information:
- Name: ${data.name}
- Age: ${data.age}
- Gender: ${data.gender}
- Symptoms: ${data.symptoms.join(', ')}
- Severity: ${data.severity}
- Duration: ${data.duration}
- Description: ${data.description}

Please provide a JSON response with an array of suggestions. Each suggestion should have:
- condition: string (name of possible condition)
- likelihood: "low" | "medium" | "high"
- description: string (explanation of the condition)
- recommendations: string[] (array of practical recommendations)
- urgency: "low" | "medium" | "high" (how urgent medical attention is needed)

Focus on common conditions and always emphasize the need for professional medical evaluation when appropriate.`;

      const result = await generateText({
        model: openrouter('anthropic/claude-3.5-sonnet'),
        prompt,
        temperature: 0.7,
        maxTokens: 1000,
      });

      try {
        // Try to parse the JSON response
        const suggestions = JSON.parse(result.text);
        return Array.isArray(suggestions) ? suggestions : [suggestions];
      } catch (parseError) {
        // If JSON parsing fails, create a fallback suggestion
        return [{
          condition: "General Health Assessment",
          likelihood: "medium" as const,
          description: result.text,
          recommendations: [
            "Monitor your symptoms closely",
            "Stay hydrated and get adequate rest",
            "Consult a healthcare provider if symptoms persist or worsen",
            "Seek immediate medical attention if you experience severe symptoms"
          ],
          urgency: "low" as const
        }];
      }
    } catch (error) {
      console.error('Error processing health data:', error);
      
      // Fallback suggestions based on symptoms
      return this.generateFallbackSuggestions(data);
    }
  }

  async sendMessage(message: string): Promise<ChatMessage> {
    try {
      // Add user message to history
      const userMessage: ChatMessage = {
        id: `user-${Date.now()}`,
        text: message,
        sender: 'user',
        timestamp: new Date(),
        type: 'text'
      };
      
      this.chatHistory.push(userMessage);

      // Prepare conversation context
      const conversationHistory = this.chatHistory
        .slice(-10) // Keep last 10 messages for context
        .map(msg => `${msg.sender}: ${msg.text}`)
        .join('\n');

      const prompt = `${this.systemPrompt}

Previous conversation:
${conversationHistory}

Please respond to the user's latest message: "${message}"

Remember to:
- Be helpful and empathetic
- Provide practical advice when appropriate
- Always emphasize the importance of professional medical care
- Ask clarifying questions if needed
- Keep responses concise and easy to understand`;

      const result = await generateText({
        model: openrouter('anthropic/claude-3.5-sonnet'),
        prompt,
        temperature: 0.8,
        maxTokens: 500,
      });

      // Determine message type based on content
      let messageType: 'text' | 'suggestion' | 'warning' = 'text';
      const responseText = result.text.toLowerCase();
      
      if (responseText.includes('emergency') || responseText.includes('immediately') || responseText.includes('urgent')) {
        messageType = 'warning';
      } else if (responseText.includes('suggest') || responseText.includes('recommend') || responseText.includes('try')) {
        messageType = 'suggestion';
      }

      const aiMessage: ChatMessage = {
        id: `ai-${Date.now()}`,
        text: result.text,
        sender: 'ai',
        timestamp: new Date(),
        type: messageType
      };

      this.chatHistory.push(aiMessage);
      return aiMessage;

    } catch (error) {
      console.error('Error sending message:', error);
      
      // Fallback response
      const fallbackMessage: ChatMessage = {
        id: `ai-${Date.now()}`,
        text: "I apologize, but I'm having trouble connecting to the AI service right now. Please try again in a moment. If you're experiencing a medical emergency, please contact emergency services immediately.",
        sender: 'ai',
        timestamp: new Date(),
        type: 'warning'
      };

      this.chatHistory.push(fallbackMessage);
      return fallbackMessage;
    }
  }

  private generateFallbackSuggestions(data: HealthData): HealthSuggestion[] {
    const suggestions: HealthSuggestion[] = [];
    
    // Analyze symptoms and generate basic suggestions
    const symptoms = data.symptoms.map(s => s.toLowerCase());
    
    if (symptoms.some(s => s.includes('fever') || s.includes('temperature'))) {
      suggestions.push({
        condition: "Possible Viral Infection",
        likelihood: "medium",
        description: "Fever often indicates your body is fighting an infection, commonly viral in nature.",
        recommendations: [
          "Get plenty of rest",
          "Stay well hydrated",
          "Monitor your temperature regularly",
          "Consider over-the-counter fever reducers if needed",
          "Consult a healthcare provider if fever persists or worsens"
        ],
        urgency: data.severity === 'severe' ? "medium" : "low"
      });
    }
    
    if (symptoms.some(s => s.includes('chest') || s.includes('breathing') || s.includes('breath'))) {
      suggestions.push({
        condition: "Respiratory Concern",
        likelihood: "high",
        description: "Chest or breathing symptoms require careful attention and monitoring.",
        recommendations: [
          "Seek immediate medical attention if breathing becomes severely difficult",
          "Rest in an upright position",
          "Avoid strenuous activities",
          "Monitor symptoms closely",
          "Contact a healthcare provider promptly"
        ],
        urgency: "high"
      });
    }
    
    if (symptoms.some(s => s.includes('headache') || s.includes('head'))) {
      suggestions.push({
        condition: "Headache",
        likelihood: "medium",
        description: "Headaches can result from various causes including stress, dehydration, or tension.",
        recommendations: [
          "Rest in a quiet, dark environment",
          "Apply a cold or warm compress",
          "Stay hydrated",
          "Consider over-the-counter pain relief",
          "Consult a doctor if headaches are severe or persistent"
        ],
        urgency: data.severity === 'severe' ? "medium" : "low"
      });
    }
    
    // Default suggestion if no specific patterns found
    if (suggestions.length === 0) {
      suggestions.push({
        condition: "General Health Concern",
        likelihood: "low",
        description: "Your symptoms have been noted. General self-care and monitoring are recommended.",
        recommendations: [
          "Get adequate rest and sleep",
          "Maintain proper hydration",
          "Monitor your symptoms for changes",
          "Consider consulting a healthcare provider if symptoms persist",
          "Seek immediate care if symptoms worsen significantly"
        ],
        urgency: data.severity === 'severe' ? "medium" : "low"
      });
    }
    
    return suggestions;
  }

  getChatHistory(): ChatMessage[] {
    return this.chatHistory;
  }

  clearHistory(): void {
    this.chatHistory = [];
  }
}

export const aiService = new AIHealthService();