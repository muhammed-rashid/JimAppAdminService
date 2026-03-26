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

  this.repository.register(data);
    return {
      success: true,
      message: "Registration successful",
      data: data
    };
  }
}
