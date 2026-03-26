import { OnboardingRepository } from "../repositories/OnboardingRepository";
import { IOnboardRequest, IOnboardResponse } from "../interfaces/onboarding";

export class OnboardingService {
  private repository: OnboardingRepository;

  constructor(repository: OnboardingRepository) {
    this.repository = repository;
  }

  public async startProcess(data: IOnboardRequest): Promise<IOnboardResponse> {
    try {
      console.log(`[Service] Processing onboarding for ${data.name}...`);

      // Business logic: check if user already exists
      const existingUser = await this.repository.getByEmail(data.email);
      if (existingUser) {
        return { success: false, message: "User already onboarded!" };
      }

      // Business logic: add timestamp, any transformations, etc.
      const isSaved = await this.repository.save(data);

      if (!isSaved) {
        throw new Error("Failed to save data!");
      }

      return {
        success: true,
        message: "Onboarding initiated successfully",
        data: {
          email: data.email,
          status: "PENDING_VERIFICATION",
        },
      };
    } catch (error: any) {
      console.error(`[Service Error]: ${error.message}`);
      return { success: false, message: error.message };
    }
  }
}
