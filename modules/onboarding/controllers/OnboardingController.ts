import { Request, Response } from "express";
import { OnboardingService } from "../Services/OnboardingService";
import { IOnboardRequest } from "../interfaces/onboarding";

export class OnboardingController {
  private service: OnboardingService;

  constructor(service: OnboardingService) {
    this.service = service;
  }

  public async handleOnboard(req: Request, res: Response): Promise<void> {
    try {
      console.log(`[Controller] Handling onboarding request for ${req.body.name}...`);
      const payload: IOnboardRequest = req.body;
      
      // Validation basics
      if (!payload.name || !payload.email) {
        res.status(400).json({ success: false, message: "Name and email are required fields." });
        return;
      }

      // Delegate to service
      const result = await this.service.startProcess(payload);

      if (!result.success) {
        res.status(400).json(result);
        return;
      }

      res.status(201).json(result);
    } catch (error: any) {
      console.error(`[Controller Error]: ${error.message}`);
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
        error: error.message,
      });
    }
  }
}
