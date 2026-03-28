import { Response } from "express";


export class BaseController {
    
    public successResponse(res: Response, data: {success:boolean, message:string, data:any}, code: number = 200):Response {
        return res.status(code).json(data);
    }

    public errorResponse(res: Response, data: {success:boolean, message:string, data:any}, code: number = 500):Response {
        return res.status(code).json(data);
    }
}