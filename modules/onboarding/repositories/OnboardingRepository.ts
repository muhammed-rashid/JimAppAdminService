export class OnboardingRepository {
  private users: any[] = [];

  constructor() {}

  public async save(userData: any): Promise<boolean> {
    try {
      console.log(`[Repository] Saving user ${userData.email} into database...`);
      this.users.push({ ...userData, onboardingAt: new Date() });
      return true;
    } catch (error) {
      console.error(`[Repository Error]: ${error}`);
      return false;
    }
  }

  public async getByEmail(email: string): Promise<any | null> {
    return this.users.find((user) => user.email === email) || null;
  }
}
