# AI Voice Recorder & Note Taking App

Record your voice and take notes with AI transcription. A completely local voice recording application with AI-powered speech-to-text functionality.

## Technologies Used

- React Native
- Expo
- expo-router for navigation
- expo-av for voice recording
- AsyncStorage for local data persistence
- OpenAI Whisper API for speech-to-text transcription

## Features

- 🎙️ **Voice Recording**: High-quality audio recording using Expo AV
- 🤖 **AI Transcription**: Automatic speech-to-text conversion using OpenAI Whisper
- 💾 **Local Storage**: All data stored locally with AsyncStorage
- 📱 **Cross-Platform**: Works on iOS, Android, and Web
- ✏️ **Note Management**: Create, edit, and delete voice notes
- 🌐 **No Cloud Dependency**: Completely offline except for AI transcription

## Getting Started

### Prerequisites

- Node.js
- Expo CLI
- OpenAI API key

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/Charlo-O/ai-voice-recorder
   ```

2. Navigate to the project directory:
   ```
   cd ai-voice-recorder
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Set up your OpenAI API key in environment variables:
   - Create a `.env` file in the project root
   - Add: `OPENAI_API_KEY=your_api_key_here`

5. Start the Expo development server:
   ```
   npm run web
   # or for mobile
   npx expo run:android
   # or
   npx expo run:ios
   ```

## Project Structure

- `app/index.tsx`: Main screen with the list of notes
- `app/new-recording.tsx`: Audio recording and transcription screen
- `app/[id].tsx`: Screen for editing and deleting a specific note
- `utils/Storage.ts`: Local storage management utilities
- `app/api/speech-to-text+api.ts`: OpenAI integration for transcription

## Privacy & Data Storage

This app stores all your data locally on your device. Your notes are never uploaded to external servers (except for AI transcription which requires sending audio to OpenAI). You have complete control over your data.

## AI Transcription

The app uses OpenAI's Whisper model for speech-to-text transcription. To use this feature:

1. Sign up for an OpenAI account
2. Get your API key from the OpenAI dashboard
3. Add it to your environment variables as `OPENAI_API_KEY`

## Building for Production

### Web
```
npx expo export --platform web
```

### Android
```
npx expo build:android
```

### iOS
```
npx expo build:ios
```