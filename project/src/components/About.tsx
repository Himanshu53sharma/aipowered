import React from 'react';
import { Heart, Shield, Users, Award, ChevronRight } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Heart,
      title: 'Health-Focused AI',
      description: 'Our AI is specifically trained on medical literature and health data to provide accurate, relevant health insights.'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your health information is encrypted and never stored. We prioritize your privacy and data security above all else.'
    },
    {
      icon: Users,
      title: 'Medical Expert Backed',
      description: 'Developed in collaboration with healthcare professionals to ensure clinical accuracy and safety.'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Trusted by thousands of users worldwide for preliminary health assessments and guidance.'
    }
  ];

  const team = [
    {
      name: 'Himanshu SHarma',
      },
    {
      name: 'Pratham Singh',
       },
    {
      name: 'Savant Solanki',
       }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Our AI Health Assistant
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Empowering individuals with AI-powered health insights while maintaining the highest standards of medical accuracy and privacy.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              To democratize access to preliminary health guidance through advanced AI technology, helping individuals make informed decisions about their health while emphasizing the importance of professional medical care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <feature.icon className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI health assistant uses advanced natural language processing and medical knowledge to provide personalized health insights.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <span className="text-blue-600 font-bold text-lg">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Input Your Symptoms</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Provide detailed information about your symptoms, including severity, duration, and any relevant medical history.
              </p>
              <div className="flex items-center text-blue-600">
                <span className="text-sm font-medium">Quick & Easy</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 rounded-full p-3 mr-4">
                  <span className="text-green-600 font-bold text-lg">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">AI Analysis</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Our AI processes your information using advanced algorithms trained on medical literature and clinical data.
              </p>
              <div className="flex items-center text-green-600">
                <span className="text-sm font-medium">Instant Results</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 rounded-full p-3 mr-4">
                  <span className="text-purple-600 font-bold text-lg">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Get Insights</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Receive personalized health insights, recommendations, and guidance on when to seek professional medical care.
              </p>
              <div className="flex items-center text-purple-600">
                <span className="text-sm font-medium">Actionable Advice</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our multidisciplinary team combines medical expertise with cutting-edge AI technology to deliver the best possible health assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-start">
              <Shield className="h-8 w-8 text-yellow-600 mr-4 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Important Medical Disclaimer</h3>
                <div className="text-gray-600 space-y-3">
                  <p>
                    Our AI Health Assistant is designed to provide general health information and should not be considered a substitute for professional medical advice, diagnosis, or treatment.
                  </p>
                  <p>
                    Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have learned from our AI assistant.
                  </p>
                  <p>
                    If you think you may have a medical emergency, immediately call your doctor or dial emergency services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;