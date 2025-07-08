export interface HealthData {
  id: string;
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  symptoms: string[];
  description: string;
  severity: 'mild' | 'moderate' | 'severe';
  duration: string;
  timestamp: Date;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  type?: 'text' | 'suggestion' | 'warning';
}

export interface HealthSuggestion {
  condition: string;
  likelihood: 'low' | 'medium' | 'high';
  description: string;
  recommendations: string[];
  urgency: 'low' | 'medium' | 'high';
}