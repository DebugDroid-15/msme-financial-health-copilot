import api from "./axios";

export interface ExecutiveReport {
  business: string;
  financial_health_score: number;
  funding_readiness: number;
  risk_level: string;
  executive_summary: string;
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
  recommended_schemes: string[];
  latest_revenue: number;
  latest_profit: number;
  cash_flow: number;
}

export interface ReportHistoryItem {
  id: number;
  title: string;
  type: string;
  summary: string;
  file: string;
  created_at: string;
}

export interface ExecutiveResponse {
  success: boolean;
  report: ExecutiveReport;
}

export interface HistoryResponse {
  success: boolean;
  count: number;
  history: ReportHistoryItem[];
}

export async function getExecutiveReport() {
  const response =
    await api.get<ExecutiveResponse>(
      "/reports/executive"
    );

  return response.data;
}

export async function getReportHistory() {
  const response =
    await api.get<HistoryResponse>(
      "/reports/history"
    );

  return response.data;
}

export async function generateExecutiveReport() {
  const response =
    await api.post<ExecutiveResponse>(
      "/reports/generate"
    );

  return response.data;
}