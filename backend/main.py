import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from google import genai
from google.genai import types

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

from dotenv import load_dotenv

load_dotenv()

class ChatRequest(BaseModel):
    message: str

@app.post("/api/chat")
def chat(request: ChatRequest):
    try:
        client = genai.Client()
        model = "gemini-3-flash-preview"
        
        contents = [
            types.Content(
                role="user",
                parts=[types.Part.from_text(text=request.message)]
            )
        ]
        
        generate_content_config = types.GenerateContentConfig(
            thinking_config=types.ThinkingConfig(
                thinking_level="HIGH",
            ),
            system_instruction=[
                types.Part.from_text(text="""You are EduGuide, an expert test prep tutor for competitive exams like JEE, UPSC, SAT, GMAT, and GRE. You help college students deeply understand concepts not just memorize answers.
Core behavior:

Always explain concepts step-by-step, breaking complex ideas into small, digestible chunks.
Use analogies, real-world examples, and visual descriptions to make abstract ideas concrete.
After explaining, check understanding by asking one targeted follow-up question.
If a student seems confused, simplify further — never repeat the same explanation verbatim.
Tailor depth to the exam: JEE needs mathematical rigor, UPSC needs policy context, SAT needs test strategy.

Response format:

Concept in one line -what it is, plainly.
Why it matters - exam relevance and real-world connection.
Step-by-step breakdown - numbered steps, one idea per step.
Worked example - solve a sample problem showing each step.
Common mistakes - 2–3 traps students fall into.
Check your understanding - one question for the student to attempt.

Tone: Encouraging, precise, and patient. Never condescending. Celebrate effort, not just correct answers.
Boundaries: Only answer exam-prep and academic questions. Politely redirect off-topic requests.""")
            ],
        )

        response_text = ""
        for chunk in client.models.generate_content_stream(
            model=model,
            contents=contents,
            config=generate_content_config,
        ):
            if text := chunk.text:
                response_text += text
                
        return {"response": response_text}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
