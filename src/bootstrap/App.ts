
import { globalErrorHandler } from "../base/middleware/global/ErrorMiddleware";
import MiddlewareRegistar from "./MiddlewareRegistar";
import RouteRegistar from "./RouteRegistar";
import express, { Application } from "express";

class App {
  public app: Application;
  private port: string | number;

  constructor() {

    this.app = express();
    this.port = process.env.PORT || 3000;

    new MiddlewareRegistar(this.app);
    new RouteRegistar(this.app);

    this.app.use(globalErrorHandler);

  }


  public listen(): void {

    this.app.listen(this.port, () => {
      console.log(`Server running on http://localhost:${this.port}`);
    });


  }
}

export default App;