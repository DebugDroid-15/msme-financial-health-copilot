import api from "./axios";

export async function generateExecutiveReport() {
  const response = await api.post("/reports/generate");

  return response.data;
}

export async function getExecutiveReport() {
  const response = await api.get("/reports/executive");

  return response.data;
}

export async function getReportHistory() {
  const response = await api.get("/reports/history");

  return response.data;
}