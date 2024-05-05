# Troi.AI - AI Interview Simulator

Troi.AI is an AI-powered interview simulator designed to provide a conversational interface for interview practice. By submitting the job description and resume, the system initiates interview-like interactions using both audio and text formats.

## Features

- **Chat Interface:** Engage in interview-like conversations through text and voice inputs.
- **AI Questioning:** Utilizes large language models (LLMs) and natural language processing algorithms to generate interview questions based on submitted job descriptions and resumes.
- **Audio Interaction:** Offers voice-based interaction for answering questions, with the AI interviewer's responses converted to audio using text-to-speech technology.
- **Typing Support:** Allows candidates to respond to questions through typing.

### Usage

1. **Submit Job Description and Resume:** Provide the necessary details, such as the job description and resume, to initiate the interview simulation.
2. **Engage in Interview:** Answer questions posed by Troi.AI using either voice or text input.
3. **Review Performance:** Get feedback on your answers and performance during the simulation.

### Architecture

- **Frontend:** Built using React and Tailwind
- **Backend:** Developed with Node.JS and ExpressJS for handling API calls
- **Authentication:** Utilizes Supabase and PostgreSQL for user authentication and management
- **Database:** Employs MongoDB for storing chat conversations and user data
- **APIs:** Integrates with GROQ (LLM) for natural language processing and question generation, and ElevenLabs (TTS) for text-to-speech conversion

### Example

![Screenshot 1](/assets/Screenshot.png)

## Contributing

Contributions to enhance the functionality, accuracy, or expand the knowledge base of Troi.AI are welcome! Feel free to submit pull requests, report issues, or suggest improvements.
