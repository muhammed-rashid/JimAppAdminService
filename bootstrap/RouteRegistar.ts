import { Application } from "express";
import { onboardingRoutes } from "../modules/onboarding/routes/api";

class RouteRegistar {

    private app:Application;

    constructor(app:Application) {
        this.app = app;
        this.registerRoutes();
    }

    private registerRoutes():void {
        this.app.use("/onboarding", onboardingRoutes);
    }


}

export default RouteRegistar;