import React, { useState } from 'react';
import Navigation from './components/Navigation';
import LandingPage from './components/LandingPage';
import HealthForm from './components/HealthForm';
import ResultsDisplay from './components/ResultsDisplay';
import ChatInterface from './components/ChatInterface';
import About from './components/About';
import Contact from './components/Contact';
import { HealthData, HealthSuggestion } from './types/health';
import { aiService } from './services/aiService';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [healthData, setHealthData] = useState<HealthData | null>(null);
  const [healthSuggestions, setHealthSuggestions] = useState<HealthSuggestion[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleGetStarted = () => {
    setCurrentSection('form');
  };

  const handleHealthFormSubmit = async (data: HealthData) => {
    setHealthData(data);
    setIsProcessing(true);
    
    try {
      const suggestions = await aiService.processHealthData(data);
      setHealthSuggestions(suggestions);
      setCurrentSection('results');
    } catch (error) {
      console.error('Error processing health data:', error);
      // Handle error appropriately
    } finally {
      setIsProcessing(false);
    }
  };

  const handleBackToHome = () => {
    setCurrentSection('home');
    setHealthData(null);
    setHealthSuggestions([]);
  };

  const handleBackToForm = () => {
    setCurrentSection('form');
  };

  const handleStartChat = () => {
    setCurrentSection('chat');
  };

  const renderCurrentSection = () => {
    if (isProcessing) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Analyzing Your Health Data</h2>
            <p className="text-gray-600">
              Our AI is processing your symptoms and generating personalized recommendations...
            </p>
          </div>
        </div>
      );
    }

    switch (currentSection) {
      case 'home':
        return <LandingPage onGetStarted={handleGetStarted} />;
      case 'form':
        return <HealthForm onSubmit={handleHealthFormSubmit} onBack={handleBackToHome} />;
      case 'results':
        return healthData && healthSuggestions.length > 0 ? (
          <ResultsDisplay
            healthData={healthData}
            suggestions={healthSuggestions}
            onBack={handleBackToForm}
            onStartChat={handleStartChat}
          />
        ) : null;
      case 'chat':
        return <ChatInterface onBack={handleBackToHome} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <LandingPage onGetStarted={handleGetStarted} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentSection={currentSection} onSectionChange={setCurrentSection} />
      {renderCurrentSection()}
    </div>
  );
}

export default App;