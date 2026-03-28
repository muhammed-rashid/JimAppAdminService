import { singleton } from "tsyringe";
import { OnboardingRepository } from "../repositories/OnboardingRepository";

@singleton()
export class OnboardingService {
  constructor(
    private repository: OnboardingRepository
  ) {}

  public async register(data: any): Promise<{
    success: boolean;
    message: string;
    data: any;
  }> {

  const result = await this.repository.register(data);
  
    return {
      success: result,
      message: result ? "Registration successful" : "Registration failed",
      data: data
    };
  }
}
