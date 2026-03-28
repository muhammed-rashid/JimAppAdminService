import { NextFunction, Request, Response } from "express";
import { singleton } from "tsyringe";
import { OnboardingService } from "../services/OnboardingService";
import { RegisterRequest } from "../interfaces/registerInterface";
import { BaseController } from "../../../base/controller/BaseController";
import { container } from "tsyringe";

@singleton()
class OnboardingController extends BaseController {
  
  constructor(private service: OnboardingService) {
    super();
  }


  public register = async (req: Request, res: Response, next: NextFunction): Promise<Response|void> => {
    try {
      const payload: RegisterRequest = req.body;
   

      const result = await this.service.register(payload);

      if (!result.success) {
        return this.errorResponse(res, result, 500);
      }

      return this.successResponse(res, result, 201);
    } catch (error: any) {
       next(error);
    }
  }
}

export const onboardingController = container.resolve(OnboardingController);

