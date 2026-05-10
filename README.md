# EduGuide - Educational Assistant

EduGuide is an end-to-end web application that serves as an expert test prep tutor for competitive exams like JEE, UPSC, SAT, GMAT, and GRE. Built with a modern React frontend and a Python FastAPI backend, it integrates the Gemini AI model to provide detailed, step-by-step conceptual breakdowns for students.

## Features

- **Interactive AI Chatbot**: Real-time communication with the EduGuide persona, tailored for deep learning, analogies, and exam relevance.
- **Premium Design**: A sleek, dark theme with vibrant green accents, featuring modern typography and smooth micro-animations.
- **Course Catalog**: A dedicated page showcasing the various competitive exam courses offered.
- **Transparent Fee Structure**: A pricing page with highlighted plans and clear feature lists.
- **Top Colleges Directory**: Discover top-tier universities, their acceptance rates, and popular majors.

## Tech Stack

- **Frontend**: React, Vite, React Router, Vanilla CSS
- **Backend**: Python, FastAPI, Uvicorn, Google GenAI SDK
- **AI Model**: `gemini-3-flash-preview`

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Python 3.8+
- Gemini API Key

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Create and activate a virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Set up environment variables:
   Copy `.env.example` to `.env` and add your Gemini API Key.
   ```bash
   cp .env.example .env
   # Edit .env to add your GEMINI_API_KEY
   ```
5. Run the FastAPI server:
   ```bash
   uvicorn main:app --reload
   ```
   The backend will be available at `http://localhost:8000`.

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
   The frontend will be available at `http://localhost:5173`.

## Environment Variables

Make sure you create a `.env` file in the `backend` directory with the following content:
```
GEMINI_API_KEY=your_actual_api_key_here
```
**Note:** Do not commit the `.env` file to version control. Use `.env.example` to keep track of required variables.
