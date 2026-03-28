import { Request, Response, NextFunction } from "express";
import { ZodObject, ZodError,z } from "zod";

export const validate = (schema: ZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errors: Record<string, [string]> = {};
        error.issues.forEach((issue) => {
          const field = issue.path[issue.path.length - 1] as string;
          if (!errors[field]) {
            errors[field] = [issue.message];
          }
        });
        return res.status(422).json({
          message:"Validation Error",
          errors});
      }
      next(error);
    }
  };
};
