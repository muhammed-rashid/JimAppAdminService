import { Application } from "express";
import cors from "cors";
import express from "express";

class MiddlewareRegistar {

    private app:Application;

    constructor(app:Application) {
        this.app = app;
        this.registerMiddleware();
    }

    private registerMiddleware():void {
        this.app.use(cors());
        this.app.use(express.json());
    }


}

export default MiddlewareRegistar;
