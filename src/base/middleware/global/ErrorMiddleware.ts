import { NextFunction, Request, Response } from "express";

export const globalErrorHandler = (
  err: any,
  req: Request, 
  res: Response,
  next: NextFunction
): Response => {

  const statusCode: number = err.status || 500;
  const message: string = err.message || "Something went wrong";

  console.error(`[Global Error Handler]: ${err.stack}`);

  return res.status(statusCode).json({
    success: false,
    message: message,
    data: process.env.NODE_ENV === "development" ? { stack: err.stack, details: err } : null,
  });
};
