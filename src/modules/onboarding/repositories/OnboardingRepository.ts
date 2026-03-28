import { singleton } from "tsyringe";

@singleton()
export class OnboardingRepository {

  constructor() {}

  public async register(userData: any): Promise<boolean> {
   console.log("Register repository called", userData);
   return true;
  }
}
