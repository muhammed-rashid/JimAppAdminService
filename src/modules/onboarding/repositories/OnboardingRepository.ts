import { singleton } from "tsyringe";
import { db } from "../../../utils/database";

@singleton()
export class OnboardingRepository {

  constructor() {}

  public async register(userData: any): Promise<boolean> {

   const user = await db.User.create({
    data: {
      name:userData.name,
      email:userData.email
    },
   });
   console.log("User created", user);
   return true;
  }
}
