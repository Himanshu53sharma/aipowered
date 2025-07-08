# AI-Powered Health Assistant

A modern, responsive web application that provides AI-powered health insights and assistance through an intuitive chat interface.

## Features

- **Health Assessment Form**: Comprehensive symptom input and analysis
- **AI Chat Interface**: Real-time conversation with AI health assistant
- **Intelligent Analysis**: AI-powered health suggestions and recommendations
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Privacy Focused**: No data storage, secure interactions

## Technology Stack

- **Frontend**: React 18 + TypeScript + Tailwind CSS
- **AI Integration**: OpenRouter API with Claude 3.5 Sonnet
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Netlify

## Setup Instructions

### Prerequisites

- Node.js 18+ and npm
- OpenRouter API key

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ai-health-assistant
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your OpenRouter API key to `.env.local`:
```
VITE_OPENROUTER_API_KEY=your_openrouter_api_key_here
```

5. Start the development server:
```bash
npm run dev
```

### Getting an OpenRouter API Key

1. Visit [OpenRouter.ai](https://openrouter.ai/)
2. Sign up for an account
3. Navigate to the API Keys section
4. Generate a new API key
5. Add credits to your account for API usage

## Usage

1. **Health Assessment**: Fill out the health form with your symptoms and details
2. **AI Analysis**: Receive AI-powered health insights and recommendations
3. **Chat Interface**: Continue the conversation with follow-up questions
4. **Get Guidance**: Receive personalized health advice and next steps

## Important Disclaimers

- This application is for informational purposes only
- It is not a substitute for professional medical advice
- Always consult healthcare providers for medical concerns
- In emergencies, contact emergency services immediately

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

The application is configured for easy deployment on Netlify:

1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting platform
3. Set environment variables in your hosting platform's dashboard

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.