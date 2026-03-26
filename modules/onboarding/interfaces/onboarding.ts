export interface IOnboardRequest {
  name: string;
  email: string;
  role: string;
}

export interface IOnboardResponse {
  success: boolean;
  message: string;
  data?: any;
}

export interface IOnboardingRepository {
  save(userData: any): Promise<boolean>;
  getByEmail(email: string): Promise<any | null>;
}
