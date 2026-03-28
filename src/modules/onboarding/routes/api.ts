import "reflect-metadata";
import { Router } from "express";
import { onboardingController } from "../controllers/OnboardingController";

const router = Router();

router.post("/register", onboardingController.register);

export const onboardingRoutes = router;