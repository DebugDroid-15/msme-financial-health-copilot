import api from "./axios";

export async function uploadDocument(file: File) {
  const form = new FormData();

  form.append("file", file);

  const response = await api.post(
    "/upload",
    form,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
}