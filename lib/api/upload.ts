import api from "./axios";

export async function askAI(question: string) {
  const response = await api.post("/chatbot", {
    question,
  });

  return response.data;
}

export async function getChatHistory() {
  const response = await api.get("/chatbot/history");

  return response.data;
}