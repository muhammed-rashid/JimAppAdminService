import { Application } from "express";
import { onboardingRoutes } from "../modules/onboarding/routes/api";
import { NotFound } from "../base/middleware/global/NotFound";

class RouteRegistar {

    private app:Application;

    constructor(app:Application) {
        this.app = app;
        this.registerRoutes();
    }

    private registerRoutes():void {
        this.app.use("/api/v1/onboarding", onboardingRoutes);
        this.app.use(NotFound)
    }


}

export default RouteRegistar;