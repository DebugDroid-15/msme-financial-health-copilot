import api from "./axios";

export interface DashboardAnalytics {
  months: string[];
  revenue: number[];
  expenses: number[];
  profit: number[];
  cashflow: number[];
  revenue_growth: number;
  profit_growth: number;
  overall_score: number;
  risk: string;
  funding_readiness: number;
}

export interface LoanDetails {
  risk: string;
  funding_readiness: number;
  recommended_limit: string;
  approval_probability: number;
}

export interface RecentDocument {
  name: string;
  type: string;
  status: string;
}

export interface DashboardResponse {
  success: boolean;

  business: {
    id: number;
    business_name: string;
    owner_name: string;
    business_type: string;
    city: string;
    state: string;
  };

  financial: {
    overall_score: number;
    liquidity: number;
    profitability: number;
    cashflow: number;
    growth: number;
    compliance: number;
    digital: number;
    employment: number;
    funding_readiness: number;
    risk: string;
  };

  latest_month: {
    revenue: number;
    expenses: number;
    profit: number;
    cash_flow: number;
  };

  analytics: DashboardAnalytics;

  loan: LoanDetails;

  insights: string[];

  priorities: string[];

  recent_documents: RecentDocument[];

  summary: {
    notifications: number;
    reports: number;
  };
}

export async function getDashboard(): Promise<DashboardResponse> {
  const response = await api.get<DashboardResponse>("/dashboard");

  return response.data;
}