import "reflect-metadata";
import dotenv from "dotenv";
import App from "./bootstrap/App";

dotenv.config();    

const server = new App();
server.listen();