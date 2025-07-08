import React from 'react';
import { Heart, Shield, Clock, Users, ChevronRight, Activity, Brain, Stethoscope } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced AI algorithms analyze your symptoms and provide personalized health insights.'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Get health guidance anytime, anywhere. Our AI assistant is always ready to help.'
    },
    {
      icon: Shield,
      title: 'Privacy Protected',
      description: 'Your health information is encrypted and secure. We prioritize your privacy.'
    },
    {
      icon: Users,
      title: 'Expert Backed',
      description: 'Our AI is trained on medical knowledge and continuously updated by healthcare professionals.'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Users Helped' },
    { number: '95%', label: 'Satisfaction Rate' },
    { number: '24/7', label: 'Available' },
    { number: '1M+', label: 'Consultations' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Your Personal</span>
                <span className="block text-blue-600">AI Health Assistant</span>
              </h1>
              <p className="mt-6 text-base text-gray-600 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0">
                Get instant health insights, symptom analysis, and personalized recommendations powered by advanced AI. 
                Your health journey starts here.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <button
                  onClick={onGetStarted}
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg md:px-10 md:py-4 transition-colors duration-200"
                >
                  Get Started
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
                <p className="mt-3 text-sm text-gray-500">
                  Free consultation • No registration required • Instant results
                </p>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                  <div className="px-6 py-8">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                      <Stethoscope className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Health Analysis</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Describe your symptoms and get AI-powered insights instantly.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-500">
                        <Activity className="h-4 w-4 mr-2 text-green-500" />
                        Symptom tracking
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Brain className="h-4 w-4 mr-2 text-blue-500" />
                        AI recommendations
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Shield className="h-4 w-4 mr-2 text-purple-500" />
                        Secure & private
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-blue-600 sm:text-3xl">{stat.number}</div>
                <div className="mt-2 text-sm font-medium text-gray-600 sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Our AI Health Assistant?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the future of healthcare with our intelligent, accessible, and secure health assistant.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to start your health journey?</span>
            <span className="block text-blue-200">Get your AI health assessment today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <button
                onClick={onGetStarted}
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                Start Assessment
                <Heart className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;