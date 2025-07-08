import React from 'react';
import { AlertTriangle, CheckCircle, Clock, User, MessageCircle, ArrowLeft } from 'lucide-react';
import { HealthData, HealthSuggestion } from '../types/health';

interface ResultsDisplayProps {
  healthData: HealthData;
  suggestions: HealthSuggestion[];
  onBack: () => void;
  onStartChat: () => void;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({
  healthData,
  suggestions,
  onBack,
  onStartChat
}) => {
  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-green-100 text-green-800 border-green-200';
    }
  };

  const getUrgencyIcon = (urgency: string) => {
    switch (urgency) {
      case 'high': return <AlertTriangle className="h-5 w-5" />;
      case 'medium': return <Clock className="h-5 w-5" />;
      default: return <CheckCircle className="h-5 w-5" />;
    }
  };

  const getLikelihoodColor = (likelihood: string) => {
    switch (likelihood) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      default: return 'bg-green-500';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Health Analysis Results</h1>
              <p className="mt-2 text-gray-600">
                Based on your symptoms and information provided
              </p>
            </div>
            <button
              onClick={onBack}
              className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Form
            </button>
          </div>
        </div>

        {/* Patient Summary */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <User className="h-5 w-5 mr-2 text-blue-600" />
            Patient Summary
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-sm text-blue-600 font-medium">Name</div>
              <div className="text-lg font-semibold text-blue-900">{healthData.name}</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-sm text-green-600 font-medium">Age</div>
              <div className="text-lg font-semibold text-green-900">{healthData.age} years</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="text-sm text-purple-600 font-medium">Gender</div>
              <div className="text-lg font-semibold text-purple-900 capitalize">{healthData.gender}</div>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <div className="text-sm text-orange-600 font-medium">Severity</div>
              <div className="text-lg font-semibold text-orange-900 capitalize">{healthData.severity}</div>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Symptoms</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {healthData.symptoms.map((symptom) => (
                <span
                  key={symptom}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800"
                >
                  {symptom}
                </span>
              ))}
            </div>
            
            {healthData.description && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Description</h3>
                <p className="text-gray-600 bg-gray-50 p-4 rounded-lg">{healthData.description}</p>
              </div>
            )}
          </div>
        </div>

        {/* AI Analysis Results */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">AI Analysis Results</h2>
          
          {suggestions.map((suggestion, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{suggestion.condition}</h3>
                  <div className={`flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getUrgencyColor(suggestion.urgency)}`}>
                    {getUrgencyIcon(suggestion.urgency)}
                    <span className="ml-1 capitalize">{suggestion.urgency} Priority</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <span className="text-sm font-medium text-gray-700 mr-2">Likelihood:</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                        <div 
                          className={`h-2 rounded-full ${getLikelihoodColor(suggestion.likelihood)}`}
                          style={{ 
                            width: suggestion.likelihood === 'high' ? '80%' : 
                                   suggestion.likelihood === 'medium' ? '60%' : '40%' 
                          }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 capitalize">{suggestion.likelihood}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{suggestion.description}</p>

                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Recommendations</h4>
                  <ul className="space-y-2">
                    {suggestion.recommendations.map((rec, recIndex) => (
                      <li key={recIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Important Disclaimer */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-8">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-0.5" />
            <div>
              <h3 className="text-lg font-medium text-yellow-800">Important Disclaimer</h3>
              <p className="mt-2 text-yellow-700">
                This AI analysis is for informational purposes only and should not replace professional medical advice. 
                Always consult with a qualified healthcare provider for proper diagnosis and treatment. If you are 
                experiencing a medical emergency, please call emergency services immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          <button
            onClick={onStartChat}
            className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Ask AI Assistant
          </button>
          <button
            onClick={onBack}
            className="flex items-center px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
          >
            New Assessment
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;