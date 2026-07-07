import api from "./axios";

export async function getSchemes() {
  const response = await api.get("/schemes");

  return response.data;
}