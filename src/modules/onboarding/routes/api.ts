import "reflect-metadata";
import { Router } from "express";
import { onboardingController } from "../controllers/OnboardingController";
import { validate } from "../../../base/middleware/validator/Validator";
import { registerRequest } from "../requests/RegisterRequest";

const router = Router();

router.post("/register", validate(registerRequest), onboardingController.register);

export const onboardingRoutes = router;